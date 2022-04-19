const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const collection = document.querySelector('.collection');

let books = [];

function BookObject(title, author, id) {
  this.bookTitle = title;
  this.bookAuthor = author;
  this.bookId = id;
}
let i = 0;

function displayFromArray() {
  const retrivedData = localStorage.getItem('storedBooks');
  const recoverdBooks = JSON.parse(retrivedData);
  collection.innerHTML = '';
  if (recoverdBooks !== null) {
    books = recoverdBooks;
  }
  for (let j = 0; j < books.length; j += 1) {
    books[j].bookId = j;
    const div = document.createElement('div');
    div.innerHTML = `<p>${books[j].bookTitle}</p>
    <p>${books[j].bookAuthor}</p>`;
    const remBtn = document.createElement('button');
    remBtn.textContent = 'Remove';
    remBtn.setAttribute('onclick', `removeBook(${j})`);
    const line = document.createElement('hr');
    div.append(remBtn, line);
    collection.appendChild(div);
  }
}

function removeBook(j) {
  books = books.filter((book) => book.bookId !== j);
  localStorage.setItem('storedBooks', JSON.stringify(books));
  displayFromArray();
}

if (1 === 10) {
  removeBook(1);
}

function clearInputs() {
  title.value = '';
  author.value = '';
}

addBtn.addEventListener('click', () => {
  if (title.value === '' || author.value === '') {
    alert('Empty Input!');
  } else {
    const book = new BookObject(title.value, author.value, i);
    books.push(book);
    clearInputs();
    localStorage.setItem('storedBooks', JSON.stringify(books));
    displayFromArray();
    i += 1;
  }
});

if (books != null) {
  displayFromArray();
}