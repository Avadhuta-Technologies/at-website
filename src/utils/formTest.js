// Form Test Utility
export function testFormSubmission() {
  console.log('🧪 Testing form submission...');
  
  // Check if form exists
  const form = document.getElementById('reservation-form');
  if (!form) {
    console.error('🧪 Form not found!');
    return false;
  }
  
  console.log('🧪 Form found:', form);
  
  // Check if submit button exists
  const submitBtn = form.querySelector('button[type="submit"]');
  if (!submitBtn) {
    console.error('🧪 Submit button not found!');
    return false;
  }
  
  console.log('🧪 Submit button found:', submitBtn);
  console.log('🧪 Submit button text:', submitBtn.textContent);
  
  // Check form fields
  const requiredFields = ['name', 'email'];
  const missingFields = [];
  
  requiredFields.forEach(fieldName => {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (!field) {
      missingFields.push(fieldName);
    }
  });
  
  if (missingFields.length > 0) {
    console.error('🧪 Missing required fields:', missingFields);
    return false;
  }
  
  console.log('🧪 All required fields found');
  
  // Test form validation
  console.log('🧪 Testing form validation...');
  const isValid = form.checkValidity();
  console.log('🧪 Form is valid:', isValid);
  
  if (!isValid) {
    console.log('🧪 Form validation errors:');
    form.reportValidity();
  }
  
  // Test click event
  console.log('🧪 Testing submit button click...');
  submitBtn.click();
  
  return true;
}

// Auto-test when page loads
if (typeof window !== 'undefined') {
  window.testFormSubmission = testFormSubmission;
  
  // Auto-test after a delay
  setTimeout(() => {
    if (window.location.pathname === '/summary') {
      console.log('🧪 Auto-testing form submission...');
      testFormSubmission();
    }
  }, 3000);
} 