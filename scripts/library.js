document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('books-view').iframe;
    
});


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
    buttonClickLogic(
        document.getElementById('library-add-button'),
        openFile
    );
    buttonLogic(
        document.getElementById('sidebar-toggle-button'),
        document.getElementById('sidebar'),
        (isHidden) => { console.log(`sidebar is now ${isHidden ? 'hidden' : 'visible'}`); }
    );
    buttonLogic(
        document.getElementById('library-search-button'),
        document.getElementById('search-bar'),
        (isHidden) => { console.log(`search bar is now ${isHidden ? 'hidden' : 'visible'}`); }
    );
    buttonMenuLogic(
        document.getElementById('primary-menu-button'),
        document.getElementById('primary-menu'),
        (num) => { console.log(`Primary Menu item ${num} clicked`); }
    );
    buttonMenuLogic(
        document.getElementById('library-menu-button'),
        document.getElementById('library-menu'),
        (num) => { console.log(`library Menu item ${num} clicked`); }
    );
    searchBarLogic(
        document.getElementById('search-entry'),
        undefined,
        (query) => { console.log(`Search query: ${query}`); }
    )
});