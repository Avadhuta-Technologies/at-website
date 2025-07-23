import { HubSpotService, type ContactFormData } from '../services/HubSpotService';
import { config } from '../config/environment';

export async function testHubSpotIntegration() {
  if (!config.hubspot.accessToken) {
    console.error('❌ HUBSPOT_ACCESS_TOKEN not configured');
    return false;
  }

  const hubspotService = new HubSpotService(config.hubspot.accessToken);

  try {
    console.log('🧪 Testing HubSpot Integration...');

    // Test data
    const testContactData: ContactFormData = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '+1234567890',
      company: 'Test Company',
      jobTitle: 'Test Position',
      message: 'This is a test message from the integration test.',
      source: 'Integration Test',
    };

    console.log('📝 Creating test contact...');
    const result = await hubspotService.processContactForm(testContactData);

    console.log('✅ Integration test successful!');
    console.log('📊 Created records:');
    console.log(`   Contact ID: ${result.contact.id}`);
    if (result.company) {
      console.log(`   Company ID: ${result.company.id}`);
    }
    if (result.deal) {
      console.log(`   Deal ID: ${result.deal.id}`);
    }

    return true;
  } catch (error) {
    console.error('❌ Integration test failed:', error);
    return false;
  }
}

export async function testContactLookup() {
  if (!config.hubspot.accessToken) {
    console.error('❌ HUBSPOT_ACCESS_TOKEN not configured');
    return false;
  }

  const hubspotService = new HubSpotService(config.hubspot.accessToken);

  try {
    console.log('🔍 Testing contact lookup...');
    
    const testEmail = 'test@example.com';
    const contact = await hubspotService.getContactByEmail(testEmail);
    
    if (contact) {
      console.log('✅ Contact found:', contact.id);
      return true;
    } else {
      console.log('ℹ️  Contact not found (this is normal for test data)');
      return true;
    }
  } catch (error) {
    console.error('❌ Contact lookup test failed:', error);
    return false;
  }
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🚀 Starting HubSpot Integration Tests...\n');
  
  Promise.all([
    testHubSpotIntegration(),
    testContactLookup()
  ]).then((results) => {
    const allPassed = results.every(result => result);
    console.log(`\n${allPassed ? '✅' : '❌'} All tests ${allPassed ? 'passed' : 'failed'}!`);
    process.exit(allPassed ? 0 : 1);
  });
} 