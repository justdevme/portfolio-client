// Phones get a lighter backdrop: far fewer animated nodes and no animated blur (see layout.css).
export const LITE =
  typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(max-width: 760px)').matches;
