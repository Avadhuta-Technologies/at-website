import { p as podsCatalog } from '../../../chunks/_pods_DG9CqvIL.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    const pods = podsCatalog.availablePods.map((pod) => ({
      id: pod.id,
      title: pod.name,
      description: pod.tagline,
      basePriceINR: pod.basePriceINR,
      basePriceUSD: pod.basePriceUSD,
      discountPercentage: pod.discountPercentage,
      icon: "🚀",
      // Default icon
      badge: "New",
      badgeColor: "bg-mint-100 text-mint-800",
      category: "pod"
    }));
    return new Response(JSON.stringify(pods), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching pods:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch pods" }), {
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
