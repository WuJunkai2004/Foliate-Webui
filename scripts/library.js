import * as core from './core.js';

function openFile() {
    // 创建一个文件选择对话框
    const input = document.createElement('input');
    input.type = 'file';

    // 当用户选择文件时触发
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log(file);
            console.log(`Selected file: ${file.name}`);
            
            // 创建一个 FileReader 来读取文件内容
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                console.log(`File content:\n${content}`);
                // 在这里可以添加逻辑来处理文件内容
            };
        } else {
            console.log('No file selected');
        }
    };

    // 触发文件选择对话框
    input.click();
}


document.addEventListener('DOMContentLoaded', () => {
    core.button(document.getElementById('library-add-button'))
        .bindClick(openFile);
    core.button(document.getElementById('sidebar-toggle-button'))
        .bindObject(
            document.getElementById('sidebar'),
            (isHidden) => { console.log(`sidebar is now ${isHidden ? 'hidden' : 'visible'}`); }
        );
    core.button(document.getElementById('primary-menu-button'))
        .bindMenu(
            document.getElementById('primary-menu'),
            (num) => { console.log(`Primary Menu item ${num} clicked`); }
        );
    core.button(document.getElementById('library-menu-button'))
        .bindMenu(
            document.getElementById('library-menu'),
            (num) => { console.log(`Library Menu item ${num} clicked`); }
        );
    core.entry(document.getElementById('search-entry'));
});