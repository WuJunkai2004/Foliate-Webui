document.addEventListener('DOMContentLoaded', () => {
    fetch('api/getShelves')
    .then(response => response.json())
    .then(shelves => {
        const sidebar = document.getElementById('sidebar');
        sidebar.innerHTML = ''; // Clear existing content
        shelves.forEach(shelf => {
            const shelfItem = document.createElement('div');
            shelfItem.className = 'sidebar__item';
            shelfItem.textContent = shelf.name;
            shelfItem.addEventListener('click', () => {
                // Logic to display books in the selected shelf
                console.log(`Selected shelf: ${shelf.name}`);
                // You can add functionality to fetch and display books for this shelf
            });
            sidebar.appendChild(shelfItem);
        });
    })
})