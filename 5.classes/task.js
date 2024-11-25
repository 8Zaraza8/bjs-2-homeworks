// Task-1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate; // дата выпуска
        this.pagesCount = pagesCount; //кол-во страниц
        this.state = 100; //состояние книг
        this.type = null;
    } 
    //улучшение состояния книг
    fix() {
        this.state *= 1.5;
        if (this.state > 100) {
          this.state = 100;
        }
      }
    //контроль за состоянием книг
    set state(state) {
        if(state < 0) {
            this.stateInTheSetter = 0;
        } else if(state > 100) {
            this.stateInTheSetter = 100;
        } else {
            this.stateInTheSetter = state;
        }
    }

    get state() {
        return this.stateInTheSetter;
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
        super(name, releaseDate, pagesCount);
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
    constructor(author, name, releaseDate, pagesCount) {
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
        if(book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        for(const book of this.books) {
            if(book[type] === value) {
                return book;
            }  
        } 
        return null;
    }

    giveBookByName(bookName) {
        const findTheBook = this.books.findIndex(book => book.name === bookName);
        if(findTheBook !== -1) {
            return this.books.splice(findTheBook, 1)[0];
        } else {
            return null;
        }
    }
}

// Task-3

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subjectName) {
        if(mark < 2 || mark > 5) {
            return;
        }
        if(!this.marks[subjectName]) {
            this.marks[subjectName] = [];
        }
        this.marks[subjectName].push(mark);
    }
    
    getAverageBySubject(subjectName) {
        if(!this.marks[subjectName] || this.marks[subjectName].length === 0) {
            return 0;
        }
        const sum = this.marks[subjectName].reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks[subjectName].length; // средняя оценка
    }

    getAverage() {
        const allsubjectName = Object.keys(this.marks);
        if (allsubjectName.length === 0) {
            return 0;
          }
        const totalAverage = allsubjectName.reduce((acc, subjectName) => {
            return acc + this.getAverageBySubject(subjectName);
          }, 0);
          return totalAverage / allsubjectName.length;
    }
}
