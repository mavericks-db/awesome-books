const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const collection = document.querySelector('.collection');

let books = [];
function bookObject(title, author, id) {
    this.bookId = id;
    this.bookTitle = title;
    this.bookAuthor = author;
}
let i = 0;

addBtn.addEventListener("click", function () {
    if (title.value == "" || author.value == "") {
        alert("Empty Input!")
    } else {
        let book = new bookObject(title.value, author.value, i);
        books.push(book);
        localStorage.setItem(0, JSON.stringify(books));
        displayBooks();
        clearInputs();
        i += 1;
    }
})

function displayBooks() {
    let displayTitle = document.createElement('p');
    let displayAuthor = document.createElement('p');
    let removeBtn = document.createElement('button');
    removeBtn.addEventListener('click', removeBook(i));
    let line = document.createElement('hr');
    removeBtn.textContent = "Remove";
    
    displayTitle.textContent = books[i].bookTitle;
    displayAuthor.textContent = books[i].bookAuthor;
    collection.append(displayTitle, displayAuthor, removeBtn, line);
}

function clearInputs() {
    title.value = '';
    author.value = '';
}