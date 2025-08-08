import { p as packsCatalog } from '../../../chunks/_packs_CGsAkCV0.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    const packs = packsCatalog.availablePacks;
    return new Response(JSON.stringify(packs), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching packs:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch packs" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
