const collection = document.querySelector('.collection');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addBtn = document.querySelector('#addBtn');
let id = 1 || JSON.parse(localStorage.getItem('maxID'));

class BookObject {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static displayBooks() {
    collection.innerHTML = '';
    id = JSON.parse(localStorage.getItem('maxID'));
    const keys = Object.keys(localStorage);
    keys.forEach((element) => {
      if (element === 'maxID') return;
      const retrievedBook = JSON.parse(localStorage.getItem(element));
      this.createElements(retrievedBook.title, retrievedBook.author, element);
    });
  }

  static addBook(title, author, id) {
    this.createElements(title, author, id);
  }

  static createElements(title, author, id) {
    const remBtn = [];
    const div = [];
    div[id] = document.createElement('div');
    div[id].setAttribute('id', id);
    const pText = document.createElement('p');
    pText.textContent = `"${title}" by ${author}`;

    remBtn[id] = document.createElement('button');
    remBtn[id].setAttribute('id', id);
    remBtn[id].textContent = 'Remove';
    remBtn[id].addEventListener('click', (e) => {
      const key = e.target.id;
      div[e.target.id].remove();
      localStorage.removeItem(key);
      if (collection.innerHTML === '') {
        collection.style.border = 'none';
      }
    });
    div[id].append(pText, remBtn[id]);
    collection.appendChild(div[id]);
    collection.style.border = '3px solid black';
  }

  static storeLS(book, id) {
    localStorage.setItem(id, JSON.stringify(book));
  }

  static clearInputs() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// Add Button Event
addBtn.addEventListener('click', () => {
  if (title === '' || author === '') {
    alert('Please fill in all fields');
  } else {
    BookObject.addBook(title.value, author.value, id);
    const book = new BookObject(title.value, author.value, id);
    BookObject.storeLS(book, id);
    id += 1;
    localStorage.setItem('maxID', id);
    BookObject.clearInputs();
  }
});

window.onload = function reset() {
  BookObject.displayBooks();
  if (collection.innerHTML === '') {
    collection.style.border = 'none';
  }
};

// Date Info
const date = document.querySelector('.date');
const setTime = () => {
  const dateNow = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[dateNow.getMonth()];
  const day = dateNow.getDate();
  const year = dateNow.getFullYear();

  let minutes = dateNow.getMinutes();
  const hours = dateNow.getHours();
  let seconds = dateNow.getSeconds();

  if (seconds.toString().length < 2) {
    seconds = `0${seconds}`;
  }
  if (minutes.toString().length < 2) {
    minutes = `0${minutes}`;
  }
  const amPm = hours >= 12 ? 'pm' : 'am';
  const time = `${month} ${day}th ${year}, ${hours}:${minutes}:${seconds} ${amPm}`;
  date.textContent = '';
  date.textContent = `${time}`;
};

setInterval(setTime, 1000);

// Link Interaction
const listBtn = document.querySelector('#listBtn');
const addNewBtn = document.querySelector('#addNewBtn');
const contactBtn = document.querySelector('#contactBtn');

const listSec = document.querySelector('.list');
const addNewSec = document.querySelector('.addNew');
const contactSec = document.querySelector('.contact');

listBtn.addEventListener('click', () => {
  listSec.style.display = 'block';
  addNewSec.style.display = 'none';
  contactSec.style.display = 'none';
});

addNewBtn.addEventListener('click', () => {
  listSec.style.display = 'none';
  addNewSec.style.display = 'block';
  contactSec.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  listSec.style.display = 'none';
  addNewSec.style.display = 'none';
  contactSec.style.display = 'flex';
});