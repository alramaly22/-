const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const themeButton = document.getElementById('theme-button');
const logoImage = document.getElementById('logo');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== DARK LIGHT THEME ===============*/
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Validate if the user previously chose a theme
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
// إخفاء القائمة عند النقر في أي مكان على الموقع
document.body.addEventListener('click', (event) => {
  // تحقق أولاً من أن الناف مرئي
  if (navMenu.classList.contains('show-menu')) {
    // تحقق مما إذا كان النقر خارج القائمة أو الزر الذي يفتح القائمة
    if (!event.target.closest('.nav__menu') && !event.target.closest('#nav-toggle')) {
      // إذا كان النقر خارج القائمة وخارج الزر، قم بإخفاء القائمة
      navMenu.classList.remove('show-menu');
    }
  }
});
// إخفاء القائمة عند التمرير (سكرول) على الصفحة
window.addEventListener('scroll', () => {
  // تحقق أولاً من أن الناف مرئي
  if (navMenu.classList.contains('show-menu')) {
    // قم بإخفاء القائمة
    navMenu.classList.remove('show-menu');
  }
});
/*=============== SWIPER POPULAR ===============*/

let swiperFavorite = new Swiper('.favorite__swiper', {
  loop: true,
  slidesPerView:"auto",
  centeredSlides:"auto",
  grabCursor:true,
  breakpoints:{
    768:{
      slidesPerView:4,
    }
  }
});
/*=============== CHOOSE FAQ ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== social ===============*/
var conters = document.querySelectorAll('.counter');
conters.forEach(counter =>{
  counter.innerHTML = '0';
  function counterUpdate(){
    var maxValue = parseInt(counter.getAttribute('value'));
    var count = parseInt(counter.innerHTML);
    var increment = maxValue / 700;
    if(count < maxValue){
      counter.innerHTML = Math.ceil(count + increment);
      setTimeout (counterUpdate, 1);
    }
    else{
        counter.innerHTML = maxValue;
        // إضافة شرط if للتحقق من قيمة الرقم
        if(maxValue >= 1000){
          // إضافة حرف k بجوار الرقم
          counter.innerHTML += 'k';
        }
    }
  }
  counterUpdate();
})
