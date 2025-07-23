// C:/scripts/library.js

// 當整個頁面的 DOM 都載入完成後，再執行我們的程式碼
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 準備一些範例書籍資料 (未來可以從後端 API 獲取)
    const myBooks = [
        { title: '三體', author: '劉慈欣', coverUrl: 'assets/three-body.jpg' },
        { title: '百年孤寂', author: '馬奎斯', coverUrl: 'assets/one-hundred-years.jpg' },
        { title: '流浪地球', author: '劉慈欣', coverUrl: 'assets/wandering-earth.jpg' },
        { title: '活著', author: '余華', coverUrl: 'assets/to-live.jpg' },
        { title: '沙丘', author: '法蘭克·赫伯特', coverUrl: 'assets/dune.jpg' },
        { title: '不存在的書', author: '佚名', coverUrl: '' },
        { title: '圍城', author: '錢鍾書', coverUrl: 'assets/fortress-besieged.jpg' },
        { title: '1984', author: '喬治·歐威爾', coverUrl: 'assets/1984.jpg' },
    ];

    // 2. 找到要放置書籍的容器
    const booksView = document.getElementById('books-view');

    // 3. 清空容器裡的任何預設內容 (例如 "Book content...")
    booksView.innerHTML = '';

    // 4. 遍歷書籍資料，為每一本書創建一個元件並添加到容器中
    myBooks.forEach(book => {
        // ✨ 呼叫工廠函數，傳入資料，得到一個 DOM 元素
        const bookItemElement = createBookItem(book);
        
        // 將生成好的元素添加到書庫網格中
        booksView.appendChild(bookItemElement);
    });
});