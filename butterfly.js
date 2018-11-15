/**
 * Set CSS values on element
 *
 * @dependent Array.forEach, NodeList.forEach, Array.isArray, entries
 * @param {any} el
 * @param {any} styles
 * @returns
 */
export default function css(el, styles) {
    if (!el) return;
    if (Array.isArray(el) || el instanceof NodeList) {
        el.forEach((n) => {
            css(n, styles);
        });
    } else if (typeof el == 'string') {
        css(document.querySelectorAll(el), styles);
    } else {
        // Cache
        const defaultTranslate = { x: 0, y: 0, z: 0 };
        let transformString = '';
        let translateString = '';

        for (const key in styles) {
            if (styles.hasOwnProperty(key)) {
                const value = styles[key];
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
                    case 'clearProps':
                        value.split(',').forEach((prop) => {
                            el.style.removeProperty(prop);
                        });
                        if (el.getAttribute('style') == '') {
                            el.removeAttribute('style');
                        }
                        break;
                    default:
                        // The most common way
                        el.style[key] = value;
                        break;
                }
            }
        }

        if (transformString || translateString) {
            el.style.transform = translateString + transformString;
        }
    }
}