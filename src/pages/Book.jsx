import { useEffect, useRef, useState } from 'react';
import { PACKAGES, INSTAGRAM_URL, ZALO_URL } from '../data.js';
import { CopyIcon, InstagramIcon, StarBullet } from '../components/Icons.jsx';

const STEPS = [
  ['I', 'Chọn gói phù hợp'],
  ['II', 'Nhắn IG @foolishnhe_'],
  ['III', 'Chuyển khoản để chốt lịch'],
];

const RULES = [
  'Các lịch trải bài sẽ cần đặt trước.',
  'Thời gian phát sinh nếu có: 7k/phút trải bài.',
  'Mình không nhận lịch sau 12h đêm trừ trường hợp khẩn cấp ( cần báo trước ).',
  'Không hỏi 1 câu 2 ý.',
  'Mình sẽ chờ bạn tối đa 20 phút kể từ giờ hẹn. Nếu bạn huỷ lịch mà không báo trước, gói xem sẽ không được hoàn tiền.',
  'Nếu bạn đã đặt lịch và huỷ lịch ( có báo trước ), mình sẽ hoàn lại 50% giá gói.',
  'Nếu quá 20 phút chờ, lịch đã bị huỷ mà bạn vẫn muốn đặt lại, phụ phí sẽ là 50% giá gói.',
  'Mình không xem về sức khoẻ, soi âm, miêu tả người yêu/chồng tương lai, đất cát, chuyện âm dương, nghiệp quả, đồ đạc bị mất, xu hướng giới tính, pháp luật và đạo đức - mình soi chiếu thực tại và định hướng tương lai.',
];

export default function Book({ go, pkg, setPkg }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

  const chosen = PACKAGES.find((p) => p.id === pkg) ?? PACKAGES[2];

  const copy = async () => {
    const text = `Chào Nhê, mình muốn book gói ${chosen.name} (${chosen.price}) vào [ngày / giờ]. Chủ đề mình muốn hỏi là [chủ đề].`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard API can be blocked (insecure origin, permissions): fall back to a hidden textarea.
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch { /* nothing else to try */ }
      document.body.removeChild(ta);
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="stardust section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="wrap fade" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="card sheen book-card">
          <span className="eyebrow">Đặt lịch xem Tarot</span>
          <h2 className="serif shimmer sec-title book-title">Sẵn sàng trải bài?</h2>
          <p className="muted book-lead">
            Mọi lịch đều được hẹn qua Instagram. Chọn gói, nhắn tin cho Nhê kèm thời gian bạn muốn, rồi chuyển khoản trước để chốt lịch.
          </p>
          <div className="chips" role="group" aria-label="Chọn gói">
            {PACKAGES.map((k) => (
              <button key={k.id} className={`chip${k.id === pkg ? ' on' : ''}`} onClick={() => setPkg(k.id)} aria-pressed={k.id === pkg}>
                {k.name} · {k.price}
              </button>
            ))}
          </div>

          <div className="msg-box">
            <div className="msg-head">
              <span className="msg-label">TIN NHẮN GỢI Ý</span>
              <button className={`copybtn${copied ? ' done' : ''}`} onClick={copy} aria-label="Sao chép tin nhắn gợi ý">
                <CopyIcon /><span>{copied ? 'Đã sao chép' : 'Sao chép'}</span>
              </button>
            </div>
            <span className="sr-only" aria-live="polite">{copied ? 'Đã sao chép tin nhắn' : ''}</span>
            <div className="msg-body">
              “Chào Nhê, mình muốn book gói <strong>{chosen.name} ({chosen.price})</strong> vào [ngày / giờ]. Chủ đề mình muốn hỏi là [chủ đề].”
            </div>
          </div>

          <div className="steps">
            {STEPS.map(([n, label]) => (
              <div key={n} className="step"><span className="medal">{n}</span><span>{label}</span></div>
            ))}
          </div>

          <div className="notes">
            <span className="eyebrow">Lưu ý trước khi book</span>
            <div className="notice">
              <strong>Cách book lịch với Nhê:</strong> Mình nhận chuyển khoản trước để chốt lịch. Khi chuyển khoản, bạn ghi giúp mình{' '}
              <strong>Tên IG + Gói xem + Ngày và Giờ xem</strong> để mình lưu thông tin và chốt lịch với bạn.
            </div>
            <ul className="list">
              {RULES.map((r) => (
                <li key={r}><StarBullet /><span>{r}</span></li>
              ))}
            </ul>
          </div>

          <a className="btn btn-gold book-cta" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <InstagramIcon /> Book lịch qua IG @foolishnhe_
          </a>
          <p className="zalo">
            Hoặc liên hệ qua Zalo:&nbsp;
            <a href={ZALO_URL} target="_blank" rel="noopener noreferrer">0859 021 200</a>
          </p>
          <button className="navlink" onClick={() => go('pricing')}>← Xem lại bảng giá</button>
        </div>
      </div>
    </section>
  );
}
