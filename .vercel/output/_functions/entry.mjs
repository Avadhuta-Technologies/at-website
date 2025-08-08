import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_gEWnMD2k.mjs';
import { manifest } from './manifest_Dgx9zK_V.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/add-ons.astro.mjs');
const _page3 = () => import('./pages/api/catalog/packs.json.astro.mjs');
const _page4 = () => import('./pages/api/catalog/pods.json.astro.mjs');
const _page5 = () => import('./pages/api/contact.astro.mjs');
const _page6 = () => import('./pages/api/hubspot-properties.astro.mjs');
const _page7 = () => import('./pages/api/newsletter.astro.mjs');
const _page8 = () => import('./pages/api/setup-hubspot-properties.astro.mjs');
const _page9 = () => import('./pages/api/test-contact.astro.mjs');
const _page10 = () => import('./pages/api/verify-recaptcha.astro.mjs');
const _page11 = () => import('./pages/case-studies/_slug_.astro.mjs');
const _page12 = () => import('./pages/case-studies.astro.mjs');
const _page13 = () => import('./pages/contact.astro.mjs');
const _page14 = () => import('./pages/enhance-pod.astro.mjs');
const _page15 = () => import('./pages/explore-packs.astro.mjs');
const _page16 = () => import('./pages/explore-pods.astro.mjs');
const _page17 = () => import('./pages/glassmorphism-demo.astro.mjs');
const _page18 = () => import('./pages/location-test.astro.mjs');
const _page19 = () => import('./pages/order-confirmation.astro.mjs');
const _page20 = () => import('./pages/our-work.astro.mjs');
const _page21 = () => import('./pages/packs/_slug_.astro.mjs');
const _page22 = () => import('./pages/pods/_slug_.astro.mjs');
const _page23 = () => import('./pages/portfolio.astro.mjs');
const _page24 = () => import('./pages/recaptcha-test.astro.mjs');
const _page25 = () => import('./pages/summary.astro.mjs');
const _page26 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/add-ons.astro", _page2],
    ["src/pages/api/catalog/packs.json.ts", _page3],
    ["src/pages/api/catalog/pods.json.ts", _page4],
    ["src/pages/api/contact.ts", _page5],
    ["src/pages/api/hubspot-properties.ts", _page6],
    ["src/pages/api/newsletter.ts", _page7],
    ["src/pages/api/setup-hubspot-properties.ts", _page8],
    ["src/pages/api/test-contact.ts", _page9],
    ["src/pages/api/verify-recaptcha.ts", _page10],
    ["src/pages/case-studies/[slug].astro", _page11],
    ["src/pages/case-studies.astro", _page12],
    ["src/pages/contact.astro", _page13],
    ["src/pages/enhance-pod.astro", _page14],
    ["src/pages/explore-packs.astro", _page15],
    ["src/pages/explore-pods.astro", _page16],
    ["src/pages/glassmorphism-demo.astro", _page17],
    ["src/pages/location-test.astro", _page18],
    ["src/pages/order-confirmation.astro", _page19],
    ["src/pages/our-work.astro", _page20],
    ["src/pages/packs/[slug].astro", _page21],
    ["src/pages/pods/[slug].astro", _page22],
    ["src/pages/portfolio.astro", _page23],
    ["src/pages/recaptcha-test.astro", _page24],
    ["src/pages/summary.astro", _page25],
    ["src/pages/index.astro", _page26]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "edf2f13a-5340-4e08-af61-c2e4faecdac2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
