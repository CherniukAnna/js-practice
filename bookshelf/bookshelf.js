// Отримати посилання на елементи DOM
const bookshelf = document.getElementById("bookshelf");
const addBookButton = document.getElementById("add-book");
const removeBookButton = document.getElementById("remove-book");

// Функція для додавання книги на полку
function addBook() {
  const bookTitle = prompt("Введіть назву книги:");
  if (bookTitle) {
    const bookElement = document.createElement("div");
    bookElement.textContent = bookTitle;
    bookshelf.appendChild(bookElement);
  }
}

// Функція для видалення останньої книги з полки
function removeBook() {
  const books = bookshelf.querySelectorAll("div");
  if (books.length > 0) {
    const lastBook = books[books.length - 1];
    bookshelf.removeChild(lastBook);
  }
}

// Додати обробники подій для кнопок
addBookButton.addEventListener("click", addBook);
removeBookButton.addEventListener("click", removeBook);
