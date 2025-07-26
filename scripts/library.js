document.addEventListener('DOMContentLoaded', () => {
    fetch('api/getBooks')
    .then(response => response.json())
    .then(books => {
        const booksView = document.getElementById('books-view');
        booksView.innerHTML = '';
        books.forEach(book => {
            const bookItemElement = createBookItem(book);
            booksView.appendChild(bookItemElement);
        });
    })
    .catch(error => {
        console.error('Error fetching books:', error);
        const booksView = document.getElementById('books-view');
        booksView.innerHTML = '<p>Error loading books. Please try again later.</p>';
    });
});