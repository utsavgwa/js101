class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }

    addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks() {
        console.log(`Favorite Books: ${this.favoriteBooks.length}`);
        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }
}

function addFavoriteBook(bookName) {
	if (!bookName.includes("Great")) {
		favoriteBooks.push(bookName);
	}
}

function printFavoriteBooks() {
	console.log(`Favorite Books: ${favoriteBooks.length}`);
	for (let bookName of favoriteBooks) {
		console.log(bookName);
	}
}

function loadBooks(bookshelf) {
	fakeAjax(BOOK_API,function onBooks(bookNames){
		for (let bookName of bookNames) {
			bookshelf.addFavoriteBook(bookName);
		}
		bookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();
loadBooks(myBooks);

function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
