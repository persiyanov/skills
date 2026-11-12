// Lists the styles a page really renders, with how many visible elements use
// each: type, colors (with OKLCH), borders, radii, shadows, spacing and motion.
// Measure a product or a reference app with it instead of reading values off a
// screenshot. It reports what is used, not whether it is right. "families" is the
// first font of each declared stack; "fontsLoaded" shows which web fonts loaded.
//
// Usage: agent-browser eval --stdin < style-inventory.js
(() => {
  const TOP = 15;
  const tally = () => new Map();
  const add = (map, key) => { if (key) map.set(key, (map.get(key) || 0) + 1); };
  const top = (map, n = TOP) => [...map].sort((a, b) => b[1] - a[1]).slice(0, n)
    .map(([value, count]) => ({ value, count }));
  const ascending = (map) => [...map.keys()].sort((a, b) => parseFloat(a) - parseFloat(b));
  const transparent = (c) => c === 'transparent' || /^rgba\(.*,\s*0\)$/.test(c) || /\/\s*0\)$/.test(c);

  const linear = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  const oklch = (color) => {
    if (color.startsWith('oklch(')) return color;
    const m = color.match(/^rgba?\(([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)(?:\s*[,/]\s*([\d.]+))?\)$/);
    if (!m) return null;
    const [r, g, b] = [m[1], m[2], m[3]].map(Number).map(linear);
    const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const k = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    const L = 0.2104542553 * l + 0.793617785 * k - 0.0040720468 * s;
    const A = 1.9779984951 * l - 2.428592205 * k + 0.4505937099 * s;
    const B = 0.0259040371 * l + 0.7827717662 * k - 0.808675766 * s;
    const C = Math.hypot(A, B);
    // A pure gray has no hue; below this chroma the hue is only rounding noise.
    const H = C < 0.002 ? 'none' : (((Math.atan2(B, A) * 180) / Math.PI + 360) % 360).toFixed(1);
    const alpha = m[4] !== undefined && Number(m[4]) < 1 ? ` / ${m[4]}` : '';
    return `oklch(${L.toFixed(3)} ${C.toFixed(3)} ${H}${alpha})`;
  };
  const withOklch = (map) => top(map).map((x) => ({ ...x, oklch: oklch(x.value) }));

  const visible = (el) => {
    if (el.checkVisibility && !el.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };

  const t = {
    type: tally(), sizes: tally(), weights: tally(), families: tally(), text: tally(),
    backgrounds: tally(), borders: tally(), radii: tally(), shadows: tally(),
    gaps: tally(), padding: tally(), transitions: tally(), animations: tally(),
  };
  let counted = 0;
  for (const el of [document.documentElement, document.body, ...document.body.querySelectorAll('*')]) {
    if (el.closest('#layout-overlay') || !visible(el)) continue;
    counted++;
    const cs = getComputedStyle(el);
    if ([...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) {
      const tracking = cs.letterSpacing === 'normal' ? '' : ` ${cs.letterSpacing}`;
      add(t.type, `${cs.fontSize}/${cs.lineHeight} ${cs.fontWeight}${tracking}`);
      add(t.sizes, cs.fontSize);
      add(t.weights, cs.fontWeight);
      add(t.families, cs.fontFamily.split(',')[0].replace(/["']/g, '').trim());
      add(t.text, cs.color);
    }
    if (!transparent(cs.backgroundColor)) add(t.backgrounds, cs.backgroundColor);
    const edges = new Set();
    for (const side of ['Top', 'Right', 'Bottom', 'Left']) {
      if (parseFloat(cs[`border${side}Width`]) > 0 && cs[`border${side}Style`] !== 'none') edges.add(cs[`border${side}Color`]);
    }
    edges.forEach((c) => add(t.borders, c));
    if (cs.borderRadius !== '0px') add(t.radii, cs.borderRadius);
    if (cs.boxShadow !== 'none') add(t.shadows, cs.boxShadow);
    if (/flex|grid/.test(cs.display) && !['normal', '0px', 'normal normal'].includes(cs.gap)) add(t.gaps, cs.gap);
    new Set([cs.paddingTop, cs.paddingRight, cs.paddingBottom, cs.paddingLeft])
      .forEach((p) => { if (p !== '0px') add(t.padding, p); });
    if (cs.transitionDuration.split(',').some((d) => parseFloat(d) > 0)) {
      add(t.transitions, `${cs.transitionProperty} ${cs.transitionDuration} ${cs.transitionTimingFunction}`);
    }
    if (cs.animationName !== 'none') add(t.animations, `${cs.animationName} ${cs.animationDuration} ${cs.animationTimingFunction}`);
  }

  return {
    page: location.href,
    viewport: `${innerWidth}x${innerHeight}`,
    elements: counted,
    fontsLoaded: [...new Set([...document.fonts].filter((f) => f.status === 'loaded').map((f) => `${f.family.replace(/["']/g, '')} ${f.weight}`))],
    type: {
      sizes: ascending(t.sizes),
      weights: ascending(t.weights),
      families: top(t.families),
      styles: top(t.type),
    },
    color: { text: withOklch(t.text), backgrounds: withOklch(t.backgrounds), borders: withOklch(t.borders) },
    surfaces: { radii: top(t.radii), shadows: top(t.shadows, 8) },
    space: { gaps: ascending(t.gaps), padding: ascending(t.padding) },
    motion: { transitions: top(t.transitions, 10), animations: top(t.animations, 10) },
  };
})();
