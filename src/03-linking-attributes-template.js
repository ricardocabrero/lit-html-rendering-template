import {html, render} from 'https://unpkg.com/lit-html?module';

const myTemplate = (text, active) => 
    html`
    <style>
        .btn {
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 10px;
            border: none;
            padding: 3px 8px;
            width: 100px;
            text-align: center;
            box-sizing: border-box;
        }
        .inactive {
            background: red;
            cursor: not-allowed;
        }
        .active {
            background: #0cc1f8;
        }
    </style>
    <button ?disabled="${active}" 
    class="btn ${active ? 'inactive' : 'active'}">${text}</button>
    `;

const reference01 = document.querySelector('.linking-attributes-01');
const reference02 = document.querySelector('.linking-attributes-02');

render(myTemplate('Texto Botón', true), reference01);
render(myTemplate('Button Text', false), reference02);