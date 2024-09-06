
const feedbackPopup = document.querySelector('.feedback'); 
const feedbackOverlay = document.querySelector('.feedback__overlay'); 
const feedbackClose = document.querySelector('.feedback__close'); 

const feedbackButtonMobileAndDesktop = document.querySelector('.feedback__icon-chat'); 
const feedbackButtonTablet = document.querySelector('.nav__button--chat'); 

const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');

const openFeedbackPopup = () => {
  feedbackPopup.classList.add('feedback--active'); 
  document.body.style.overflow = 'hidden'; 
};

const closeFeedbackPopup = () => {
  feedbackPopup.classList.remove('feedback--active'); 
  document.body.style.overflow = '';
};

feedbackButtonMobileAndDesktop.addEventListener('click', () => {
  if (!isTablet.matches) { 
    openFeedbackPopup();
  }
});

feedbackButtonTablet.addEventListener('click', () => {
  if (isTablet.matches) { 
    openFeedbackPopup();
  }
});

feedbackClose.addEventListener('click', closeFeedbackPopup);

feedbackOverlay.addEventListener('click', closeFeedbackPopup);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeFeedbackPopup();
  }
});
