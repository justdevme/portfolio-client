import { useCallback, useEffect, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { EdgeCelestial, Glitter, SubBackground, TapBurst } from './components/Backdrop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Pricing from './pages/Pricing.jsx';
import Feedback from './pages/Feedback.jsx';
import Book from './pages/Book.jsx';
import { DEFAULT_PACKAGE } from './data.js';

const VIEWS = ['home', 'about', 'pricing', 'feedback', 'book'];
const readView = () => {
  const v = window.location.hash.replace(/^#\/?/, '');
  return VIEWS.includes(v) ? v : 'home';
};

export default function App() {
  const [view, setView] = useState(readView);
  const [pkg, setPkg] = useState(DEFAULT_PACKAGE);
  const [burst, setBurst] = useState(null);
  const burstTimer = useRef();
  const [skyReady, setSkyReady] = useState(false);

  // Build the ~1000 sparkle nodes after first paint so text and images show up first.
  useEffect(() => {
    const start = () => setSkyReady(true);
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 400);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const onHash = () => setView(readView());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Stop every CSS animation while the tab is in the background (saves battery, esp. on phones).
  useEffect(() => {
    const sync = () => document.documentElement.classList.toggle('is-hidden', document.hidden);
    document.addEventListener('visibilitychange', sync);
    sync();
    return () => document.removeEventListener('visibilitychange', sync);
  }, []);

  useEffect(() => {
    const titles = { home: 'Tarot with foolishnhe', about: 'Về Nhê', pricing: 'Bảng giá', feedback: 'Feedback', book: 'Book lịch' };
    document.title = view === 'home' ? titles.home : `${titles[view]} · Tarot with foolishnhe`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const go = useCallback((next) => {
    window.location.hash = next === 'home' ? '' : next;
    setView(next);
  }, []);

  const onClickCapture = (e) => {
    const t = e.target.closest?.('button, a');
    if (!t) return;
    let { clientX: x, clientY: y } = e;
    if (!x && !y) {
      const r = t.getBoundingClientRect();
      x = r.left + r.width / 2;
      y = r.top + r.height / 2;
    }
    clearTimeout(burstTimer.current);
    setBurst(null);
    requestAnimationFrame(() => {
      setBurst({ x, y });
      burstTimer.current = setTimeout(() => setBurst(null), 650);
    });
  };

  const notHome = view !== 'home';
  const pageProps = { go, pkg, setPkg };

  return (
    <div className="app skybg" onClickCapture={onClickCapture}>
      {burst && <TapBurst x={burst.x} y={burst.y} />}
      {notHome && <SubBackground />}
      {skyReady && <Glitter showFloaters={notHome} />}
      {notHome && <EdgeCelestial hideRightMoon={view === 'about'} />}
      <Header view={view} go={go} />
      <main>
        {view === 'home' && <Home {...pageProps} />}
        {view === 'about' && <About {...pageProps} />}
        {view === 'pricing' && <Pricing {...pageProps} />}
        {view === 'feedback' && <Feedback {...pageProps} />}
        {view === 'book' && <Book {...pageProps} />}
      </main>
      {notHome && <Footer />}
    </div>
  );
}
