const addBtn = document.getElementById('addBtn');
const title = document.getElementById('title');
const author = document.getElementById('author');
const collection = document.querySelector('.collection');

const bookEntry = {
  title: '',
  author: '',
};

const inputTitle = [];
const inputAuthor = [];
const remBtn = [];
let index = 0;

function clearInputs() {
  title.value = '';
  author.value = '';
}

function createEntry(index) {
  inputTitle[index] = document.createElement('p');
  inputAuthor[index] = document.createElement('p');

  inputTitle[index].textContent = bookEntry.title;
  inputAuthor[index].textContent = bookEntry.author;

  remBtn[index] = document.createElement('button');
  remBtn[index].textContent = 'Remove';
  const x = document.createElement('hr');
  collection.append(inputTitle[index], inputAuthor[index], remBtn[index], x);

  remBtn[index].addEventListener('click', () => {
    inputTitle[index].remove();
    inputAuthor[index].remove();
    remBtn[index].remove();
    x.remove();
  });

  clearInputs();
}

function store() {
  const val = JSON.stringify(bookEntry);
  localStorage.setItem(index, val);
  createEntry(index);
  index += 1;
}

function storeTitle(e) {
  bookEntry.title = e.target.value;
}

function storeAuthor(e) {
  bookEntry.author = e.target.value;
}

addBtn.addEventListener('click', store);
title.addEventListener('input', storeTitle);
author.addEventListener('input', storeAuthor);