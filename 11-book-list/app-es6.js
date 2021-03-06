// Function shorthands
const $ = document.querySelector.bind(document);
const e = document.createElement.bind(document);
const t = document.createTextNode.bind(document);

// UI elements
const container = $('#app')
const bookFormEl = $('#book-form');
const bookListEl = $('#book-list');
const titleEl = $('#title');
const authorEl = $('#author');
const isbnEl = $('#isbn');


// Classes
class LocalStorage {
  static listBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
  }
  static createBook(books, book) {
    return localStorage.setItem('books', JSON.stringify([...books, book]));
  }
  static deleteBook(books, isbn) {
    return localStorage.setItem('books', JSON.stringify([...books.filter(book => book.isbn != isbn)]));
  }
}

class Book {
  constructor(args) {
    this.title = args && args.title ? args.title : 'Unknown';
    this.author = args && args.author ? args.author : 'Unknown';
    this.isbn = args && args.isbn ? args.isbn : 'Unknown';
  }
}

class UI {
  constructor() { }
  addBookToList(book) {
    const row = e('tr');
    row.dataset.isbn = book.isbn;
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
    bookListEl.appendChild(row);
  }
  addBooksToList(books) {
    while(bookListEl.firstChild) bookListEl.removeChild(bookListEl.firstChild);
    books.forEach(book => this.addBookToList(book), this);
  }
  clearFields() {
    titleEl.value = '';
    authorEl.value = '';
    isbnEl.value = '';
  }
  showAlert(message, type) {
    const div = e('div');
    div.appendChild(t(message));
    div.classList.add('alert', type);
    container.insertBefore(div, bookFormEl);
    setTimeout(() => $('.alert').remove(), 3000);
  }
}


// App
document.addEventListener('DOMContentLoaded', function() {

  // Instantiate app
  const ui = new UI();
  let books = LocalStorage.listBooks();

  // Initial render
  ui.addBooksToList(books);

  // Add event handler for submit
  bookFormEl.addEventListener('submit', function(e) {
    // Prevent default submit
    e.preventDefault();
  
    // Validate fields
    if (!titleEl.value || !authorEl.value || !isbnEl.value) {

      // Show error message
      ui.showAlert('All fields required', 'error');

    } else {
      
      // Get book data
      const book = new Book({
        title: titleEl.value,
        author: authorEl.value,
        isbn: isbnEl.value
      });
    
      // Persist in local storage
      LocalStorage.createBook(books, book);

      // Refresh books
      books = LocalStorage.listBooks();

      // Refresh UI
      ui.addBooksToList(books);
    
      // Clear fields
      ui.clearFields();

      // Show success message
      ui.showAlert('Book successfully added', 'success');

    }

  });

  // Add event handler for remove
  bookListEl.addEventListener('click', function(e) {
    // Prevent default reload
    e.preventDefault();

    // Check for deletion from parent
    if (e.target.classList.contains('delete')) {

      // Remove from local storage
      LocalStorage.deleteBook(books, e.target.parentElement.parentElement.dataset.isbn);

      // Refresh books
      books = LocalStorage.listBooks();

      // Refresh UI
      ui.addBooksToList(books);

      // Show success message
      ui.showAlert('Book successfully removed', 'success');
    }
  });

});
