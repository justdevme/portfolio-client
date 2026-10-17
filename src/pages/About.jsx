import { asset } from '../assets.js';
import { useEffect, useRef } from 'react';
import Html from '../components/Html.jsx';
import { StarBullet } from '../components/Icons.jsx';
import moonsceneHtml from '../markup/moonscene.html?raw';

const STATS = [
  ['6', 'năm với Tarot'],
  ['3000+', 'feedback Private Tarot'],
  ['2', 'bằng Tâm lý học'],
];

const CREDENTIALS = [
  ['6 năm nghiên cứu và thực hành về Tarot.'],
  ['Chứng chỉ chuyên sâu về Tâm Lý Học, Học viện MDIS, Singapore.', 'oneline'],
  ['Cử nhân Tâm Lý Học, Đại học Roehampton, UK.'],
  ['Tham vấn viên của các tổ chức tâm lý phi lợi nhuận: WhyPsychology, Blog Tâm Lý Học, CLB Tâm Lý Học, Glowe.'],
  ['Hơn 3000 feedback của khách hàng về dịch vụ Private Tarot.'],
];

const APPROACH = [
  ['I', 'Gói gọn vấn đề', 'Gói gọn vấn đề của bạn là tôn chỉ của mình, và mình sẽ chỉ kết thúc trải bài khi bạn thực sự cảm thấy nhẹ lòng.'],
  ['II', 'Problem solving', 'Cách xem của mình sẽ theo thiên hướng problem solving, không quá tập trung vào prediction, vì mình tin rằng tương lai sẽ thay đổi ngay tại thời điểm bản thân mình nhận thức được việc mình phải thay đổi.'],
  ['III', 'Một tấm gương', 'Mình sẽ như một tấm gương phản chiếu lại câu chuyện của bạn qua những lá bài, đưa cho bạn góc nhìn trung gian để bạn có thể hiểu được cặn kẽ và gốc rễ, nguồn cơn vấn đề của mình, và mình sẽ không khuyên bạn phải làm gì.'],
];

export default function About({ go }) {
  const moonRef = useRef(null);
  // The moon scene is far below the fold: only animate it while it is on screen.
  useEffect(() => {
    const el = moonRef.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => el.classList.toggle('is-off', !e.isIntersecting), { rootMargin: '120px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="stardust about">
      <img className="sticker" src={asset("img/sticker.webp")} alt="" aria-hidden="true" />
      <div className="wrap fade about-top">
        <div className="about-photo-col">
          <div className="about-photo-wrap">
            <div className="about-photo-ring" />
            <div className="sheen about-photo">
              <img src={asset("img/portrait.webp")} alt="Chân dung Nhê" />
            </div>
          </div>
        </div>
        <div className="about-copy">
          <span className="eyebrow">Về reader</span>
          <h2 className="serif sec-title">Xin chào, mình là <span className="shimmer">Nhê</span></h2>
          <p className="about-lead">Mình là một tarot reader và là một người luôn lắng nghe bạn.</p>
          <p className="body-text">
            Cảm ơn bạn đã tìm đến mình và lựa chọn mình giữa rất nhiều tarot reader ngoài kia — mình biết ơn vì mối duyên lành này.
            Tuy tarot không phải công việc chính của mình, nhưng mình chắc chắn khi xem bài với mình, bạn sẽ có một trải nghiệm đặc biệt:
            nỗi buồn của bạn sẽ được thắt bằng một chiếc nơ xinh.
          </p>
          <div className="stats">
            {STATS.map(([n, label]) => (
              <div key={label} className="card stat">
                <div className="serif shimmer stat-num">{n}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
          <ul className="list about-list">
            {CREDENTIALS.map(([text, cls]) => (
              <li key={text}><StarBullet size={14} /><span className={cls}>{text}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap fade how">
        <div className="divider">Cách Nhê xem bài</div>
        <div className="how-grid">
          {APPROACH.map(([n, title, text]) => (
            <div key={n} className="card sheen how-card">
              <span className="medal">{n}</span>
              <h3 className="serif">{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="body-text how-note">
          Với kiến thức tâm lý học qua 3 năm đại học và kinh nghiệm xem tarot cho rất nhiều bạn, mình tin mình có thể đồng hành cùng bạn,
          cho bạn cảm giác được lắng nghe và yêu thương.
        </p>
        <p className="how-thanks">Nhê ở đây cùng một sự biết ơn!</p>
      </div>

      <div ref={moonRef} className="moonscene is-off" role="img" aria-label="Trăng lưỡi liềm soi bóng nước giữa các chòm sao">
        <Html className="contents" html={moonsceneHtml} />
        <p className="quote">Không chỉ là một lần trải bài,<br />mà là khoảnh khắc để bạn<br />kết nối lại với chính mình.</p>
      </div>

      <div className="wrap section-nav">
        <button className="btn btn-ghost" onClick={() => go('home')}>← Trang chủ</button>
        <button className="btn btn-gold" onClick={() => go('pricing')}>Tiếp: Bảng giá →</button>
      </div>
    </section>
  );
}
