document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.technique__button .button_more');
    const hiddenTabs = document.querySelectorAll('.technique .hidden');
    const planTabs = document.querySelectorAll('.technique .plan');

    function updateVisibility() {
        const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)').matches;
        const isDesktop = window.matchMedia('(min-width: 1120px)').matches;

        if (isTablet) {
            hiddenTabs.forEach(tab => tab.style.display = 'none');
            planTabs.forEach(tab => tab.style.display = 'none');
        }

        if (isDesktop) {
            hiddenTabs.forEach(tab => tab.style.display = 'none');
            planTabs.forEach(tab => tab.style.display = 'flex');
        }
    }

    menuButton.addEventListener('click', function () {
        const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)').matches;
        const isDesktop = window.matchMedia('(min-width: 1120px)').matches;

        let isExpanded = menuButton.classList.contains('up');

        if (!isExpanded) {
            menuButton.textContent = 'Скрыть';
            menuButton.classList.add('up');

            if (isTablet) {
                planTabs.forEach(tab => tab.style.display = 'flex');
                hiddenTabs.forEach(tab => tab.style.display = 'flex');
            } else if (isDesktop) {
                hiddenTabs.forEach(tab => tab.style.display = 'flex');
            }
        } else {
            menuButton.textContent = 'Показать всё';
            menuButton.classList.remove('up');

            if (isTablet) {
                planTabs.forEach(tab => tab.style.display = 'none');
                hiddenTabs.forEach(tab => tab.style.display = 'none');
            } else if (isDesktop) {
                hiddenTabs.forEach(tab => tab.style.display = 'none');
            }
        }
    });

    updateVisibility();
    window.addEventListener('resize', updateVisibility);
});
