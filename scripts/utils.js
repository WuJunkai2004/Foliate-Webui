import * as Core from '/scripts/core.js';

class unit extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.iframe = document.createElement('iframe');
        this.iframe.style.width = '100%';
        this.iframe.style.height = '100%';
        this.iframe.style.border = 'none';
        const url = this.getAttribute('url');
        if (url) {
            this.iframe.src = url;
        }
        this.shadowRoot.appendChild(this.iframe);
    }
}
customElements.define('unit-from', unit);


document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded, initializing core components...');
    Core.stackInit('GtkStack', 'GtkStackPage');
    Core.stackInit('AdwStack', 'GtkStackPage');
});