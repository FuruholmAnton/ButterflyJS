'use strict';

function* entries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}

/**
 * Set CSS values on element
 *
 * @dependent Array.forEach, NodeList.forEach, Array.isArray, entries
 * @param {any} el
 * @param {any} styles
 * @returns
 */
function css(el, styles) {
    if (!el) return;
    if (Array.isArray(el) || el instanceof NodeList) {
        el.forEach((n) => {
            css(n, styles);
        });
    } else if (typeof el == 'string') {
        css(document.querySelector(el), styles);
    } else {
        // Cache
        const defaultTranslate = { x: 0, y: 0, z: 0 };
        let transformString = '';
        let translateString = '';
        for (let [key, value] of entries(styles)) {
            switch (key) {
                case 'x' :
                case 'y':
                    defaultTranslate[key] = value;
                    translateString = `translate3d(${ key == 'x' ? value : defaultTranslate.x }, ${ key == 'y' ? value : defaultTranslate.y }, ${ key == 'z' ? value : defaultTranslate.z })`;
                    break;
                case 'rotate':
                    transformString += `rotate(${value}) `;
                    break;
                case 'scale':
                    transformString += `scale(${value}) `;
                    break;
                case 'scaleX':
                    transformString += `scaleX(${value}) `;
                    break;
                case 'scaleY':
                    transformString += `scaleY(${value}) `;
                    break;
                default:
                    el.style[key] = value;
                    break;
            }
        }

        if (transformString || translateString) {
            el.style.transform = translateString + transformString;
        }
    }
}

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
