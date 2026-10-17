// Resolves a public asset path against Vite's base, so the site also works when hosted below a sub-path.
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');
