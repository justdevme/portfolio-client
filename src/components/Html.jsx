import { asset } from '../assets.js';

// Renders static, hand-authored decorative markup (large generated SVGs) that
// ships with the design. Never pass user-supplied content through this.
export default function Html({ html, className, style }) {
  return <div className={className} style={style} dangerouslySetInnerHTML={{ __html: html.replaceAll('/img/', asset('img/')) }} />;
}
