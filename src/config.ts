// SITE_OWNER is injected by Webpack's DefinePlugin at build time
declare const SITE_OWNER: string;
const SITE_OWNER_CONST: string = SITE_OWNER;
export { SITE_OWNER_CONST as SITE_OWNER };
