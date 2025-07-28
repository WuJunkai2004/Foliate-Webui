document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('books-view').iframe;
    
});


document.addEventListener('DOMContentLoaded', () => {
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