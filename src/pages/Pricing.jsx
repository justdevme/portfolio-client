import { PACKAGES, PACKAGE_MODE } from '../data.js';
import { StarBullet } from '../components/Icons.jsx';

export default function Pricing({ go, pkg, setPkg }) {
  // First tap selects a package, tapping the selected one again continues to booking.
  const pick = (id) => (id === pkg ? go('book') : setPkg(id));
  return (
    <section className="stardust section">
      <div className="wrap fade pricing-wrap">
        <div className="pricing-head">
          <span className="eyebrow">Bảng giá</span>
          <h2 className="serif sec-title">Chọn <span className="shimmer">phép màu nhỏ</span> của bạn</h2>
          <p className="muted">Bấm vào một gói để chọn, rồi đặt lịch qua Instagram.</p>
        </div>
        <div className="pkg-grid">
          {PACKAGES.map((k) => {
            const sel = k.id === pkg;
            return (
              <button key={k.id} className={`card pkg sheen${sel ? ' is-sel' : ''}`} onClick={() => pick(k.id)} aria-pressed={sel}>
                <div className="pkg-top">
                  <span className="medal">{k.num}</span>
                  <span className="eyebrow pkg-tag">{k.tag}</span>
                </div>
                <div>
                  <div className="serif pkg-name">{k.name}</div>
                  <div className="pkg-sub">{k.sub}</div>
                </div>
                <div className="serif shimmer pkg-price">{k.price}</div>
                <div className="divider" aria-hidden="true">✦</div>
                <ul className="list">
                  {k.feats.map((f) => (
                    <li key={f}><StarBullet /><span>{f}</span></li>
                  ))}
                </ul>
                <div className="pkg-mode">Hình thức: {PACKAGE_MODE}</div>
                {k.note && <div className="pkg-note">Lưu ý: {k.note}</div>}
                {k.off && (
                  <div className="pkg-off">
                    Xem trực tiếp tại Hải Phòng<br />
                    <strong className="serif shimmer">{k.off}</strong><br />
                    <span>(&nbsp;giá xem tại Hà Nội sẽ báo khi book lịch&nbsp;)</span>
                  </div>
                )}
                <span className="pkg-cta">{sel ? '✦ Đã chọn — bấm lần nữa để book' : 'Chọn gói này →'}</span>
              </button>
            );
          })}
        </div>
        <p className="pricing-foot">Phần lưu ý và cách chốt lịch nằm ở bước Book lịch.</p>
      </div>
      <div className="wrap section-nav">
        <button className="btn btn-ghost" onClick={() => go('about')}>← Về Nhê</button>
        <button className="btn btn-gold" onClick={() => go('feedback')}>Tiếp: Feedback →</button>
      </div>
    </section>
  );
}
