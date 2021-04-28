import {html, render, nothing} from 'https://unpkg.com/lit-html?module';

const style = html`<style>img{width: 150px; height: auto; display: block}</style>`;
const nullValue = null;
const src = `https://cdn.iconscout.com/icon/free/png-512/success-2186362-1833044.png`;

const Template = (param) => param ? html`<p>${param}</p>` : nothing;

const TemplateImg = (param) => param ? html`${style}<img src="${param}">${param}</img>` : '';

render(Template('texto template'), document.querySelector('.empty-template-01'));
render(Template(), document.querySelector('.empty-template-02'));
render(TemplateImg(src), document.querySelector('.empty-template-03'));
render(TemplateImg(nullValue), document.querySelector('.empty-template-04'));