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


function buttonClickLogic(button, callback) {
    if(!button || !callback) {
        console.error('無法找到按鈕！');
        return;
    }
    button.addEventListener('click', () => {
        callback(button.textContent);
    });
}


function buttonLogic(button, object, callback) {
    // click button, change object property, and call callback with the property value
    if(!button) {
        console.error('無法找到按鈕或物件！');
        return;
    }
    let isHidden = false;
    if(object && object.hidden !== undefined) {
        isHidden = object.hidden;
    }
    button.addEventListener('click', () => {
        if (object && object.hidden !== undefined) {
            object.hidden = isHidden;
            isHidden = !isHidden;
        }
        if (callback) {
            callback(isHidden);
        }
    });
}


function buttonMenuLogic(menuButton, menu, callback){
    if(!menuButton || !menu){
        console.error('無法找到選單按鈕或選單本身！');
        return;
    }
    const items = Array.from(menu.querySelectorAll('.menu-item'));

    function positionMenu() {
        const rect = menuButton.getBoundingClientRect();
        menu.style.top = `${rect.bottom + 8}px`; 
        menu.style.left = `${rect.right - menu.offsetWidth}px`;

        if (menu.getBoundingClientRect().left < 0) {
            menu.style.left = '8px';
        }
    }

    function showMenu() {
        menu.hidden = false;
        menuButton.setAttribute('aria-expanded', 'true');
        positionMenu();
    }

    function hideMenu() {
        menu.hidden = true;
        menuButton.setAttribute('aria-expanded', 'false');
    }

    menuButton.addEventListener('click', (event) => {
        // 阻止事件冒泡，避免觸發下面 window 的點擊事件而立即關閉
        event.stopPropagation();

        const isHidden = menu.hidden;
        if (isHidden) {
            showMenu();
        } else {
            hideMenu();
        }
    });

    menu.addEventListener('click', (event) => {
        if (callback && event.target.closest('.menu-item')) {
            const index = items.indexOf(event.target.closest('.menu-item'));
            callback(index);
        }
    });

    window.addEventListener('click', (event) => {
        if (!menu.hidden) {
            hideMenu();
        }
    });
}


function searchBarLogic(searchBar, searchButton, callback) {
    if(!searchBar){
        console.error('無法找到搜尋欄！');
        return;
    }

    searchBar.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const query = searchBar.value.trim();
            if (query) {
                callback(query);
            }
        }
    });

    if(searchButton){
        searchButton.addEventListener('click', () => {
            const query = searchBar.value.trim();
            if (query) {
                callback(query);
            }
        });
    }
}