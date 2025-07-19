// Accordion functionality for FAQ section
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('svg');
  const allContents = document.querySelectorAll('.accordion-content');
  const allButtons = document.querySelectorAll('button[onclick^="toggleAccordion"]');

  // Check if content is currently visible (either no hidden class or first item)
  const isCurrentlyOpen = !content.classList.contains('hidden');

  // If the clicked content is already open, close it
  if (isCurrentlyOpen) {
    content.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
    icon.classList.remove('text-blue-500');
    return;
  }

  // Close all other contents and reset their icons
  allContents.forEach((item, idx) => {
    if (item !== content) {
      item.classList.add('hidden');
      const otherIcon = allButtons[idx].querySelector('svg');
      if (otherIcon) {
        otherIcon.style.transform = 'rotate(0deg)';
        otherIcon.classList.remove('text-blue-500');
      }
    }
  });

  // Open the clicked content and rotate its icon
  content.classList.remove('hidden');
  icon.style.transform = 'rotate(90deg)';
  icon.classList.add('text-blue-500');
}

// Make function globally available
window.toggleAccordion = toggleAccordion; 