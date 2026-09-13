// const car = {
//     company: "Tata",
//     model: "Dicor",
//     year: "2026",
//     color: "grey",
//     price: 2000,

//     applydis(percentage) {
//         let finalprice = (this.price) * (1 - percentage / 100)
//         this.price = finalprice;
//     },

//     getsummary() {
//         console.log(`The new ${this.company} ${this.model} has sold to ${this.price} in the year ${this.year} `)
//     }
// }
// // car.applydis(30);
// // car.getsummary();
// function Cars(company, model, year, color, price) {
//     this.company = company;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.price = price;
//     this.final = function (percentage) {
//         let finalprice = (this.price) * (1 - percentage / 100)
//         this.price = finalprice;
//     };
//     this.getsummary = function () {
//         console.log(`The new ${this.company} ${this.model} has sold to ${this.price} in the year ${this.year} `)
//     };
// }
// // const car1 = new Cars("BMW", "20", 2026, "black", 4000)
// // const car2 = new Cars("Benz", "200", 2026, "brown", 40000)
// // car1.final(20);
// // car1.getsummary();
// // car2.final(40)
// // car2.getsummary();

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function () {
        console.log(` The Book ${this.title} which was written by ${this.author} has ${this.pages} pages and is ${this.read}`)
    };
}

const book1 = new Book("The 7 Girls", "Merley Jackson", 400, "read", 1)
const book2 = new Book("Permission", "Rosie Vaul", 360, "not read", 1)

let myLibrary = [book1, book2];

function addBookToLibrary(title, author, pages, read, id) {
    const newbook = new Book(title, author, pages, read, id);
    myLibrary.push(newbook);
}

addBookToLibrary("1", "sameria", 300, "read", 1);
console.log(myLibrary);

function display(myLib) {

    const existingcards = document.body.querySelectorAll(".card")
    existingcards.forEach(card => card.remove())

    for (let i = 0; i < myLib.length; i++) {
        // const bookname = document.createElement("h3");
        const cardd = document.createElement("div")
        cardd.classList.add("card");

        const bookname = document.createElement("h3");
        bookname.textContent = myLib[i].title;

        const bookauthor = document.createElement("h4");
        bookauthor.textContent = myLib[i].author;

        const bookpages = document.createElement("h4");
        bookpages.textContent = myLib[i].pages;

        const bookread = document.createElement("h4")
        bookread.textContent = myLib[i].read;
        bookread.classList.add("read");

        const bookid = document.createElement("div")
        bookid.textContent = myLib[i].id;
        bookid.style.display = "none";

        bookread.addEventListener("click", () => {
            if (bookread.textContent == "read") {
                bookread.textContent = "not read"
            }
            else if (bookread.textContent == "not read") {
                bookread.textContent = "read"
            }
        })

        const remove = document.createElement("div")
        remove.textContent = "Delete"
        remove.classList.add("remove")

        remove.addEventListener("click", () => {
            cardd.remove();
            myLibrary = myLibrary.filter(elem => elem.id !== myLib[i].id) // change the main Library itself
            console.log(myLibrary)
        })

        cardd.appendChild(bookname);
        cardd.appendChild(bookauthor);
        cardd.appendChild(bookpages)
        cardd.appendChild(bookread)
        cardd.appendChild(remove)

        document.body.appendChild(cardd);
    }
}

console.log(myLibrary);
const newbook = document.body.querySelector("#newbook");
const newbookform = document.body.querySelector("#newbookform")
newbook.addEventListener("click", () => {
    newbookform.style.display = "block";
})

newbookform.addEventListener("submit", () => {
    event.preventDefault();
    const formbookname = document.body.querySelector("#formbookname").value
    const authorname = document.body.querySelector("#authorname").value
    const noofpages = document.body.querySelector("#noofpages").value
    const status = document.body.querySelector("#status").value

    addBookToLibrary(formbookname, authorname, noofpages, status, 1);
    console.log(myLibrary)
    display(myLibrary);
    newbookform.reset();
    newbookform.style.display = "none";
})

display(myLibrary);




















// const obj = {
//     hello: "good morning!",
//     what: function () {
//         console.log("hello guys, this is what")
//     }
// }

// // const varian = "hello"
// // console.log(obj[varian])
// // console.log(obj.what)

// const one = {
//     namee: "tom",
//     val: "X"
// }
// const two = {
//     namee: "angela",
//     val: "O"
// }


// function Game(winner) {
//     console.log(`Congrats! , ${winner.namee} for winning the game with ${winner.val} `)
// }

// Game(two)