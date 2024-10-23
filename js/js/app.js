console.log("hello world");

const titleElement = document.querySelector('#main-title');
const paragraphElement = document.querySelector('.cool');

titleElement.style.textAlign = 'center';
paragraphElement.style.color = 'yellow';
paragraphElement.textContent = 'This paragraph is cool';
paragraphElement.style.color = 'blue';
paragraphElement.style.fontFamily = "sans-serif";

console.dir(titleElement);
console.dir(paragraphElement);