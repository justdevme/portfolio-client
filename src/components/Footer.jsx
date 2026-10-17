import { INSTAGRAM_URL } from '../data.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-inner">
        <span>
          <span className="serif footer-brand">MIRACLE TAROT</span>{' '}
          <span className="script footer-script">with @foolishnhe</span>
        </span>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram @foolishnhe_</a>
      </div>
    </footer>
  );
}
