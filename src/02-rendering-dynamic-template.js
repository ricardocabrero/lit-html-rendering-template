import {html, render} from 'https://unpkg.com/lit-html?module';

const myTemplate = (name, nickname) => html`Hi my name is "${name}", but people named me "${nickname}".`;

const reference = document.querySelector('.dymamic-template');

render(myTemplate('Manuel', 'Manolo'), reference);
