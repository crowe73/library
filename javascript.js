// Declare empty array.
let myLibrary = [];

// Object Constructor.
function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    //this.info = function()
    //{
        //return(title + author + ", " + pages + ", " + read);
    //}
}

// Add a book to library.
function addBookToLibrary(title, author, pages, read)
{
    // Add a book.
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

//const theHobbit = new Book("The Hobbit", " by J.R.R Tolkien", " 295 pages", " not read yet");
//console.log(theHobbit.info());

// Display the library array to cards.
function displayBooksOnPage()
{
    const books = document.querySelector(".books");

    // Loop over the library array and display to cards.
    myLibrary.forEach(myLibrary => 
        {
            const card = document.createElement("div");
            card.classList.add("card");
            books.appendChild(card);
            for (let key in myLibrary)
            {
                console.log(`${key}: ${myLibrary[key]}`);
                const paragraph = document.createElement("p");
                paragraph.textContent = (`${key}: ${myLibrary[key]}`);
                card.appendChild(paragraph);
            }
        })
}

// Function calls to add books manually until form is built.
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");

console.log("End of code array contents", myLibrary);

displayBooksOnPage();