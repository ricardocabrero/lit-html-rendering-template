import {render, html} from 'https://unpkg.com/lit-html?module';

const ref1 = document.querySelector('.nested-template-01');
const ref2 = document.querySelector('.nested-template-02');
const ref3 = document.querySelector('.nested-template-03');

const style = html`
<style>.wrapper_nested { border: 1px solid #666; padding: 0 10px; margin-bottom: 10px }</style>`;

const firstTemplate = () => {
    const title = html`<h3>First Template</h3>`;

    const template = html`
    <div class="wrapper_nested">
        ${style}
        ${title}
        <p>texto de la primera template</p>
    </div>
    `

    render(template, ref1);
}

const secondTemplate = () => {

    const title = (param) => html`<h3>Second Template <small>(${param})</small></h3>`;

    const template = html`
    ${style}
    <div class="wrapper_nested">
    ${title('small text in param')}
    <p>Second template text <strong>${title('param')}</strong></p>
    </div>
    `
    render(template, ref2);
}

const thirdTemplate = () => {
    const title = title => html`<h3>${title}</h3>`;
    const content = content => html`<p>${content}</p>`;

    const template = (titleParam, contentParam) => html`
        <div class="wrapper_nested">
            ${title(titleParam)}
            ${content(contentParam)}
        </div>  
    `;

    const titleParam = `Third Template`;
    const contentParam = `third template content`;

    render(template(titleParam, contentParam), ref3);
    
}

firstTemplate();
secondTemplate();
thirdTemplate();