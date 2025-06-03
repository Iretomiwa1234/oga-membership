document.addEventListener('DOMContentLoaded', function () {
  const modalElement = document.getElementById('mobileNavModal');
  const modalLinks = modalElement.querySelectorAll('.nav-link');

  modalLinks.forEach(link => {
    link.addEventListener('click', function () {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) modalInstance.hide();

      document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

const featureItems = document.querySelectorAll('.feature-item');

featureItems.forEach(item => {
  item.addEventListener('click', () => {
    // Force synchronous layout before changes
    document.body.classList.contains('active');
    
    // Remove active class from all items
    featureItems.forEach(i => i.classList.remove('active'));
    
    // Add active class to clicked item
    requestAnimationFrame(() => {
      item.classList.add('active');
    });
  });
});