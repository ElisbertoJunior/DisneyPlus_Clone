document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');

  const heroSection = document.querySelector('.hero');
  const heightHero = heroSection.clientHeight;

  window.addEventListener('scroll', () => {
    const currentPosition = window.scrollY
    const header = document.querySelector('.header');

    if(currentPosition < heightHero) {
      header.classList.add('header--is-hidden');
    } else {
      header.classList.remove('header--is-hidden');
    }
  })

  buttons.forEach(activeList);
  questions.forEach(showQuestion);

});


const activeList = button => {
  button.addEventListener("click", (btn) => {
    const targetTab = btn.target.dataset.tabButton;
    const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
    hideAllTabs();
    showActiveList(tab);
    removeActiveButton();
    showSelectedButton(btn);
  });
}

const showQuestion = question => {
  question.addEventListener('click', (element) => {
    const classActive = 'faq__questions__item--is-open';
    const elementoPai = element.target.parentNode;

    elementoPai.classList.toggle(classActive);
  })
}

const showActiveList = tab => tab.classList.add("shows__list--is-active");

const showSelectedButton = btn =>
  btn.target.classList.add("shows__tabs__button--is-active");

const removeActiveButton = () => {
  const buttons = document.querySelectorAll("[data-tab-button]");

  buttons.forEach(button => {
    button.classList.remove("shows__tabs__button--is-active");
  });
};

const hideAllTabs = () => {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  tabsContainer.forEach(tab => {
    tab.classList.remove("shows__list--is-active");
  });
};
