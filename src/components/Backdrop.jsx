import { memo, useMemo } from 'react';
import Html from './Html.jsx';
import { buildGlitter, buildSubSky } from '../random.js';
import { LITE } from '../perf.js';
import cloudsHtml from '../markup/subbg-clouds.html?raw';
import frameHtml from '../markup/subframe.html?raw';
import edgecelHtml from '../markup/edgecel.html?raw';
import edgecelNoRightHtml from '../markup/edgecel-no-right.html?raw';

const SPARKLE_COUNT = LITE ? 36 : 130;

const px = (v) => `${v}px`;

/** Celestial background used on every sub page (not the home hero). */
export const SubBackground = memo(function SubBackground() {
  const { dust, stars } = useMemo(() => buildSubSky(LITE), []);
  return (
    <div className="subbg" aria-hidden="true">
      <div className="subbg-base" />
      <div className="subbg-neb" />
      <div className="subbg-stars" />
      <div className="edgeart l" />
      <div className="edgeart r" />
      <Html className="contents" html={cloudsHtml} />
      <div className="substars">
        {stars.map((t, i) => (
          <img
            key={i} className="tstar" src={t.src} alt="" loading="lazy"
            style={{ left: `${t.x}%`, top: `${t.y}%`, width: px(t.z), animationDuration: `${t.d}s`, animationDelay: `${t.w}s` }}
          />
        ))}
      </div>
      {dust.map((g, i) => (
        <span
          key={i} className="gdust"
          style={{ left: `${g.x}%`, top: `${g.y}%`, width: px(g.z), height: px(g.z), animationDuration: `${g.d}s`, animationDelay: `${g.w}s` }}
        />
      ))}
      <Html className="contents" html={frameHtml} />
    </div>
  );
});

/** Fixed full-screen glitter: nebulae, rotating galaxies of dots, sparkles, shooting stars. */
export const Glitter = memo(function Glitter({ showFloaters }) {
  const g = useMemo(() => buildGlitter(SPARKLE_COUNT, LITE), []);
  const dot = (cls) => (u, i) => (
    <span
      key={i} className={cls || u.c}
      style={{ left: `${u.x}%`, top: `${u.y}%`, width: px(u.z), height: px(u.z), animationDelay: `${u.d}s`, animationDuration: `${u.t}s` }}
    />
  );
  return (
    <div className="glitter" aria-hidden="true">
      <div className="nebula" style={{ left: '-10%', top: '10%', width: 520, height: 520, background: '#B8233F' }} />
      <div className="nebula" style={{ right: '-8%', bottom: '0%', width: 600, height: 600, background: '#8C5A1E', animationDelay: '-6s' }} />
      {showFloaters &&
        g.floaters.map((f, i) => (
          <span
            key={i} className="fl"
            style={{ left: `${f.x}%`, width: px(f.z), height: px(f.z), '--sx': px(f.s), animationDuration: `${f.t}s`, animationDelay: `${f.d}s` }}
          />
        ))}
      <div className="galaxy fast">
        <span className="arms" />
        {g.fine2.map(dot())}
      </div>
      <div className="galaxy slow">
        {g.fine.map(dot())}
        {g.dots.map(dot('dot'))}
      </div>
      <div className="galaxy">
        {g.sparkles.map((s, i) => (
          <span
            key={i} className="spk"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: px(s.z), height: px(s.z), animationDelay: `${s.d}s`, animationDuration: `${s.t}s` }}
          >
            <i />
          </span>
        ))}
      </div>
      <span className="shoot" style={{ left: '85%', top: '8%' }} />
      <span className="shoot" style={{ left: '60%', top: '2%', animationDelay: '3.5s' }} />
      <span className="shoot" style={{ left: '95%', top: '30%', animationDelay: '6s' }} />
      <span className="shoot" style={{ left: '40%', top: '-2%', animationDelay: '8.2s' }} />
      <span className="shoot" style={{ left: '100%', top: '35%', animationDelay: '6.5s' }} />
      <div className="beam" />
    </div>
  );
});

/** Crescent moons + threads + stars pinned to both screen edges. The right moon is hidden on "Về Nhê". */
export const EdgeCelestial = memo(function EdgeCelestial({ hideRightMoon }) {
  return (
    <Html
      className="edgecel"
      html={hideRightMoon ? edgecelNoRightHtml : edgecelHtml}
    />
  );
});

const PETALS = [
  [54.4, 0, 13, 0], [57.9, 45.3, 9, 0.015], [46.4, 80.3, 17, 0.03], [-7.5, 53.9, 13, 0.045],
  [-36.8, 63.7, 9, 0], [-86.1, 34.7, 17, 0.015], [-54.4, 0, 13, 0.03], [-57.9, -45.3, 9, 0.045],
  [-46.4, -80.3, 17, 0], [7.5, -53.9, 13, 0.015], [36.8, -63.7, 9, 0.03], [86.1, -34.7, 17, 0.045],
];
const DROPS = [
  [33.4, 10.9], [39.5, 54.4], [0, 35.2], [-39.5, 54.4], [-33.4, 10.9],
  [-63.8, -20.8], [-20.6, -28.5], [0, -67.2], [20.6, -28.5], [63.8, -20.8],
];

/** Sparkle burst where a button or link is clicked. */
export function TapBurst({ x, y }) {
  return (
    <div className="tapfx" aria-hidden="true" style={{ left: x, top: y }}>
      <span className="tglow" />
      <span className="tring" />
      {PETALS.map(([tx, ty, sz, delay], i) => (
        <span key={`p${i}`} className="tp" style={{ '--tx': px(tx), '--ty': px(ty), '--sz': px(sz), animationDelay: `${delay}s` }} />
      ))}
      {DROPS.map(([tx, ty], i) => (
        <span key={`d${i}`} className="td" style={{ '--tx': px(tx), '--ty': px(ty) }} />
      ))}
    </div>
  );
}
