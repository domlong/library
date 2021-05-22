let myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        let msg = `${title} by ${author}, ${pages} pages, `;
        if(haveRead) {
            msg += 'have read';
        } else {
            msg += 'not read yet';
        } 
        return msg;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function clickAddToLibrary() {
    let form = document.querySelector('#form-container');
    let title = form.querySelector("input[name='title']").value;
    let author = form.querySelector("input[name='author']").value;
    let pages = form.querySelector("input[name='pages']").value;
    let read = form.querySelector("input[name='read']").value;
    console.log(form.querySelector("input[name='read']"))
    console.log({title, author, pages, read})
}

function openForm() {

}

function stackShelf() {
    emptyShelf();
    let shelf = document.querySelector('#bookshelf');
    myLibrary.forEach((book) => {
        let card = document.createElement('div');
        card.classList.add('book-card')
        let bookDiv = document.createElement('div.book');
        let title = document.createElement('h1');
        let author = document.createElement('h2');
        let pages = document.createElement('h3');
        let read = document.createElement('button');
        title.textContent = book.title;
        author.textContent = `by ${book.author}`;
        pages.textContent = `${book.pages} pages`;
        if(book.haveRead) {
            read.textContent = 'read';
            read.classList.add('read')
        }
        else {
            read.textContent = 'not read';
            read.classList.add('unread')
        }
        bookDiv.append(title, author, pages, read);
        card.append(bookDiv);
        shelf.append(card);
    });
}

function emptyShelf() {
    let shelf = document.querySelector('#bookshelf');
    while(shelf.hasChildNodes()) {
        shelf.removeChild(shelf.lastChild);
    }

}

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 370, true));
addBookToLibrary(new Book('Animal Farm', 'George Orwell', 212, true));
addBookToLibrary(new Book('Norwegian Wood', 'Haruki Murakami', 305, false));

// console.table(myLibrary);

let btn = document.querySelector('#toggle-form');
btn.addEventListener('click', openForm);

let add = document.querySelector('#form-submit');
add.addEventListener('click', clickAddToLibrary);

let test = document.querySelector('#test-add');
test.addEventListener('click', stackShelf);