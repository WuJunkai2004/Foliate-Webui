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
    Array.from(document.getElementsByClassName('GtkStack'))
    .forEach(stack => {
        // 寻找子一层目录的所有 GtkStackPage
        const pages = Array.from(stack.children).filter(child => child.classList.contains('GtkStackPage'))
        pages.forEach(page => {
            page.style.display = 'none';
        });
        if(pages.length > 0) {
            pages[0].style.display = 'block';
        }
        if(stack.id){
            context = {
                pages: pages,
                current: 0,
                switchToPage: function(number) {
                    if (number >= 0 && number < this.pages.length) {
                        this.pages[this.current].style.display = 'none';
                        this.current = number;
                        this.pages[this.current].style.display = 'block';
                    } else {
                        console.error(`Page number ${number} is out of bounds.`);
                    }
                }
            }
            if(!document.stack){
                document.stack = {};
            }
            document.stack[stack.id] = context;
        }
    });
});