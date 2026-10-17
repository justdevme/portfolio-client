import { SparkleIcon } from '../components/Icons.jsx';

export default function Home({ go }) {
  return (
    <section className="hero">
      <img
        className="heroimg" src="/img/hero.webp" alt="Nhê đang trải bài Tarot trên chiếc sofa cam"
        fetchPriority="high" decoding="async"
      />
      <div className="hero-shade" />
      <div className="hero-tint" />
      <div className="fade hero-copy">
        <span className="eyebrow">✦ Private Tarot Reading ✦</span>
        <h1 className="serif shimmer hero-title">TAROT WITH foolishnhe</h1>
        <p className="hero-sub">Soi chiếu thực tại · Định hướng tương lai</p>
        <div className="row-center">
          <button className="btn btn-gold" onClick={() => go('about')}>
            Gặp gỡ Nhê <SparkleIcon size={16} />
          </button>
          <button className="btn btn-ghost" onClick={() => go('pricing')}>Xem bảng giá</button>
        </div>
      </div>
    </section>
  );
}
