document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('books-view').iframe;
    
});


document.addEventListener('DOMContentLoaded', () => {
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
});