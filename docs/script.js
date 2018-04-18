
import css from '../css';

const rows = document.getElementsByTagName('tr');
const table = document.getElementById('table');
const tpl = document.getElementById('tpl');
const code = document.getElementById('code');

window.addEventListener('keyup', () => {
    update();
});
update();

document.querySelector('button').addEventListener('click', () => {
    const tr = document.createElement('tr');
    tr.innerHTML = tpl.innerHTML;
    table.appendChild(tr);
});

function update() {
    const obj = {};
    let string = '';
    for (let i = 0; i < rows.length; i++) {
        const element = rows[i];
        const inputs = Array.from(element.querySelectorAll('input'));
        obj[inputs[0].value] = inputs[1].value;
        string += `<li>"${inputs[0].value}": "${inputs[1].value}", </li>`;
    }
    const result = css(document.body, obj);


    code.innerHTML = `
    css(document.body, {
        <ul>
            ${string}
            <br>
        });
        </ul>
    `;
}