console.log("hello world");

// Caching elements
const bodyElement = document.querySelector('body');
const titleElement = document.querySelector('#main-title');
const commentElement = document.querySelectorAll('#comments li');
const paragraphElement = document.querySelector('.cool');

// Modifying elements
titleElement.style.textAlign = 'center';
paragraphElement.style.color = 'yellow';
paragraphElement.textContent = 'This paragraph is cool';
paragraphElement.style.color = 'blue';
paragraphElement.style.fontFamily = "sans-serif";


// Create element
const h2Element = document.createElement('h2');
h2Element.textContent = "Comment Section";

bodyElement.appendChild(h2Element);

// Logs text of li elements with the id=comments
commentElement.forEach((commentElement) => {
    console.log(commentElement.textContent);
})

console.dir(titleElement);
console.dir(paragraphElement);