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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
console.log(theHobbit.info());