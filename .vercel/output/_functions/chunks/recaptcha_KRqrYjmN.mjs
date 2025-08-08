const recaptchaConfig = {
  // Site keys (public keys for client-side)
  siteKeys: {
    v2: "6LecGJsrAAAAAASV4hD536n5vaOdjrpnFqv_5Rp1",
    // Default test key
    v3: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    // Default test key
  },
  // Secret keys (private keys for server-side verification)
  secretKeys: {
    v2: "6LecGJsrAAAAAEHyMR4AieCQVGSCcxKALwWGOMgj",
    // Default test key
    v3: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"
    // Default test key
  },
  // Form-specific settings
  forms: {
    contact: {
      version: "v2",
      action: "contact_form",
      threshold: 0.5
      // For v3
    },
    reservation: {
      version: "v2",
      action: "reservation_form",
      threshold: 0.5
      // For v3
    },
    newsletter: {
      version: "v3",
      action: "newsletter_signup",
      threshold: 0.3
      // Lower threshold for newsletter
    }
  }};
function getSiteKey(formName) {
  const formConfig = recaptchaConfig.forms[formName];
  return recaptchaConfig.siteKeys[formConfig.version];
}
function getSecretKey(formName) {
  const formConfig = recaptchaConfig.forms[formName];
  return recaptchaConfig.secretKeys[formConfig.version];
}

export { getSiteKey as a, getSecretKey as g };
