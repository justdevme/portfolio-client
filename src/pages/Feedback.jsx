import { useRef, useState } from 'react';
import { SHOTS, TESTIMONIALS } from '../data.js';
import { Chevron } from '../components/Icons.jsx';

const CAPTION = 'KHÁCH HÀNG PRIVATE TAROT';

export default function Feedback({ go }) {
  const [shot, setShot] = useState(0);
  const touchX = useRef(0);
  const total = SHOTS.length;
  const prev = () => setShot((s) => (s + total - 1) % total);
  const next = () => setShot((s) => (s + 1) % total);

  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
  };

  return (
    <section className="stardust section">
      <div className="wrap fade fb">
        <div className="fb-left">
          <span className="eyebrow">Feedback · 3000+ lời nhắn</span>
          <h2 className="serif sec-title fb-title">Sau mỗi trải bài, <span className="shimmer">khách hàng của mình nói gì?</span></h2>
          <figure className="card sheen fb-featured">
            <span className="serif fb-quote-mark" aria-hidden="true">“</span>
            <blockquote>
              Mình bỏ ra bao nhiêu cũng thấy xứng đáng, vì trong thời gian trải bài không chỉ là được xem tarot và giải bài đơn thuần, mà chị còn nghe mình tâm sự rất nhiều và đưa ra lời khuyên nữa. Chị đáng tin, sâu sắc và lý trí hơn mình nhiều nên luôn giúp mình tìm lại đúng hướng sau mỗi lần mông lung.
            </blockquote>
            <figcaption>{CAPTION}</figcaption>
          </figure>
          <div className="fb-grid">
            {TESTIMONIALS.map((t) => (
              <figure key={t} className="card fb-card">
                <blockquote>“{t}”</blockquote>
                <figcaption>{CAPTION}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="fb-right">
          <span className="eyebrow">Tin nhắn thật từ khách</span>
          <div
            className="sheen shotframe"
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
            onTouchEnd={onTouchEnd}
          >
            {SHOTS.map((g, i) => (
              <img
                key={g.src} className={`shotimg${i === shot ? ' on' : ''}`} src={g.src} alt={g.alt}
                aria-hidden={i !== shot} loading="lazy" decoding="async"
              />
            ))}
          </div>
          <div className="shot-controls">
            <button className="iconbtn" onClick={prev} aria-label="Ảnh trước"><Chevron dir="left" /></button>
            <div className="pips">
              {SHOTS.map((_, i) => (
                <button key={i} className={`pip${i === shot ? ' on' : ''}`} onClick={() => setShot(i)} aria-label={`Xem ảnh ${i + 1}`} />
              ))}
            </div>
            <button className="iconbtn" onClick={next} aria-label="Ảnh tiếp theo"><Chevron dir="right" /></button>
          </div>
          <span className="shot-count">{shot + 1} / {total}</span>
        </div>
      </div>
      <div className="wrap section-nav" style={{ marginTop: 64 }}>
        <button className="btn btn-ghost" onClick={() => go('pricing')}>← Bảng giá</button>
        <button className="btn btn-gold" onClick={() => go('book')}>Book lịch ngay →</button>
      </div>
    </section>
  );
}
