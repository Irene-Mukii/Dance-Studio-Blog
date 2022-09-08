//Select elements 
const selectElement = selector =>{
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong, makesure that ${selector} exists or is typed correctly.`);
};

//Nav styles on scroll
const scrollHeader = ()=> {
    const headerElement= selectElement('#header');
    if(this.scrollY>=15){ //why this number?
        headerElement.classList.add('activated');
    }else { 
        headerElement.classList.remove('activated');
    }
};
// window.addEventListener('scroll', scrollHeader); //test for header change upon scroll

//open menue and search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle("activated");
    menuToggleIcon.classList.toggle("activated");
};
menuToggleIcon.addEventListener('click', toggleMenu);

//switch theme/add to local storage
const bodyElement = selectElement('body');
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme){
    bodyElement.classList.add('light-theme')
}

const toggleTheme = () => {
    themeToggleBtn.classList.toggle('activated');
    bodyElement.classList.toggle('light-theme');
    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive')
    }else{
        localStorage.removeItem('currentTheme');
    }
}
themeToggleBtn.addEventListener('click',toggleTheme);

