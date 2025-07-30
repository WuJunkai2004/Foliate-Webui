function stackInit(parentClass, childClass) {
    Array.from(document.getElementsByClassName(parentClass))
    .forEach(stack => {
        const pages = Array.from(stack.children).filter(child => child.classList.contains(childClass));
        pages.forEach(page => {
            page.style.display = 'none';
        });
        if(pages.length > 0) {
            pages[0].style.display = 'block';
        }
        if(stack.id){
            console.log(`Creating context for stack with ID: ${stack.id}`);
            const context = {
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
        } else {
            console.warn('Stack element does not have an ID, cannot create context.');
        }
    })
}


function button(buttonElement) {
    if(!buttonElement || !(buttonElement instanceof HTMLElement)) {
        console.error('無法找到按鈕元素！');
        return;
    }
    return {
        bindClick: function(callback) {
            buttonElement.addEventListener('click', () => {
                callback(buttonElement.textContent);
            });
        },
        bindObject: function(object, callback) {
            let isHidden = false;
            if(object && object.hidden !== undefined) {
                isHidden = object.hidden;
            }
            buttonElement.addEventListener('click', () => {
                if (object && object.hidden !== undefined) {
                    object.hidden = isHidden;
                    isHidden = !isHidden;
                }
                if (callback) {
                    callback(isHidden);
                }
            });
        },
        bindMenu: function(menu, callback, AutoHide = true) {
            if(!menu || !(menu instanceof HTMLElement)) {
                console.error('無法找到選單元素！');
                return;
            }
            const items = Array.from(menu.querySelectorAll('.menu-item'));

            function positionMenu() {
                const rect = buttonElement.getBoundingClientRect();
                menu.style.top = `${rect.bottom + 8}px`; 
                menu.style.left = `${rect.right - menu.offsetWidth}px`;

                if (menu.getBoundingClientRect().left < 0) {
                    menu.style.left = '8px';
                }
            }

            function showMenu() {
                menu.hidden = false;
                buttonElement.setAttribute('aria-expanded', 'true');
                positionMenu();
            }

            function hideMenu() {
                menu.hidden = true;
                buttonElement.setAttribute('aria-expanded', 'false');
            }

            buttonElement.addEventListener('click', () => {
                if (menu.hidden) {
                    showMenu();
                } else {
                    hideMenu();
                }
            });

            items.forEach(item => {
                item.addEventListener('click', () => {
                    if (callback) {
                        callback(item.textContent);
                    }
                    hideMenu();
                });
            });

            document.addEventListener('click', (event) => {
                if (AutoHide && !menu.contains(event.target) && !buttonElement.contains(event.target)) {
                    hideMenu();
                }
            });
        }
    }
}


function entry(entryElement) {
    if(!entryElement || !(entryElement instanceof HTMLElement)) {
        console.error('無法找到條目元素！');
        return;
    }
    return {
        bindClick: function(callback) {
            entryElement.addEventListener('click', () => {
                callback(entryElement.textContent);
            });
        },
        bindObject: function(object, callback) {
            let isHidden = false;
            if(object && object.hidden !== undefined) {
                isHidden = object.hidden;
            }
            entryElement.addEventListener('click', () => {
                if (object && object.hidden !== undefined) {
                    object.hidden = isHidden;
                    isHidden = !isHidden;
                }
                if (callback) {
                    callback(isHidden);
                }
            });
        }
    };
}


export {stackInit, button, entry};