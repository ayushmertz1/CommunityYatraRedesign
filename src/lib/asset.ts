/**
 * Prefix a public-folder path with the deploy base URL, so images resolve
 * both at the domain root (cPanel) and under a subpath (GitHub Pages).
 */
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, "");
