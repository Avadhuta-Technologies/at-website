# reCAPTCHA Integration Setup Guide

This guide will help you set up reCAPTCHA for your website forms to protect against spam and automated submissions.

## Overview

The reCAPTCHA integration has been added to the following forms:
- Contact Form (`/contact`)
- Reservation Form (`/summary?step=3`)
- Newsletter Subscription (invisible reCAPTCHA)

## Prerequisites

1. A Google account
2. Access to Google reCAPTCHA admin console

## Step 1: Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" to register a new site
3. Choose the reCAPTCHA type:
   - **reCAPTCHA v2** for contact and reservation forms (checkbox)
   - **reCAPTCHA v3** for newsletter (invisible)
4. Add your domain(s):
   - For development: `localhost`, `127.0.0.1`
   - For production: your actual domain(s)
5. Accept the terms and click "Submit"
6. Copy the **Site Key** and **Secret Key**

## Step 2: Configure Environment Variables

Create or update your `.env` file with the following variables:

```env
# reCAPTCHA v2 Keys
PUBLIC_RECAPTCHA_SITE_KEY_V2=your_v2_site_key_here
RECAPTCHA_SECRET_KEY_V2=your_v2_secret_key_here

# reCAPTCHA v3 Keys
PUBLIC_RECAPTCHA_SITE_KEY_V3=your_v3_site_key_here
RECAPTCHA_SECRET_KEY_V3=your_v3_secret_key_here
```

**Important Security Notes:**
- `PUBLIC_*` keys are safe to expose in client-side code
- `RECAPTCHA_SECRET_KEY_*` keys must be kept secret and only used server-side
- Never commit your `.env` file to version control

## Step 3: Test the Integration

### Development Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test each form:
   - Go to `/contact` and submit the contact form
   - Go to `/summary?step=3` and test the reservation form
   - Test the newsletter subscription on any page

3. Check the browser console for reCAPTCHA logs

### Production Deployment

1. Update your environment variables with production keys
2. Deploy your application
3. Test all forms in production environment

## Configuration Options

### Form-Specific Settings

You can customize reCAPTCHA settings for each form in `src/config/recaptcha.ts`:

```typescript
forms: {
  contact: {
    version: 'v2', // or 'v3'
    action: 'contact_form',
    threshold: 0.5, // For v3 (0.0 to 1.0)
  },
  reservation: {
    version: 'v2',
    action: 'reservation_form',
    threshold: 0.5,
  },
  newsletter: {
    version: 'v3',
    action: 'newsletter_signup',
    threshold: 0.3, // Lower threshold for newsletter
  },
}
```

### reCAPTCHA Widget Options

You can customize the reCAPTCHA widget appearance:

```astro
<RecaptchaWidget 
  siteKey={siteKey}
  theme="light" // 'light' or 'dark'
  size="normal" // 'normal', 'compact', or 'invisible'
  callback="onRecaptchaSuccess"
  'expired-callback'="onRecaptchaExpired"
  'error-callback'="onRecaptchaError"
/>
```

## Troubleshooting

### Common Issues

1. **"reCAPTCHA not loaded" error**
   - Check if the reCAPTCHA script is loading
   - Verify your site key is correct
   - Check browser console for errors

2. **"reCAPTCHA verification failed" error**
   - Verify your secret key is correct
   - Check if the domain matches your reCAPTCHA settings
   - Ensure the response token is being sent correctly

3. **Forms not submitting**
   - Check if reCAPTCHA is completed before form submission
   - Verify the callback functions are working
   - Check browser console for JavaScript errors

### Debug Mode

Enable debug logging by adding this to your browser console:

```javascript
// Enable reCAPTCHA debug mode
window.recaptchaDebug = true;
```

### Testing Keys

For development, you can use Google's test keys:
- Site Key: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
- Secret Key: `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe`

These keys will always pass verification but should only be used for testing.

## Security Best Practices

1. **Always verify reCAPTCHA on the server-side**
   - Never trust client-side validation alone
   - Use the secret key to verify with Google's API

2. **Use appropriate thresholds**
   - v3 reCAPTCHA returns a score (0.0 to 1.0)
   - Set appropriate thresholds based on your needs
   - Lower thresholds for less critical forms

3. **Monitor and adjust**
   - Monitor reCAPTCHA analytics in Google Console
   - Adjust thresholds based on user experience
   - Watch for false positives/negatives

4. **Keep keys secure**
   - Never expose secret keys in client-side code
   - Use environment variables for all keys
   - Rotate keys periodically

## API Endpoints

The following API endpoints have been created for reCAPTCHA verification:

- `/api/verify-recaptcha` - Generic reCAPTCHA verification
- `/api/contact` - Contact form with reCAPTCHA
- `/api/newsletter` - Newsletter subscription with reCAPTCHA

## Support

If you encounter issues:

1. Check the browser console for errors
2. Verify your reCAPTCHA keys are correct
3. Test with the provided test keys
4. Check Google reCAPTCHA documentation
5. Review the implementation in the source code

## Files Modified/Created

- `src/components/shared/RecaptchaWidget.astro` - Reusable reCAPTCHA component
- `src/config/recaptcha.ts` - Configuration and helper functions
- `src/pages/api/verify-recaptcha.ts` - Generic verification endpoint
- `src/components/contact/ContactFormSection.astro` - Updated with reCAPTCHA
- `src/components/summary/SummaryStepCoordinator.astro` - Updated with reCAPTCHA for reservation form
- `src/components/Newsletterbox.astro` - Updated with invisible reCAPTCHA
- `src/pages/api/contact.ts` - Updated with reCAPTCHA verification
- `src/pages/api/newsletter.ts` - New newsletter endpoint with reCAPTCHA 