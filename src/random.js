// Seeded generators so the decorative sky is identical on every render.
export function makeRng(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function buildGlitter(sparkleCount = 130) {
  const rnd = makeRng(20261016);
  const gauss = () => (rnd() + rnd() + rnd() - 1.5) / 1.5;
  // 60% of points hug the bottom-left → top-right diagonal, the rest are scattered.
  const place = () => {
    if (rnd() < 0.6) {
      const t = rnd() * 100;
      const off = gauss() * 16;
      return { x: t + off * 0.7, y: 100 - t + off * 0.7 };
    }
    return { x: rnd() * 100, y: rnd() * 100 };
  };

  const sparkles = [];
  for (let i = 0; i < sparkleCount; i++) {
    const q = place();
    const r = rnd();
    sparkles.push({
      x: q.x.toFixed(2), y: q.y.toFixed(2),
      z: Math.round(r < 0.12 ? 46 + rnd() * 36 : r < 0.45 ? 22 + rnd() * 18 : 10 + rnd() * 12),
      d: (-rnd() * 7).toFixed(2), t: (2.8 + rnd() * 4).toFixed(1),
    });
  }

  const dots = [];
  for (let j = 0; j < sparkleCount * 3; j++) {
    const q = place();
    const r = rnd();
    dots.push({
      x: q.x.toFixed(2), y: q.y.toFixed(2),
      z: (r < 0.6 ? 1.5 + rnd() : r < 0.92 ? 2.5 + rnd() * 1.5 : 4 + rnd() * 2).toFixed(1),
      d: (-rnd() * 6).toFixed(2), t: (1.6 + rnd() * 4).toFixed(1),
    });
  }

  const fine = [];
  const fine2 = [];
  for (let m = 0; m < 380; m++) {
    const q = place();
    const c = rnd();
    const dot = {
      x: q.x.toFixed(2), y: q.y.toFixed(2), z: (1 + rnd() * 1.3).toFixed(1),
      d: (-rnd() * 6).toFixed(2), t: (1.2 + rnd() * 3.5).toFixed(1),
      c: c < 0.55 ? 'fd g' : c < 0.8 ? 'fd w' : 'fd r',
    };
    (m % 2 ? fine : fine2).push(dot);
  }

  const floaters = [];
  for (let f = 0; f < 70; f++) {
    floaters.push({
      x: (rnd() * 100).toFixed(1), z: (2 + rnd() * 4).toFixed(1), s: Math.round((rnd() - 0.5) * 90),
      t: (11 + rnd() * 16).toFixed(1), d: (-rnd() * 26).toFixed(1),
    });
  }
  return { sparkles, dots, fine, fine2, floaters };
}

export function buildSubSky() {
  const rnd = makeRng(777);
  const dust = [];
  for (let a = 0; a < 170; a++) {
    dust.push({
      x: (rnd() * 100).toFixed(2), y: (rnd() * 100).toFixed(2), z: (1.5 + rnd() * 3.5).toFixed(1),
      d: (3 + rnd() * 4).toFixed(1), w: (-rnd() * 5).toFixed(2),
    });
  }
  const stars = [];
  for (let c = 0; c < 35; c++) {
    stars.push({
      src: c % 3 === 0 ? '/img/star-a.svg' : '/img/star-b.svg',
      x: (rnd() * 100).toFixed(2), y: (rnd() * 100).toFixed(2),
      z: Math.round(c % 3 === 0 ? 16 + rnd() * 18 : 10 + rnd() * 16),
      d: (2.5 + rnd() * 3.5).toFixed(1), w: (-rnd() * 4).toFixed(2),
    });
  }
  return { dust, stars };
}
