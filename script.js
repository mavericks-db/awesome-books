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
    displayFromarray();
    i += 1;
  }
});

function displayFromarray(){
  let length = books.length;
  collection.innerHTML = "";
  for (let j=0; j<length; j++){
    books[j].bookId = j;
    const div = document.createElement('div');
    div.innerHTML = `<p>${books[j].bookTitle}</p>
    <p>${books[j].bookAuthor}</p>
    <button onclick="removeBook(${j})" >remove</button>`;
    collection.appendChild(div);
  }
  localStorage.setItem(0, JSON.stringify(books));
}

function removeBook(j){
  
  books = books.filter(book => book.bookId != j);
  console.log(j);
  displayFromarray();
}
