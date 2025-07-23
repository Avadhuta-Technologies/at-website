# HubSpot CRM Integration

This module provides integration with HubSpot CRM to automatically create contacts, companies, and leads when the contact form is submitted.

## Features

- **Contact Creation**: Automatically creates contacts in HubSpot CRM
- **Company Creation**: Creates company records when company information is provided
- **Lead/Deal Creation**: Creates deals/leads for sales tracking
- **Data Validation**: Validates email and phone number formats
- **Error Handling**: Comprehensive error handling and logging
- **Type Safety**: Full TypeScript support with proper interfaces

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# HubSpot CRM Integration
HUBSPOT_ACCESS_TOKEN=your_hubspot_private_app_token_here
HUBSPOT_PORTAL_ID=your_portal_id_here
```

### 2. HubSpot Private App Setup

1. Log in to your HubSpot account
2. Go to Settings → Integrations → Private Apps
3. Click "Create private app"
4. Give your app a name (e.g., "Website Contact Form")
5. Configure the required scopes:
   - **Contacts**: Read & Write
   - **Companies**: Read & Write  
   - **Deals**: Read & Write
6. Save the app and copy the access token
7. Add the token to your `.env` file

### 3. Custom Properties Setup

The contact form collects additional information that needs custom properties in HubSpot:

#### Option A: Automatic Setup (Recommended)
1. Visit: `http://localhost:4321/api/setup-hubspot-properties`
2. This will automatically create the required custom properties

#### Option B: Manual Setup
Create these custom properties in HubSpot:

1. **Project Type** (`project_type`)
   - Type: Single-select dropdown
   - Options: Web Development, Mobile App Development, AI/ML Integration, E-commerce Solution, AR/VR Experience, DevOps & Infrastructure, Other

2. **Budget Range** (`budget_range`)
   - Type: Single-select dropdown
   - Options: Under $10K, $10K - $25K, $25K - $50K, $50K - $100K, $100K+, Not sure

3. **Project Timeline** (`project_timeline`)
   - Type: Single-select dropdown
   - Options: ASAP, 1-2 months, 3-6 months, 6+ months, Not sure

### 3. HubSpot Portal ID (Optional)

Your HubSpot Portal ID can be found in the URL when you're logged into HubSpot:
- URL format: `https://app.hubspot.com/contacts/{PORTAL_ID}/...`
- The number in the URL is your Portal ID

## File Structure

```
src/
├── services/
│   └── HubSpotService.ts          # Main HubSpot service class
├── pages/api/
│   └── contact.ts                 # API endpoint for form submission
├── utils/
│   └── hubspotMapper.ts           # Form data mapping utilities
├── config/
│   └── environment.ts             # Environment configuration
└── components/contact/
    └── ContactFormSection.astro   # Updated contact form component
```

## API Endpoints

### POST /api/contact

Handles contact form submissions and creates records in HubSpot CRM.

**Request Body**: FormData with the following fields:
- `firstName` (optional): Contact's first name
- `lastName` (optional): Contact's last name
- `email` (required): Contact's email address
- `phone` (optional): Contact's phone number
- `company` (optional): Company name
- `jobTitle` (optional): Job title
- `message` (optional): Contact message

**Response**:
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "contactId": "123456",
    "companyId": "789012",
    "dealId": "345678"
  }
}
```

## HubSpot Service Methods

### `processContactForm(formData)`

Main method that processes contact form data and creates all necessary records:

1. **Creates Contact**: New contact record with form data
2. **Creates Company** (if company name provided): Company record with domain extraction
3. **Creates Deal**: Lead/deal record for sales tracking
4. **Associates Records**: Links contact with company and deal

### API Version Usage

The integration uses the correct HubSpot API versions:

- **v3 Endpoints**: Create, update, and get operations
  - `/crm/v3/objects/contacts` - Create/update contacts
  - `/crm/v3/objects/companies` - Create/update companies  
  - `/crm/v3/objects/deals` - Create/update deals

- **v4 Endpoints**: Search, associations, and properties
  - `/crm/v4/objects/contacts/search` - Search contacts
  - `/crm/v4/objects/companies/search` - Search companies
  - `/crm/v4/objects/contacts/{id}/associations/companies/{id}` - Associations
  - `/crm/v4/objects/deals/{id}/associations/contacts/{id}` - Deal associations
  - `/crm/v4/properties/contacts` - Get contact properties

### `createContact(contactData)`

Creates a new contact in HubSpot with the following properties:
- `email`: Contact's email address
- `firstname`: Contact's first name
- `lastname`: Contact's last name
- `phone`: Contact's phone number
- `jobtitle`: Contact's job title
- `lifecyclestage`: Set to 'lead'
- `lead_status`: Set to 'NEW'
- `source`: Set to 'Website Contact Form'

### `createCompany(companyData)`

Creates a new company in HubSpot with:
- `name`: Company name
- `domain`: Extracted from contact's email domain
- `industry`: Can be customized based on your needs

### `createDeal(dealData)`

Creates a new deal/lead in HubSpot with:
- `dealname`: Generated from contact name or email
- `dealstage`: Set to 'appointmentscheduled'
- `pipeline`: Set to 'default'
- Associations with contact and company (if available)

## Data Validation

The integration includes comprehensive data validation:

- **Email Validation**: Ensures valid email format
- **Phone Validation**: Validates phone number format (if provided)
- **Required Fields**: Ensures email is always provided
- **Data Sanitization**: Trims whitespace and cleans input data

## Error Handling

The integration includes robust error handling:

- **API Errors**: Catches and logs HubSpot API errors
- **Validation Errors**: Returns specific validation error messages
- **Network Errors**: Handles network connectivity issues
- **Configuration Errors**: Warns about missing API keys

## Usage Example

```typescript
import { HubSpotService } from './services/HubSpotService';

const hubspotService = new HubSpotService(process.env.HUBSPOT_ACCESS_TOKEN);

const formData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  company: 'Example Corp',
  message: 'Interested in your services'
};

const result = await hubspotService.processContactForm(formData);
console.log('Created:', result);
```

## Troubleshooting

### Common Issues

1. **"CRM integration not configured"**
   - Ensure `HUBSPOT_ACCESS_TOKEN` is set in your `.env` file
   - Restart your development server after adding environment variables

2. **"HubSpot API error: 401"**
   - Check that your Private App token is valid and has the necessary scopes
   - Ensure the Private App has access to contacts, companies, and deals

3. **"HubSpot API error: 403"**
   - Your Private App may not have the required scopes
   - Go to Settings → Integrations → Private Apps and verify the scopes

4. **Form submission fails**
   - Check browser console for JavaScript errors
   - Verify network connectivity
   - Check server logs for detailed error messages

### Debug Mode

Enable debug logging by setting the environment variable:
```env
DEBUG=true
```

This will log detailed information about API requests and responses.

## Security Considerations

- **Token Security**: Never commit Private App tokens to version control
- **Data Validation**: All input is validated and sanitized
- **Error Messages**: Generic error messages are returned to users
- **Rate Limiting**: Consider implementing rate limiting for production use
- **Scope Limitation**: Only grant the minimum required scopes to your Private App

## Production Deployment

1. **Environment Variables**: Ensure all environment variables are set in production
2. **Token Rotation**: Regularly rotate your HubSpot Private App tokens
3. **Monitoring**: Set up monitoring for API call success rates
4. **Backup**: Consider implementing a fallback mechanism for CRM failures

## Support

For issues with this integration:
1. Check the troubleshooting section above
2. Review HubSpot API documentation
3. Check server logs for detailed error messages
4. Verify environment variable configuration 