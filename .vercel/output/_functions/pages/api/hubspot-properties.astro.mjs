export { renderers } from '../../renderers.mjs';

async function getHubSpotContactProperties() {
  {
    console.error("❌ HUBSPOT_ACCESS_TOKEN not configured");
    return null;
  }
}
async function logAvailableProperties() {
  console.log("🔍 Fetching available HubSpot contact properties...");
  const properties = await getHubSpotContactProperties();
  if (properties) {
    console.log("✅ Available HubSpot contact properties:");
    properties.forEach((prop) => {
      console.log(`   - ${prop.name}: ${prop.label} (${prop.type})`);
    });
  } else {
    console.log("❌ Failed to fetch properties");
  }
  return properties;
}

const prerender = false;
const GET = async () => {
  try {
    const properties = await logAvailableProperties();
    if (properties) {
      return new Response(JSON.stringify({
        success: true,
        message: "HubSpot properties fetched successfully",
        properties: properties.map((prop) => ({
          name: prop.name,
          label: prop.label,
          type: prop.type,
          groupName: prop.groupName
        }))
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        error: "Failed to fetch HubSpot properties"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("Error in properties endpoint:", error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
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
