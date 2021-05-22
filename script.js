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
}

function openForm() {

}

function stackShelf() {
    emptyShelf();
    let shelf = document.querySelector('#bookshelf');
    myLibrary.forEach((book) => {
        let card = document.createElement('div');
        let bookDiv = document.createElement('div.book');
        bookDiv.classList.add('book')
        let title = document.createElement('h1');
        let author = document.createElement('h2');
        let pages = document.createElement('h3');
        let read = document.createElement('button');
        title.textContent = book.title;
        author.textContent = `by ${book.author}`;
        pages.textContent = `${book.pages} pages`;
        
        read.addEventListener('click', toggleRead);

        bookDiv.append(title, author, pages, read);
        shelf.append(bookDiv);
        toggleRead.call(read);
        toggleRead.call(read);
    });
}

function emptyShelf() {
    let shelf = document.querySelector('#bookshelf');
    while(shelf.hasChildNodes()) {
        shelf.removeChild(shelf.lastChild);
    }
}

function removeBook() {
    let bookNode = this.parentNode;
    let index = Array.from(bookNode.parentNode.children).indexOf(bookNode);
    bookNode.remove();
    myLibrary.splice(index,1);
}

function toggleRead() {
    const index = Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode);
    if (myLibrary[index].haveRead) {
        this.textContent = 'not read';
        this.classList.remove('read');
        this.classList.add('unread');
    }
    else {
        this.textContent = 'read';
        this.classList.remove('unread');
        this.classList.add('read');
    }
    myLibrary[index].haveRead = !myLibrary[index].haveRead;
}

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 370, true));
addBookToLibrary(new Book('Animal Farm', 'George Orwell', 212, false));
addBookToLibrary(new Book('Norwegian Wood', 'Haruki Murakami', 305, false));
addBookToLibrary(new Book('Practical Ethics', 'Peter Singer', 455, true));

stackShelf();

let btn = document.querySelector('#toggle-form');
btn.addEventListener('click', openForm);

let add = document.querySelector('#form-submit');
add.addEventListener('click', clickAddToLibrary);