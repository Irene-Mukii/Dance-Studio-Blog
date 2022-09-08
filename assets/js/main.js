//Select elements --reed documentation on query selector
const selectElement = selector =>{
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong, makesure that ${selector} exists or is typed correctly.`);
};

//Nav styles on scroll
const scrollHeader = ()=> {
    const headerElement= selectElement('#header');
    if(this.scrollY>=15){
        headerElement.classList.add('activated');
    }else { 
        headerElement.classList.remove('activated');
    }
};
// window.addEventListener('scroll', scrollHeader); //test for header change upon scroll