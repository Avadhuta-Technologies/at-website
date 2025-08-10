export { renderers } from '../../renderers.mjs';

const requiredCustomProperties = [
  {
    name: "project_type",
    label: "Project Type",
    type: "enumeration",
    groupName: "contactinformation",
    description: "Type of project the contact is interested in",
    options: [
      "Web Development",
      "Mobile App Development",
      "AI/ML Integration",
      "E-commerce Solution",
      "AR/VR Experience",
      "DevOps & Infrastructure",
      "Other"
    ]
  },
  {
    name: "budget_range",
    label: "Budget Range",
    type: "enumeration",
    groupName: "contactinformation",
    description: "Budget range for the project",
    options: [
      "Under $10K",
      "$10K - $25K",
      "$25K - $50K",
      "$50K - $100K",
      "$100K+",
      "Not sure"
    ]
  },
  {
    name: "project_timeline",
    label: "Project Timeline",
    type: "enumeration",
    groupName: "contactinformation",
    description: "Timeline for project completion",
    options: [
      "ASAP",
      "1-2 months",
      "3-6 months",
      "6+ months",
      "Not sure"
    ]
  },
  {
    name: "project_details",
    label: "Project Details",
    type: "string",
    groupName: "contactinformation",
    description: "Detailed description of the project requirements and goals"
  },
  {
    name: "selected_pod",
    label: "Selected Pod",
    type: "string",
    groupName: "contactinformation",
    description: "Name of the pod that the user wants to reserve"
  },
  {
    name: "selected_packs",
    label: "Selected Packs",
    type: "string",
    groupName: "contactinformation",
    description: "Comma-separated list of pack names that the user wants to buy"
  },
  {
    name: "reservation_period",
    label: "Reservation Period",
    type: "string",
    groupName: "contactinformation",
    description: "Estimated project duration selected by the user"
  }
];
async function createCustomProperty(property) {
  {
    console.error("❌ HUBSPOT_ACCESS_TOKEN not configured");
    return false;
  }
}
async function setupCustomProperties() {
  console.log("🔧 Setting up custom HubSpot properties...");
  for (const property of requiredCustomProperties) {
    await createCustomProperty();
  }
  console.log("✅ Custom properties setup complete!");
}
async function checkCustomProperties() {
  {
    console.error("❌ HUBSPOT_ACCESS_TOKEN not configured");
    return;
  }
}

const prerender = false;
const GET = async () => {
  try {
    await checkCustomProperties();
    return new Response(JSON.stringify({
      success: true,
      message: "Custom properties check completed. Check server logs for details."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error checking custom properties:", error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async () => {
  try {
    await setupCustomProperties();
    return new Response(JSON.stringify({
      success: true,
      message: "Custom properties setup completed. Check server logs for details."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error setting up custom properties:", error);
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
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
