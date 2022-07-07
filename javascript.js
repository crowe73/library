// Declare empty array.
let myLibrary = [];

// Object Constructor.
function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Add a book to library.
function addBookToLibrary(title, author, pages, read)
{
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooksOnPage();
}

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
    let index = 0;
    myLibrary.forEach(myLibrarys => 
        {
            const card = document.createElement("div");
            card.classList.add("card");
            books.appendChild(card);

            // Create remove book button and add class attributes for each array card.
            const removeBookButton = document.createElement("button");
            removeBookButton.classList.add("remove_book_button");
            removeBookButton.textContent = "Remove From Library";
            console.log("Show me my current array objects inside of foreach...", myLibrary);

            // Link the data attribute of the remove button to the array and card.
            removeBookButton.dataset.linkedArray = index;
            console.log("Show me the dataset link back to the array...", removeBookButton.dataset.linkedArray);
            card.appendChild(removeBookButton);

            // Remove the array item from the array and card from parent div via data link.
            removeBookButton.addEventListener("click", removeBookFromLibrary);

            function removeBookFromLibrary()
            {
                let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
                console.log("Attempting to remove array item via data attribute...", parseInt(retrieveBookToRemove));
                myLibrary.splice(parseInt(retrieveBookToRemove), 1);
                card.remove();
                displayBooksOnPage();
            }

            // Create read status button and add class attributes for each array card.
            const readStatusButton = document.createElement("button");
            readStatusButton.classList.add("read_status_button");
            readStatusButton.textContent = "Toggle Read Status";

            // Link the data attribute of the toggle read button to the array and card.
            readStatusButton.dataset.linkedArray = index;
            console.log("Show me the dataset link back to the array FOR READ STATUS BUTTON...", readStatusButton.dataset.linkedArray);
            card.appendChild(readStatusButton);

            // Toggle logic for array objects prototype for read status change.
            readStatusButton.addEventListener("click", toggleReadStatus);

            function toggleReadStatus()
            {
                let retrieveBookToToggle = readStatusButton.dataset.linkedArray;
                Book.prototype = Object.create(Book.prototype);
                const toggleBook = new Book();
                console.log("What is the toggle initial value?...", myLibrary[parseInt(retrieveBookToToggle)].read);

                // Run check to see  what read value is present to toggle from.
                if ((myLibrary[parseInt(retrieveBookToToggle)].read) == "yes")
                {
                    toggleBook.read = "no";
                    myLibrary[parseInt(retrieveBookToToggle)].read = toggleBook.read;
                }
                else if ((myLibrary[parseInt(retrieveBookToToggle)].read) == "no")
                {
                    toggleBook.read = "yes";
                    myLibrary[parseInt(retrieveBookToToggle)].read = toggleBook.read;
                }
                displayBooksOnPage();
            }

            // Loop over the object keys and values and display to each card.
            for (let key in myLibrarys)
            {
                console.log(`${key}: ${myLibrarys[key]}`);
                const paragraph = document.createElement("p");
                paragraph.textContent = (`${key}: ${myLibrarys[key]}`);
                card.appendChild(paragraph);
            }

        index++;
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