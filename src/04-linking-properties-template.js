import {html, render} from 'https://unpkg.com/lit-html?module';

const myTemplate = (checked) => html`
    <p>
        <label>Attribute</label>
        <input type="checkbox" ?checked=${checked}></input>
    </p>
    <p>
        <label>Propiedad</label>
        <input type="checkbox" .checked=${checked}></input>
    </p>
    <button @click=${handleChecked}>Click me!</button>
`;

const reference = document.querySelector('.linking-properties')

let checked = false;

const handleChecked = () => {
    checked = !checked;
    render(myTemplate(checked), reference);
}

render(myTemplate(checked), reference);
