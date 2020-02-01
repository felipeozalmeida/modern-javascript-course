// Function shorthands
const $ = document.querySelector.bind(document);
const e = document.createElement.bind(document);
const t = document.createTextNode.bind(document);

// UI elements
const bookFormEl = $('#book-form');
const bookListEl = $('#book-list');
const titleEl = $('#title');
const authorEl = $('#author');
const isbnEl = $('#isbn');


// Classes

function Book(args) {
  this.title = args && args.title ? args.title : 'Unknown';
  this.author = args && args.author ? args.author : 'Unknown';
  this.isbn = args && args.isbn ? args.isbn : 'Unknown';
}

function UI() {}

UI.prototype.addBookToList = function (book) {
  const row = e('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  bookListEl.appendChild(row);
}

UI.prototype.clearFields = function() {
  titleEl.value = '';
  authorEl.value = '';
  isbnEl.value = '';
}


// App
document.addEventListener('DOMContentLoaded', function() {

  // Instantiate app
  const ui = new UI();

  // Add event handler for submit
  bookFormEl.addEventListener('submit', function(e) {
    // Prevent default submit
    e.preventDefault();
  
    // Get book data
    const book = new Book({
      title: titleEl.value,
      author: authorEl.value,
      isbn: isbnEl.value
    });
  
    // Add book to list
    ui.addBookToList(book);
  
    // Clear fields
    ui.clearFields();
  });

})
