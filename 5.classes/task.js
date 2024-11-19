// Task-1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate; // дата выпуска
        this.pagesCount = pagesCount; //кол-во страниц
        this.state = 100; //состояние книг
        this.type = null;
    } 
    
    fix() {
        this.state *= 1.5;
    }

    setState(state) {
        if(state < 0) {
            this.state = 0;
        } else if(state > 100) {
            this.state = 100;
        } else {
            this.state = state;
        }
    }

    getState() {
        return this.state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, author) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}




// Task-2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(state > 30) {
            books.push(book)
        }
    }

    findBookBy(type, value) {
        this.books.filter(book => {
            return book[type] == value
        }) 

        

    }

    giveBookByName(bookName) {

    }
}
    

// Task-3