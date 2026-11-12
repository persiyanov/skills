// Draws the alignment lines of what is on screen and marks what misses one by a few
// pixels: the left and right edges of text, icons and boxes; the tops and bottoms of
// boxes; the baselines of text side by side on one row; and the center of an icon beside
// text, against the middle of the text's capitals. It also lists gaps between items of
// one kind that differ by a few pixels. It measures what is drawn, not the boxes: text by
// its letters, SVG icons by their shapes, and other elements only where they paint a
// background, border, shadow or image. Blue lines are shared edges, green ones shared
// baselines, and red marks a miss.
//
//   agent-browser eval "window.overlayTarget = '.dialog'"   (optional: measure only inside it)
//   agent-browser eval --stdin < design-review/scripts/layout-overlay.js
//   agent-browser screenshot overlay.png
//   agent-browser eval "document.getElementById('layout-overlay').remove()"
//
// It covers the viewport only: scroll, then run it again. A near-miss is a candidate,
// not a finding: an optical correction makes shapes look aligned when boxes differ.
(() => {
  const NEAR = 4; // an edge 1 to NEAR px off a shared line is a near-miss (our default)
  document.getElementById('layout-overlay')?.remove();
  const root = (window.overlayTarget && document.querySelector(window.overlayTarget)) || document.body;
  const vw = innerWidth, vh = innerHeight;

  const name = el => {
    let s = el.tagName.toLowerCase();
    const cls = (el.getAttribute('class') || '').trim().split(/\s+/).filter(Boolean);
    if (el.id) s += '#' + el.id;
    else if (cls.length) s += '.' + cls.slice(0, 2).join('.');
    const text = (el.innerText || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ');
    return text ? `${s} "${text.slice(0, 30)}"` : s;
  };
  const onScreen = r => r.width > 0 && r.height > 0 && r.right > 0 && r.bottom > 0 && r.left < vw && r.top < vh;
  const seen = (el, r) => {
    if (el.checkVisibility && !el.checkVisibility({ opacityProperty: true, visibilityProperty: true })) return false;
    const x = Math.min(Math.max(r.left + r.width / 2, 0), vw - 1);
    const y = Math.min(Math.max(r.top + r.height / 2, 0), vh - 1);
    const hit = document.elementFromPoint(x, y);
    return !!hit && (hit === el || el.contains(hit) || hit.contains(el));
  };
  const union = rects => {
    const u = rects.reduce((a, r) => ({
      left: Math.min(a.left, r.left), right: Math.max(a.right, r.right),
      top: Math.min(a.top, r.top), bottom: Math.max(a.bottom, r.bottom),
    }), { left: Infinity, right: -Infinity, top: Infinity, bottom: -Infinity });
    return { ...u, width: u.right - u.left, height: u.bottom - u.top };
  };

  // Each shape lists the edges that count. Text tops and bottoms are font metrics, and
  // an icon's top depends on its shape, so only boxes and images have y edges; text and
  // icons are lined up across a row by baselines and centers instead (see "Rows" below).
  // Text counts on the side it is aligned to; centered text has no alignment edge.
  const shapes = [];
  const inRows = [];
  const ctx = document.createElement('canvas').getContext('2d');
  const fonts = {};
  const fontMetrics = s => {
    const f = `${s.fontStyle} ${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
    if (!fonts[f]) {
      ctx.font = f;
      const m = ctx.measureText('H');
      fonts[f] = { asc: m.fontBoundingBoxAscent, desc: m.fontBoundingBoxDescent, cap: m.actualBoundingBoxAscent };
    }
    return fonts[f];
  };
  const add = (el, r, edges) => shapes.push({ el, edges, left: r.left, right: r.right, top: r.top, bottom: r.bottom });
  const textEdges = el => {
    const a = getComputedStyle(el).textAlign;
    const rtl = getComputedStyle(el).direction === 'rtl';
    if (a === 'center') return [];
    if (a === 'justify') return ['left', 'right'];
    if (a === 'right' || (a === 'end' && !rtl) || (a === 'start' && rtl)) return ['right'];
    return ['left'];
  };

  const range = document.createRange();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let n; (n = walker.nextNode());) {
    const t = n.textContent, start = t.search(/\S/);
    const el = n.parentElement;
    if (start < 0 || !el || el.closest('svg, script, style, noscript')) continue;
    // Text clipped to a pixel, such as a label only screen readers get, is not drawn.
    const box = el.getBoundingClientRect();
    if (box.width <= 1 || box.height <= 1) continue;
    range.setStart(n, start);
    range.setEnd(n, t.length - t.match(/\s*$/)[0].length);
    const rects = [...range.getClientRects()].filter(onScreen);
    if (!rects.length) continue;
    const u = union(rects);
    if (!seen(el, u)) continue;
    add(el, u, textEdges(el));
    // A line's box is the font's ascent plus descent, centered on its line: the baseline
    // sits one ascent below the top of that span.
    const { asc, desc, cap } = fontMetrics(getComputedStyle(el));
    for (const r of rects) {
      const base = r.top + (r.height - asc - desc) / 2 + asc;
      inRows.push({ el, icon: false, at: base, mid: base - cap / 2, left: r.left, right: r.right, top: r.top, bottom: r.bottom });
    }
  }

  const graphics = 'path, circle, ellipse, line, polyline, polygon, rect, use, image, text';
  for (const el of root.querySelectorAll('*')) {
    if (el.closest('#layout-overlay') || (el.ownerSVGElement && el.tagName !== 'svg')) continue;
    if (el instanceof SVGSVGElement) {
      const parts = [...el.querySelectorAll(graphics)].map(p => p.getBoundingClientRect()).filter(onScreen);
      const r = parts.length ? union(parts) : el.getBoundingClientRect();
      if (onScreen(r) && seen(el, r)) {
        add(el, r, ['left', 'right']);
        inRows.push({ el, icon: true, mid: (r.top + r.bottom) / 2, left: r.left, right: r.right, top: r.top, bottom: r.bottom });
      }
      continue;
    }
    const r = el.getBoundingClientRect();
    if (!onScreen(r) || (r.width >= vw - 1 && r.height >= vh - 1)) continue;
    const s = getComputedStyle(el);
    const replaced = /^(IMG|VIDEO|CANVAS|IFRAME|INPUT|SELECT|TEXTAREA|PICTURE)$/.test(el.tagName);
    // A border draws a box on three sides or more; on fewer it is a rule, not a box.
    const shows = c => !/^transparent$|[,/]\s*0\)$/.test(c);
    const border = ['Top', 'Right', 'Bottom', 'Left'].filter(side =>
      parseFloat(s[`border${side}Width`]) > 0 && s[`border${side}Style`] !== 'none' && shows(s[`border${side}Color`])).length >= 3;
    const shadow = (s.boxShadow.match(/[a-z]+\([^)]*\)/g) || []).some(shows);
    const painted = replaced || shows(s.backgroundColor) || border || shadow || s.backgroundImage !== 'none';
    if (painted && seen(el, r)) add(el, r, ['left', 'right', 'top', 'bottom']);
  }

  // Group positions that coincide (within 1 px) into lines.
  const linesFor = (edge, list) => {
    const pts = list.map(sh => ({ sh, at: sh[edge] })).sort((a, b) => a.at - b.at);
    const groups = [];
    for (const p of pts) {
      const g = groups[groups.length - 1];
      if (g && p.at - g.pts[g.pts.length - 1].at < 1) g.pts.push(p);
      else groups.push({ pts: [p] });
    }
    for (const g of groups) g.at = g.pts.reduce((s, p) => s + p.at, 0) / g.pts.length;
    return groups;
  };

  const report = { viewport: [vw, vh], shapes: shapes.length, lines: {}, nearMisses: [], unequalGaps: [] };
  const overlay = document.createElement('div');
  overlay.id = 'layout-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2147483647;font:10px/1 ui-monospace,monospace';
  const draw = (css, label) => {
    const d = document.createElement('div');
    d.style.cssText = 'position:absolute;' + css;
    if (label) d.textContent = label;
    overlay.appendChild(d);
  };

  const edges = { left: 'x', right: 'x', top: 'y', bottom: 'y' };
  const mid = (sh, axis) => (axis === 'x' ? sh.left + sh.right : sh.top + sh.bottom) / 2;
  for (const [edge, axis] of Object.entries(edges)) {
    const list = shapes.filter(sh => sh.edges.includes(edge));
    const groups = linesFor(edge, list);
    const shared = groups.filter(g => g.pts.length >= 2);
    report.lines[edge] = { distinct: groups.length, shared: shared.length };
    for (const g of shared) {
      draw(axis === 'x'
        ? `left:${g.at}px;top:0;bottom:0;width:1px;background:rgba(0,150,255,.45)`
        : `top:${g.at}px;left:0;right:0;height:1px;background:rgba(0,150,255,.45)`);
    }
    for (const g of groups) {
      const near = shared
        .filter(o => o !== g && (o.pts.length > g.pts.length || (o.pts.length === g.pts.length && o.at < g.at)))
        .map(o => ({ o, off: g.at - o.at }))
        .filter(({ off }) => Math.abs(off) >= 1 && Math.abs(off) <= NEAR)
        .sort((a, b) => Math.abs(a.off) - Math.abs(b.off));
      for (const { sh } of g.pts) {
        // Not against a line made by a shape it sits in or holds (that is padding), nor by one on
        // its centre line (centred items of different sizes are not meant to share edges).
        const line = near.find(({ o }) => !o.pts.some(({ sh: p }) => (p !== sh && (p.el.contains(sh.el) || sh.el.contains(p.el))) ||
          Math.abs(mid(p, axis) - mid(sh, axis)) < 1));
        if (!line) continue;
        const off = Math.round(line.off * 10) / 10;
        report.nearMisses.push({ edge, off, line: Math.round(line.o.at * 10) / 10, element: name(sh.el) });
        const label = `${off > 0 ? '+' : ''}${off}`;
        draw(axis === 'x'
          ? `left:${sh[edge] - 1}px;top:${sh.top}px;height:${sh.bottom - sh.top}px;width:2px;background:red`
          : `top:${sh[edge] - 1}px;left:${sh.left}px;width:${sh.right - sh.left}px;height:2px;background:red`);
        draw(`left:${sh.left}px;top:${Math.max(sh.top - 12, 0)}px;background:red;color:#fff;padding:1px 2px`, label);
      }
    }
  }

  // Unequal gaps in a run of siblings of one kind: same tag, and a shared class or none.
  const classes = el => (el.getAttribute('class') || '').trim().split(/\s+/).filter(Boolean);
  const sameKind = (a, b) => a.tagName === b.tagName &&
    (classes(a).length === 0 ? classes(b).length === 0 : classes(a).some(c => classes(b).includes(c)));
  const runs = [];
  for (const parent of [root, ...root.querySelectorAll('*')]) {
    let run = [];
    for (const kid of parent.children) {
      const r = kid.getBoundingClientRect();
      if (!onScreen(r) || kid.id === 'layout-overlay' || getComputedStyle(kid).display === 'inline') continue;
      if (run.length && !sameKind(run[run.length - 1].kid, kid)) { runs.push([parent, run]); run = []; }
      run.push({ kid, r });
    }
    runs.push([parent, run]);
  }
  for (const [parent, run] of runs) {
    if (run.length < 3) continue;
    const gaps = { x: [], y: [] };
    for (let i = 1; i < run.length; i++) {
      const a = run[i - 1].r, b = run[i].r;
      if (Math.abs(a.top - b.top) < 1 && b.left >= a.right) gaps.x.push({ a, size: b.left - a.right });
      else if (Math.abs(a.left - b.left) < 1 && b.top >= a.bottom) gaps.y.push({ a, size: b.top - a.bottom });
    }
    for (const axis of ['x', 'y']) {
      const sizes = gaps[axis].map(g => Math.round(g.size * 10) / 10);
      if (!sizes.some(a => sizes.some(b => Math.abs(a - b) >= 1 && Math.abs(a - b) <= NEAR))) continue;
      report.unequalGaps.push({ container: name(parent), axis, gaps: sizes });
      for (const { a, size } of gaps[axis]) {
        draw(axis === 'x'
          ? `left:${a.right}px;top:${a.top}px;width:${size}px;height:${a.height}px;background:rgba(255,140,0,.35)`
          : `top:${a.bottom}px;left:${a.left}px;height:${size}px;width:${a.width}px;background:rgba(255,140,0,.35)`,
        String(Math.round(size * 10) / 10));
      }
    }
  }

  // Rows: text side by side shares a baseline, and an icon beside text centers on the
  // middle of its capitals. A pair is on one row when the two overlap vertically and the
  // nearest element holding both is no taller than a row, so a sidebar and the page
  // beside it are never compared.
  const holder = (a, b) => { let p = a; while (p && !p.contains(b)) p = p.parentElement; return p; };
  const oneRow = (a, b) => a.el !== b.el && a.top < b.bottom && b.top < a.bottom &&
    holder(a.el, b.el).getBoundingClientRect().height <= 4 * Math.max(a.bottom - a.top, b.bottom - b.top);
  const miss = (edge, sh, at, off, other) => {
    off = Math.round(off * 10) / 10;
    report.nearMisses.push({ edge, off, line: Math.round(at * 10) / 10, element: name(sh.el), against: name(other.el) });
    const y = sh.icon ? sh.mid : sh.at;
    draw(`left:${sh.left}px;top:${y - 1}px;width:${sh.right - sh.left}px;height:2px;background:red`);
    draw(`left:${sh.left}px;top:${Math.max(sh.top - 12, 0)}px;background:red;color:#fff;padding:1px 2px`, `${off > 0 ? '+' : ''}${off}`);
  };
  report.rows = { sharedBaselines: 0, iconsBesideText: 0 };
  for (let i = 0; i < inRows.length; i++) {
    for (let j = i + 1; j < inRows.length; j++) {
      const a = inRows[i], b = inRows[j];
      if ((a.icon && b.icon) || !oneRow(a, b)) continue;
      if (!a.icon && !b.icon) {
        const off = b.at - a.at;
        if (Math.abs(off) < 1) {
          report.rows.sharedBaselines++;
          const left = Math.min(a.left, b.left);
          draw(`left:${left}px;top:${a.at}px;width:${Math.max(a.right, b.right) - left}px;height:1px;background:rgba(0,170,90,.7)`);
        } else if (Math.abs(off) <= NEAR) miss('baseline', b, a.at, off, a);
        continue;
      }
      // Beside: no wider a gap than the icon itself.
      const [icon, text] = a.icon ? [a, b] : [b, a];
      const gap = Math.max(text.left - icon.right, icon.left - text.right);
      if (gap < 0 || gap > icon.right - icon.left) continue;
      report.rows.iconsBesideText++;
      const off = icon.mid - text.mid;
      if (Math.abs(off) >= 1 && Math.abs(off) <= NEAR) miss('icon middle', icon, text.mid, off, text);
    }
  }

  document.body.appendChild(overlay);
  return report;
})();
