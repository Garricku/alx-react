import $ from 'jquery';


console.log('Init header');

const header = document.createElement('h1');
header.textContent = 'Holberton Dashboard';
document.body.appendChild(header);

const logo = document.getElementById('logo');
logo.style.backgroundImage = 'url(./assets/holberton-logo.jpg)';
