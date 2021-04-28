import {render, html} from 'https://unpkg.com/lit-html?module';

const Template = (param) => param.name ? html`User name is:&nbsp;${param.name}` : html`<p>...Loading</p>`

const user = {};

function renderTemplate(param) {
    render(Template(param), document.querySelector('.conditional-template-01'))
}

setTimeout(() => {
    return new Promise((resolve, reject) => {
        resolve(user.name = 'Jhon');
        renderTemplate(user);
        reject(new Error('no se ha definido el usuario'))
    })
}, 3000);

renderTemplate(user);

