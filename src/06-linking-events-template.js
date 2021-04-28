import {html, render} from 'https://unpkg.com/lit-html?module';

const reference = document.querySelector('.linking-events-capture');
const reference1 = document.querySelector('.linking-events-01-capture');
const reference2 = document.querySelector('.linking-events-02-capture');
const reference3 = document.querySelector('.linking-events-03-capture');

const templateInput = textInput => html`
    <input 
    @input=${handleInput}
    type="text" .value=${textInput}>
    <p><strong>text:</strong>${textInput}</p>
`;

const handleInput = {
    handleEvent:({target}) => {
        state.textInput = target.value;
        refresh();
    },
    capture: true,
};

const templateButton = (text, press) => html`
    <style>
        .btn_btn {
            margin-bottom: 10px;
            cursor: pointer;
        }
        .selected {
            background: red;
            color: #000;
            cursor: not-allowed;
        }
    </style>
    <button 
    @click=${handleBtn}
    class="btn_btn ${press ? 'selected' : ''}"
    ?disabled=${press}>
    ${text}
    </button>
`;

const handleBtn = {
    handleEvent: ({target}) => {
        state.selected = target.textContent.trim();
        refresh();
    },
    capture: true,
}

const state = {
    textInput: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    selected: '',
};

function refresh() {
    const { textInput, selected } = state;
    const [ option1, option2, option3 ] = state.options;

    render(templateInput(textInput), reference);
    render(templateButton(option1, option1 === selected), reference1);
    render(templateButton(option2, option2 === selected), reference2);
    render(templateButton(option3, option3 === selected), reference3);
};

refresh();