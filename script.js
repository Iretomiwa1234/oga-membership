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
