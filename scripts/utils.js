class unit extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // <unit href="path/to/html"></unit>
        this.href = this.getAttribute('href');
        fetch(this.href)
        .then(response => response.text())
        .then(html => {
            this.shadowRoot.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading unit:', error);
            this.shadowRoot.innerHTML = `<p>Error loading unit: ${error.message}</p>`;
        });
    }
}