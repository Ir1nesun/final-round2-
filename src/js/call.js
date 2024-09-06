
const callPopup = document.querySelector('.call');
const callOverlay = document.querySelector('.call__overlay');
const callClose = document.querySelector('.call__close');
const callButtonMobile = document.querySelector('.feedback__icon-call'); 
const callButtonTablet = document.querySelector('.nav__button--call'); 


const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)'); 

const openFeedbackPopup = () => {
  callPopup.classList.add('call--active'); 
  document.body.style.overflow = 'hidden'; 
};

const closeFeedbackPopup = () => {
  callPopup.classList.remove('call--active'); 
  document.body.style.overflow = ''; 
};

callButtonMobile.addEventListener('click', () => {
  if (!isTablet.matches) { 
    openFeedbackPopup();
  }
});

callButtonTablet.addEventListener('click', () => {
  if (isTablet.matches) { 
    openFeedbackPopup();
  }
});

callClose.addEventListener('click', closeFeedbackPopup);

callOverlay.addEventListener('click', closeFeedbackPopup);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeFeedbackPopup();
  }
});
