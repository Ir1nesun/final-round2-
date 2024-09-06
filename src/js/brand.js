document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.button_more');
  const hiddenTabs = document.querySelectorAll('.hidden');
  const planTabs = document.querySelectorAll('.plan');

  function updateVisibility() {
      const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)').matches;
      const isDesktop = window.matchMedia('(min-width: 1120px)').matches;

      if (isTablet) {
          hiddenTabs.forEach(tab => tab.classList.remove('show'));
          planTabs.forEach(tab => tab.classList.remove('show'));
      }

      if (isDesktop) {
          hiddenTabs.forEach(tab => tab.classList.remove('show'));
          planTabs.forEach(tab => tab.classList.add('show'));
      }
  }

  menuButton.addEventListener('click', function () {
      const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)').matches;
      const isDesktop = window.matchMedia('(min-width: 1120px)').matches;

      let isExpanded = menuButton.classList.contains('up');

      if (isTablet) {
          planTabs.forEach(tab => tab.classList.toggle('show'));
          hiddenTabs.forEach(tab => tab.classList.toggle('show')); 
      } else if (isDesktop) {
          hiddenTabs.forEach(tab => tab.classList.toggle('show'));
      }

      if (!isExpanded) {
          menuButton.textContent = 'Скрыть';
          menuButton.classList.add('up');
      } else {
          menuButton.textContent = 'Показать всё';
          menuButton.classList.remove('up');
      }
  });

  updateVisibility();
  window.addEventListener('resize', updateVisibility);
});
