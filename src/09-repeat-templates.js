import {render, html} from '../node_modules/lit-html/';
import { repeat } from '../node_modules/lit-html/directives/repeat.js';

const style = html`
<style>.wrapper_repeat { border: 1px solid #666; padding: 0 10px; margin-bottom: 10px }</style>`;

const users = [
    {
        id: 0, 
        name: 'Jane Douglas',
    },
    {   
        id: 1, 
        name: 'Rouse Kalagan',
    },
    {  
        id: 2, 
        name: 'Joe Moon',
    }
];

const userTemplate = (param) =>  html`<li id=${param.id + 1}>${param.name}</li>`;

const repeatTemplate = (users) => {
    return html` 
    <ul>
        ${repeat(
            users.reverse(),
            (user) => user.id,
            (user) => userTemplate(user)
            )}
    </ul>`
}

const mapUserTemplate = users.map(user => userTemplate(user));

function forLoopTemplate(users) {
    let items = [];
    // or this loop: (two way to do this)
    // for(const user in users){
    //     items.push(userTemplate(users[user]))
    // }
    for(const user of users){
        items.push(userTemplate(user))
    }
    return html`<ul>${items}</ul>`;
}

const template = html`
    <div class="wrapper_repeat">
        ${style}
        <p><strong>Map</strong></p>
            <ul>
            ${mapUserTemplate}
            </ul>
        <p><strong>Loop</strong></p>
            ${forLoopTemplate(users)}
        <p><strong>Repeat</strong></p>
            ${repeatTemplate(users)}
    </div>
    `;


render(template, document.querySelector('.repeat-template-01'))

 