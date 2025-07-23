// C:/scripts/units/BookItem.js
function createBookItem(bookData) {
    const template = document.getElementById('book-item-template');
    const bookItemClone = template.content.cloneNode(true);
    const coverElement = bookItemClone.querySelector('.book-item__cover');
    const titleElement = bookItemClone.querySelector('.book-item__title');
    const authorElement = bookItemClone.querySelector('.book-item__author');

    coverElement.src = bookData.coverUrl || 'assets/default-cover.svg';
    coverElement.alt = bookData.title;
    titleElement.textContent = bookData.title;
    authorElement.textContent = bookData.author;

    return bookItemClone;
}