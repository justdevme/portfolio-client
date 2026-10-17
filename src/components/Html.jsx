import { memo, useMemo } from 'react';
import { asset } from '../assets.js';

// Renders static, hand-authored decorative markup (large generated SVGs) that
// ships with the design. Never pass user-supplied content through this.
function Html({ html, className, style }) {
  const markup = useMemo(() => ({ __html: html.replaceAll('/img/', asset('img/')) }), [html]);
  return <div className={className} style={style} dangerouslySetInnerHTML={markup} />;
}

export default memo(Html);
