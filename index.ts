// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const Page: HTMLElement = document.createElement("div");


Page.innerHTML = `
  <h1>Hello StackPOS with VueJS</h1>
  <p>Application for Point of Sale Stores created by VueJS & Laravel</p>
`;



appDiv.appendChild(Page);