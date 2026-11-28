// Lists what lines up in one screen, or one part of it, and what nearly does, and draws
// both on the page.
//
//   lines: for the left and right edges of text, icons and boxes, the tops and bottoms of
//       boxes, and the baselines of text, each line that two or more things share, in the
//       order the lines lie: the things on it, and the gaps between them along the line.
//   steps: each pair of neighboring lines, smallest step first, with the two nearest
//       things on them and how far apart those are.
//   icons: each icon that sits off the middle of the capitals beside it.
//
// It measures what is drawn, not the boxes: text by its letters, SVG icons by their shapes,
// and other elements only where they paint a background, border, shadow or image. It
// compares rectangles only, never which element holds which in the code and never how the
// code aligns a text, so two pages that look the same give the same report.
//
//   agent-browser eval "window.overlayScope = [32, 309, 904, 324]"
//       (a part's x, y, width and height, read off a screenshot; without it, the screen)
//   agent-browser eval --stdin < design-review/scripts/layout-overlay.js
//   agent-browser screenshot overlay.png
//   agent-browser eval "document.getElementById('layout-overlay').remove()"
//
// Run it on the whole screen first and read the lines: they show which parts share an edge
// and which miss it. Then run it on one part at a time and read the steps, because on a
// whole screen most steps lie between parts that have nothing to do with each other. It
// covers what is on screen: scroll, then run it again. It measures and puts in order, and
// it doesn't judge: a step can be an indent, an optical correction, or things of different
// sizes centered on one row. It can't see what CSS draws without an element, such as a
// list's bullets, nor the text typed into a field. Blue lines are shared edges, green ones
// shared baselines, and red marks the thing on the less shared line of each step and each
// listed icon.
(() => {
  const SAME = 1 / devicePixelRatio;   // closer than one device pixel is the same place
  const NAMED = 6;                     // how many of the things on one line to name
  document.getElementById('layout-overlay')?.remove();
  const vw = innerWidth, vh = innerHeight;
  const scope = window.overlayScope;
  const [sx, sy, sw, sh] = scope || [0, 0, vw, vh];
  const S = { left: sx, top: sy, right: sx + sw, bottom: sy + sh };

  const round = v => Math.round(v * 10) / 10;
  const drawn = r => r.width > 0 && r.height > 0 && r.right > 0 && r.bottom > 0 && r.left < vw && r.top < vh;
  const holds = (a, b) => a !== b && a.left <= b.left + SAME / 2 && a.right >= b.right - SAME / 2 &&
    a.top <= b.top + SAME / 2 && a.bottom >= b.bottom - SAME / 2;
  const beside = (a, b) => a !== b && !holds(a, b) && !holds(b, a);
  // A shape belongs to the scope when its center is inside it and it doesn't cover it.
  const inScope = r => {
    const x = (r.left + r.right) / 2, y = (r.top + r.bottom) / 2;
    return x >= S.left && x <= S.right && y >= S.top && y <= S.bottom && !holds(r, S);
  };
  // Seen: visible, and the topmost visible thing at its center. An invisible element on
  // top, such as a button's other state stacked in the same place, hides nothing.
  const visible = el => !el.checkVisibility || el.checkVisibility({ opacityProperty: true, visibilityProperty: true });
  const seen = (el, r) => {
    if (!visible(el)) return false;
    const x = Math.min(Math.max(r.left + r.width / 2, 0), vw - 1);
    const y = Math.min(Math.max(r.top + r.height / 2, 0), vh - 1);
    const hit = document.elementsFromPoint(x, y).find(visible);
    return !!hit && (hit === el || el.contains(hit) || hit.contains(el));
  };
  const union = rects => {
    const u = rects.reduce((a, r) => ({
      left: Math.min(a.left, r.left), right: Math.max(a.right, r.right),
      top: Math.min(a.top, r.top), bottom: Math.max(a.bottom, r.bottom),
    }), { left: Infinity, right: -Infinity, top: Infinity, bottom: -Infinity });
    return { ...u, width: u.right - u.left, height: u.bottom - u.top };
  };

  // Each shape lists the edges that count. Text tops and bottoms are font metrics, and an
  // icon's top depends on its shape, so only boxes have y edges; text lines up across a row
  // by its baseline, and an icon by its middle (see "Icons" below). A shape is named by its
  // words, or else by its size and place.
  const shapes = [];
  const add = (kind, label, r, edges, more) => {
    if (!inScope(r)) return;
    const name = label ? `${kind} "${label.slice(0, 24)}"`
      : `${kind} ${Math.round(r.right - r.left)}×${Math.round(r.bottom - r.top)} at ${Math.round(r.left)},${Math.round(r.top)}`;
    shapes.push({ kind, name, edges, line: {}, left: r.left, right: r.right, top: r.top, bottom: r.bottom, ...more });
  };
  const label = el => (el.innerText || el.getAttribute('aria-label') || el.getAttribute('alt') || el.getAttribute('title') ||
    (el.tagName === 'INPUT' ? el.type : '') || '').trim().replace(/\s+/g, ' ');

  const ctx = document.createElement('canvas').getContext('2d');
  const fonts = {};
  const fontOf = s => {
    const f = `${s.fontStyle} ${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
    if (!fonts[f]) {
      ctx.font = f;
      const m = ctx.measureText('H');
      fonts[f] = { asc: m.fontBoundingBoxAscent, desc: m.fontBoundingBoxDescent, cap: m.actualBoundingBoxAscent, space: ctx.measureText(' ').width };
    }
    return fonts[f];
  };

  const pieces = [];
  const range = document.createRange();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n; (n = walker.nextNode());) {
    const t = n.textContent, start = t.search(/\S/);
    const el = n.parentElement;
    if (start < 0 || !el || el.closest('svg, script, style, noscript')) continue;
    // Text clipped to a pixel, such as a label only screen readers get, is not drawn.
    const box = el.getBoundingClientRect();
    if (box.width <= 1 || box.height <= 1) continue;
    range.setStart(n, start);
    range.setEnd(n, t.length - t.match(/\s*$/)[0].length);
    const rects = [...range.getClientRects()].filter(drawn);
    if (!rects.length) continue;
    const u = union(rects);
    if (!seen(el, u)) continue;
    const f = fontOf(getComputedStyle(el));
    // A line's box is the font's ascent plus descent, centered on its line: the baseline
    // sits one ascent below the top of that span.
    pieces.push({ ...u, text: t.trim().replace(/\s+/g, ' '), space: f.space, cap: f.cap, first: rects[0],
      baselines: rects.map(r => r.top + (r.height - f.asc - f.desc) / 2 + f.asc) });
  }
  // A link inside a sentence is a text of its own in the code. Pieces on one line no farther
  // apart than a word space, or one inside the other, are one text.
  const joined = (a, b) => holds(a, b) || holds(b, a) ||
    (Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > Math.min(a.height, b.height) / 2 &&
      Math.max(b.left - a.right, a.left - b.right) <= Math.max(a.space, b.space) + 1);
  const root = pieces.map((_, i) => i);
  const find = i => (root[i] === i ? i : (root[i] = find(root[i])));
  for (let i = 0; i < pieces.length; i++) {
    for (let j = i + 1; j < pieces.length; j++) {
      if (find(i) !== find(j) && joined(pieces[i], pieces[j])) root[find(i)] = find(j);
    }
  }
  const texts = new Map();
  pieces.forEach((p, i) => texts.set(find(i), [...(texts.get(find(i)) || []), p]));
  for (const run of texts.values()) {
    run.sort((a, b) => a.baselines[0] - b.baselines[0] || a.first.left - b.first.left);
    const rows = run.flatMap(p => p.baselines).sort((a, b) => a - b).filter((b, i, all) => !i || b - all[i - 1] >= 1).length;
    add('text', run.map(p => p.text).join(' '), union(run), ['left', 'right', 'baseline'], { baseline: run[0].baselines[0], cap: run[0].cap, rows });
  }

  const graphics = 'path, circle, ellipse, line, polyline, polygon, rect, use, image, text';
  for (const el of document.body.querySelectorAll('*')) {
    if (el.ownerSVGElement && el.tagName !== 'svg') continue;
    if (el instanceof SVGSVGElement) {
      const parts = [...el.querySelectorAll(graphics)].map(p => p.getBoundingClientRect()).filter(drawn);
      const r = parts.length ? union(parts) : el.getBoundingClientRect();
      if (drawn(r) && seen(el, r)) add('icon', label(el), r, ['left', 'right']);
      continue;
    }
    const r = el.getBoundingClientRect();
    if (!drawn(r) || (r.width >= vw - 1 && r.height >= vh - 1)) continue;
    const s = getComputedStyle(el);
    const replaced = /^(IMG|VIDEO|CANVAS|IFRAME|INPUT|SELECT|TEXTAREA|PICTURE)$/.test(el.tagName);
    // A border draws a box on three sides or more; on fewer it is a rule, not a box.
    const shows = c => !/^transparent$|[,/]\s*0\)$/.test(c);
    const border = ['Top', 'Right', 'Bottom', 'Left'].filter(side =>
      parseFloat(s[`border${side}Width`]) > 0 && s[`border${side}Style`] !== 'none' && shows(s[`border${side}Color`])).length >= 3;
    const shadow = (s.boxShadow.match(/[a-z]+\([^)]*\)/g) || []).some(shows);
    const painted = replaced || shows(s.backgroundColor) || border || shadow || s.backgroundImage !== 'none';
    if (painted && seen(el, r)) add('box', label(el), r, ['left', 'right', 'top', 'bottom']);
  }

  // Lines: positions of one edge that coincide.
  const EDGES = ['left', 'right', 'top', 'bottom', 'baseline'];
  const upright = edge => edge === 'left' || edge === 'right';
  const lines = {};
  for (const edge of EDGES) {
    const list = (lines[edge] = []);
    for (const s of shapes.filter(s => s.edges.includes(edge)).sort((a, b) => a[edge] - b[edge])) {
      const g = list[list.length - 1];
      if (g && s[edge] - g.shapes[g.shapes.length - 1][edge] < SAME) g.shapes.push(s);
      else list.push({ shapes: [s] });
    }
    for (const g of list) {
      g.at = g.shapes.reduce((t, s) => t + s[edge], 0) / g.shapes.length;
      // Shared: two of its things lie beside each other, not one inside the other.
      g.shared = g.shapes.some(a => g.shapes.some(b => beside(a, b)));
      for (const s of g.shapes) s.line[edge] = g;
    }
  }
  // A text is flush on the end that sits on a line with a thing beside it, and its other
  // end is ragged. A text centered in the box around it has no flush end. Such ends are
  // where the words stop, not edges, so they make no steps.
  for (const t of shapes.filter(s => s.kind === 'text')) {
    const flush = side => t.line[side].shapes.some(o => beside(o, t));
    const centered = shapes.some(b => b.kind === 'box' && holds(b, t) && Math.abs(b.left + b.right - t.left - t.right) / 2 < SAME);
    t.ragged = centered ? ['left', 'right'] : flush('left') && !flush('right') ? ['right'] : flush('right') && !flush('left') ? ['left'] : [];
  }
  // For each shared line: the things on it, in the order they lie along it, and the gaps
  // between them. Things of one name are given once, with their number.
  const listing = (edge, g) => {
    const up = upright(edge);
    const order = [...g.shapes].sort((a, b) => (up ? a.top - b.top : a.left - b.left));
    const names = new Map();
    for (const s of order) names.set(s.name, (names.get(s.name) || 0) + 1);
    const things = [...names].map(([name, n]) => (n > 1 ? `${name} ×${n}` : name));
    const gaps = [];
    for (let i = 1; i < order.length; i++) {
      if (!beside(order[i - 1], order[i])) continue;
      const gap = round(up ? order[i].top - order[i - 1].bottom : order[i].left - order[i - 1].right), last = gaps[gaps.length - 1];
      if (last && last[0] === gap) last[1]++;
      else gaps.push([gap, 1]);
    }
    return { at: round(g.at), n: g.shapes.length,
      things: things.length > NAMED ? [...things.slice(0, NAMED), `and ${things.length - NAMED} more`] : things,
      gaps: gaps.map(([gap, n]) => (n > 1 ? `${gap} ×${n}` : gap)).join(' ') };
  };

  // Steps: each line against the nearest other line that one of its shapes can be compared
  // with. The lines are taken among all the shapes, and then among the texts, the icons and
  // the boxes alone, so a text that sits on the icons' line is still compared with the line
  // of the other texts. Two shapes are compared when they sit one after the other in one
  // column, for left and right edges, or in one row, for tops, bottoms and baselines, and
  // the step is smaller than both of them: a larger step is the next column or row. A shape
  // is not compared with a line made by a shape it sits in or holds (that is padding), nor
  // by one on its own center line (centered items of different sizes are not meant to share
  // edges). "apart" is the distance between the two nearest such shapes: the farther apart
  // they are, the larger a step must be before anyone sees it.
  const steps = [], listed = new Set();
  for (const kind of [null, 'text', 'icon', 'box']) for (const edge of EDGES) {
    const up = upright(edge);
    const list = lines[edge].map(g => ({ at: g.at, shapes: kind ? g.shapes.filter(s => s.kind === kind) : g.shapes })).filter(g => g.shapes.length);
    const mid = s => (up ? s.left + s.right : s.top + s.bottom) / 2;
    const free = (s, line) => !(s.ragged || []).includes(edge) &&
      !line.shapes.some(p => holds(p, s) || holds(s, p) || Math.abs(mid(p) - mid(s)) < SAME);
    const apart = (a, b) => (up ? Math.max(b.top - a.bottom, a.top - b.bottom) : Math.max(b.left - a.right, a.left - b.right));
    const across = (a, b) => (up ? Math.min(a.right, b.right) - Math.max(a.left, b.left) : Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
    const size = s => (up ? s.right - s.left : s.bottom - s.top);
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const L = list[i], M = list[j];
        const step = M.at - L.at;
        let best = null;
        for (const a of L.shapes.filter(s => free(s, M))) {
          for (const b of M.shapes.filter(s => free(s, L))) {
            const d = apart(a, b);
            if (d > -SAME && across(a, b) > SAME && step < Math.min(size(a), size(b)) && (!best || d < best.apart)) best = { apart: Math.max(d, 0), a, b };
          }
        }
        if (!best) continue;
        const pair = `${edge} ${L.at} ${M.at}`;
        if (!listed.has(pair)) steps.push({ edge, step, L, M, ...best });
        listed.add(pair);
        break;
      }
    }
  }
  steps.sort((a, b) => a.step - b.step);

  // Icons: an icon beside one line of text centers on the middle of its capitals. Beside:
  // on that line, and no wider a gap than the icon itself.
  const icons = [];
  for (const icon of shapes.filter(s => s.kind === 'icon')) {
    let best = null;
    for (const t of shapes) {
      if (t.kind !== 'text' || t.rows > 1 || t.top >= icon.bottom || icon.top >= t.bottom) continue;
      const gap = Math.max(t.left - icon.right, icon.left - t.right);
      if (gap >= 0 && gap <= icon.right - icon.left && (!best || gap < best.gap)) best = { gap, t };
    }
    if (!best) continue;
    const off = (icon.top + icon.bottom) / 2 - (best.t.baseline - best.t.cap / 2);
    if (Math.abs(off) >= SAME) icons.push({ icon, text: best.t, off });
  }
  icons.sort((a, b) => Math.abs(a.off) - Math.abs(b.off));

  const overlay = document.createElement('div');
  overlay.id = 'layout-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2147483647;font:10px/1 ui-monospace,monospace';
  const draw = (css, text) => {
    const d = document.createElement('div');
    d.style.cssText = 'position:absolute;' + css;
    if (text) d.textContent = text;
    overlay.appendChild(d);
  };
  if (scope) draw(`left:${S.left}px;top:${S.top}px;width:${sw}px;height:${sh}px;outline:1px dashed rgba(0,150,255,.6)`);
  for (const edge of ['left', 'right', 'top', 'bottom']) {
    for (const g of lines[edge].filter(g => g.shared)) {
      draw(upright(edge)
        ? `left:${g.at}px;top:${S.top}px;height:${sh}px;width:1px;background:rgba(0,150,255,.45)`
        : `top:${g.at}px;left:${S.left}px;width:${sw}px;height:1px;background:rgba(0,150,255,.45)`);
    }
  }
  for (const g of lines.baseline.filter(g => g.shared)) {
    const left = Math.min(...g.shapes.map(s => s.left)), right = Math.max(...g.shapes.map(s => s.right));
    draw(`left:${left}px;top:${g.at}px;width:${right - left}px;height:1px;background:rgba(0,170,90,.7)`);
  }
  // Mark the shape on the line that fewer shapes share.
  for (const { edge, step, L, M, a, b } of steps) {
    const s = L.shapes.length < M.shapes.length ? a : b;
    draw(upright(edge)
      ? `left:${s[edge] - 1}px;top:${s.top}px;height:${s.bottom - s.top}px;width:2px;background:red`
      : `top:${s[edge] - 1}px;left:${s.left}px;width:${s.right - s.left}px;height:2px;background:red`);
    draw(`left:${s.left}px;top:${Math.max(s.top - 12, 0)}px;background:red;color:#fff;padding:1px 2px`, `${s === b ? '+' : '-'}${round(step)}`);
  }
  for (const { icon, off } of icons) {
    draw(`left:${icon.left}px;top:${(icon.top + icon.bottom) / 2 - 1}px;width:${icon.right - icon.left}px;height:2px;background:red`);
    draw(`left:${icon.left}px;top:${Math.max(icon.top - 12, 0)}px;background:red;color:#fff;padding:1px 2px`, `${off > 0 ? '+' : ''}${round(off)}`);
  }
  document.body.appendChild(overlay);

  return {
    scope: [sx, sy, sw, sh].map(round),
    shapes: shapes.length,
    lines: Object.fromEntries(EDGES.map(edge => [edge, lines[edge].filter(g => g.shared).map(g => listing(edge, g))])),
    steps: steps.map(s => ({
      edge: s.edge, step: round(s.step), apart: Math.round(s.apart),
      lines: `${round(s.L.at)}×${s.L.shapes.length} | ${round(s.M.at)}×${s.M.shapes.length}`, between: [s.a.name, s.b.name],
    })),
    icons: icons.map(i => ({ icon: i.icon.name, beside: i.text.name, off: round(i.off) })),
  };
})();
