document.addEventListener('DOMContentLoaded', function () {
  
  const burgerMenu = document.querySelector('.burger');
  const openMenuButton = document.querySelector('.nav__button.menu-button');
  const closeMenuButton = document.querySelector('.burger__icon.burger__icon--close');

  function openBurgerMenu() {
      burgerMenu.classList.add('burger--open');
      document.body.style.overflow = 'hidden'; 
  }

  function closeBurgerMenu() {
      burgerMenu.classList.remove('burger--open');
      document.body.style.overflow = ''; 
  }

  openMenuButton.addEventListener('click', openBurgerMenu);
  closeMenuButton.addEventListener('click', closeBurgerMenu);
});
