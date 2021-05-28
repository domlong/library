class Book{
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = 0,
        haveRead = false)
        {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;
    }

    toggleRead
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    saveLocal();
}

function addToLibrary() {
    let form = document.querySelector('.form');
    let title = form.querySelector("input[name='title']").value;
    let author = form.querySelector("input[name='author']").value;
    let pages = form.querySelector("input[name='pages']").value;
    let read = form.querySelector("input[name='read']").checked;
    
    if(title === '' || author === '' || pages === '') return
    let book = new Book(
        title ? title : 'Unknown',
        author ? author : 'Unknown',
        pages,
        read);
    addBookToLibrary(book);
    createBookCard(book);
    closeForm();
    form.reset();
}

function openForm() {
    document.querySelector('.form').classList.add('form-active');
    document.querySelector('#fade').classList.add('overlay');
}

function closeForm() {
    document.querySelector('.form').classList.remove('form-active');
    document.querySelector('#fade').classList.remove('overlay');
}

function stackShelf() {
    const cardCount = document.querySelector('#bookshelf').childElementCount;
    myLibrary.slice(cardCount).forEach(createBookCard);
}

function createBookCard(book) {
    let shelf = document.querySelector('#bookshelf');
    let card = document.createElement('div');
    let bookDiv = document.createElement('div.book');
    bookDiv.classList.add('book')
    let title = document.createElement('h1');
    let author = document.createElement('h2');
    let pages = document.createElement('h3');
    let read = document.createElement('button');
    let remove = document.createElement('button');

    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    pages.textContent = `${book.pages} pages`;
    remove.textContent = `remove from library`;
    remove.classList.add('remove')

    read.addEventListener('click', toggleRead);
    remove.addEventListener('click', removeBook);

    bookDiv.append(title, author, pages, read, remove);
    shelf.append(bookDiv);
    toggleRead.call(read);
    toggleRead.call(read);
}

function emptyShelf() {
    let shelf = document.querySelector('#bookshelf');
    while(shelf.hasChildNodes()) {
        shelf.removeChild(shelf.lastChild);
    }
    myLibrary = [];
}

function removeBook() {
    let bookNode = this.parentNode;
    let index = Array.from(bookNode.parentNode.children).indexOf(bookNode);
    bookNode.remove();
    myLibrary.splice(index,1);
    saveLocal();
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
    saveLocal();
}

function addExampleBooks() {
    addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 370, true));
    addBookToLibrary(new Book('Animal Farm', 'George Orwell', 212, false));
    addBookToLibrary(new Book('Norwegian Wood', 'Haruki Murakami', 305, false));
    addBookToLibrary(new Book('Practical Ethics', 'Peter Singer', 455, true));
    addBookToLibrary(new Book('Cat\'s Cradle', 'Kurt Vonnegut', 283, true));
    addBookToLibrary(new Book('Thus Spoke Zarathustra', 'Friedrich Nietzsche', 199, false));
    addBookToLibrary(new Book('Frankenstein', 'Mary Shelley', 666, false));
    addBookToLibrary(new Book('Manufactured Consent', 'Noam Chomsky', 255, true));
    addBookToLibrary(new Book('The Problems of Philosophy', 'Bertrand Russell', 432, false));
    addBookToLibrary(new Book('The Bell Jar', 'Sylvia Plath', 851, true));
    stackShelf();
}

let myLibrary = [];
document.querySelector('#toggle-form').addEventListener('click', openForm);;
document.querySelector('#form-submit').addEventListener('click', addToLibrary);
document.querySelector('#fill-shelf').addEventListener('click', addExampleBooks);
document.querySelector('#empty-shelf').addEventListener('click', emptyShelf);
document.querySelector('#form-cancel').addEventListener('click', closeForm);

// local storage
function saveLocal() {
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

function loadLocal() {
    myLibrary = JSON.parse(localStorage.getItem('library'));
    if (myLibrary === null) myLibrary = [];
    stackShelf();   
}

loadLocal();