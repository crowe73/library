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
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooksOnPage();
}

//const theHobbit = new Book("The Hobbit", " by J.R.R Tolkien", " 295 pages", " not read yet");
//console.log(theHobbit.info());

// Display the library array to cards.
function displayBooksOnPage()
{
    const books = document.querySelector(".books");

    // Remove all previously displayed cards before looping array again.
    const removeDivs = document.querySelectorAll(".card");
    console.log("Show me the node count of current card divs...", removeDivs);
    for (let i = 0; i < removeDivs.length; i++)
    {
        removeDivs[i].remove();
    }

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

// Display a form to add a new book to the library.
const addBookButton = document.querySelector(".add_book_button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm()
{
    document.getElementById("add_book_form").style.display = "";
}

// Add input to array for new entry form.
const submitButton = document.querySelector(".submit_button");
submitButton.addEventListener("click", intakeFormData);

// Transform the form data to variables for intake.
function intakeFormData()
{
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    // Break out if form in incompete or invalid.
    if ((title == "") || (author == "") || (pages == "") || (read == ""))
    {
        return;
    }
    // Function call to input the book data to array.
    addBookToLibrary(title, author, pages, read);

    // Reset the form after successful submission.
    document.getElementById("add_book").reset();
}

// Clear the form.
const clearButton = document.querySelector(".reset_button");
clearButton.addEventListener("click", clearForm);

function clearForm()
{
    document.getElementById("add_book").reset();
}

// Function calls to add books manually until form is built.
/*addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet");

console.log("End of code array contents", myLibrary);

displayBooksOnPage();*/