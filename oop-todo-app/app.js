
class Book {
    constructor(title, author, isbn){
        this.title =title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: for UI tasks
class UI {

    static displayBooks(){
      
        const books = Storage.getBooks();

        books.forEach((book)=> UI.addBookToList(book))
    }


    static addBookToList(book){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        listElement.appendChild(row);
    }

    static deleteBook(target){
        if(target.classList.contains('delete')){
            target.parentElement.parentElement.remove();
        }
    }


    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        //passing in a text to the element
        div.appendChild(document.createTextNode(message))
        //select container for div and then . before the form
        document.querySelector('.container').insertBefore(div, form)
    
        // setTimeout(function(){
        //     //select element class and set display to none
        //     document.querySelector('.alert').style.display ='none';
        // }, 3000)

        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }
}

class Storage {
    //LocalStorage:
    // when we pull it out, we parse it
    //when send it, we stringify it
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }
    static addBook(book){
        const books = Storage.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn){
        const books = Storage.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
        
    }
}


//HTML Elements Selection
const listElement = document.querySelector('#book-list'); //'tbody' element
const form = document.querySelector('#book-form');


//Adding a book via the FORM
form.addEventListener('submit', e => {
    e.preventDefault()
    //reading form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if(title ==='' || author ==='' || isbn ===''){
         UI.showAlert('All fields are required', 'danger')  
    }else{
        //instantiate book
        const book = new Book(title,author,isbn);
        //add inputs to UI method
        UI.addBookToList(book)
        //add inputs to storage method
        Storage.addBook(book)
        
        UI.showAlert('Added a book successfully', 'success')  
        
    }
    //Clear Form fields
    form.reset()
})

// EVENT: To Display the Books
document.addEventListener('DOMContentLoaded', UI.displayBooks())


// EVENT PROPAGATION: Remove a book
listElement.addEventListener('click', e => {
    //pass targeted element to UI method
    UI.deleteBook(e.target)
    //with this we need to traverse the DOM for the previous element
    Storage.removeBook(e.target.parentElement.previousElementSibling.textContent)

    UI.showAlert('Deleted a book successfully', 'success')  

})