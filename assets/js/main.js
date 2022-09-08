//Select elements
const selectElement = selector =>{
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong, makesure that ${selector} exists or is typed correctly.`);
}