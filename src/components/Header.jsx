import { NAV } from '../data.js';

function Logo() {
  const text = (x) => (
    <text x={x} y="42" fontFamily="'Pinyon Script', cursive" fontSize="40" letterSpacing="1.2" fill="url(#nheGrad)">
      foolishnhe
    </text>
  );
  return (
    <svg viewBox="0 0 200 64" width="190" height="61" role="img" aria-label="foolishnhe" className="logo">
      <defs>
        <linearGradient id="nheGrad" gradientUnits="userSpaceOnUse" x1="14" y1="0" x2="168" y2="0">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".35" stopColor="#FFF1D0" />
          <stop offset=".7" stopColor="#F0CF84" />
          <stop offset="1" stopColor="#D9A441" />
        </linearGradient>
      </defs>
      {/* three offset copies fake a heavier stroke on the script face */}
      {text(14)}
      {text(14.8)}
      {text(15.6)}
    </svg>
  );
}

export default function Header({ view, go }) {
  return (
    <header className={`site-header${view !== 'home' ? ' hdr-sub' : ''}`}>
      <nav className="wrap site-nav" aria-label="Điều hướng chính">
        <button className="logo-btn" onClick={() => go('home')}>
          <Logo />
        </button>
        <div className="site-nav-links">
          {NAV.map((n) => (
            <button key={n.view} className={`navlink${view === n.view ? ' on' : ''}`} onClick={() => go(n.view)}>
              {n.label}
            </button>
          ))}
          <button className="btn btn-gold btn-book" onClick={() => go('book')}>Book lịch</button>
        </div>
      </nav>
    </header>
  );
}
