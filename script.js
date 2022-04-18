const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const collection = document.querySelector('.collection');

const books = [];

function BookObject(title, author, id) {
  this.bookTitle = title;
  this.bookAuthor = author;
  this.bookId = id;
}
let i = 0;

function clearInputs() {
  title.value = '';
  author.value = '';
}

function displayBooks() {
  const displayTitle = document.createElement('p');
  const displayAuthor = document.createElement('p');
  const line = document.createElement('hr');
  const removeBtn = document.createElement('button');
  removeBtn.setAttribute('id', i);
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
  });

  displayTitle.textContent = books[i].bookTitle;
  displayAuthor.textContent = books[i].bookAuthor;
  collection.append(displayTitle, displayAuthor, removeBtn, line);
}

addBtn.addEventListener('click', () => {
  if (title.value === '' || author.value === '') {
    alert('Empty Input!');
  } else {
    const book = new BookObject(title.value, author.value, i);
    books.push(book);
    localStorage.setItem(0, JSON.stringify(books));
    displayBooks();
    clearInputs();
    i += 1;
  }
});
