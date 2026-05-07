class SafeHTML {
    constructor(html) {
        this.html = html;
    }
    toString() {
        return this.html;
    }
}

/**
 * Escapes HTML special characters to prevent XSS.
 * @param {string} str - The string to escape.
 * @returns {string} - The escaped string.
 */
export function escapeHTML(str) {
    if (!str) return '';
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
}

/**
 * A template literal tag to escape HTML in interpolated values.
 * Usage: html`<div>${untrusted}</div>`
 */
export function html(strings, ...values) {
    const result = strings.reduce((acc, str, i) => {
        const val = values[i];
        let escapedVal = '';
        
        if (val instanceof SafeHTML) {
            escapedVal = val.html;
        } else if (Array.isArray(val)) {
            // Join array items, checking if they are SafeHTML or need escaping
            escapedVal = val.map(v => v instanceof SafeHTML ? v.html : escapeHTML(String(v))).join('');
        } else if (val !== undefined && val !== null) {
            escapedVal = escapeHTML(String(val));
        }
        
        return acc + str + escapedVal;
    }, '');
    
    return new SafeHTML(result);
}
