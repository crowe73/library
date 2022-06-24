// Declare Declare empty array.
let myLibrary = [];

// Object Constructor.
function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function()
    {
        return(title + author + ", " + pages + ", " + read);
    }
}

// Add a book to library.
function addBookToLibrary()
{
    // Add a book.
}

const theHobbit = new Book("The Hobbit", " by J.R.R Tolkien", " 295 pages", " not read yet");
console.log(theHobbit.info());