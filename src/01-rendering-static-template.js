import {html, render} from 'https://unpkg.com/lit-html?module';

const myTemplate = html`<div>Hello World!</div>`;

// Render the template
render(myTemplate, document.querySelector('.static-template'));