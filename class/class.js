// Добавить метод в класс "Человек" для вывода информации о человеке в консоль:

class Person{
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    infoUser() {
        console.log(`${this.firstname}, ${this.lastname}, ${this.age}`);
    }
}

const person1 = new Person('Anna' , 'Cherniuk', '33')
person1.infoUser()


//Создать класс "Студент" (Student), который наследует класс "Человек" и добавить дополнительные свойства (например, университет, курс):

class Student  extends Person {
    constructor(firstname, lastname, age, univercity, course) {
        super(firstname, lastname, age)
        this.univercity = univercity;
        this.console = course;
    }
    
}
const user = new Student("Anna", "Cherniuk", "33", 'KPY', 'Technology');
console.log(user);


// Задача: Создать класс "Книжная полка" (Bookshelf) для хранения книг. Реализовать методы для добавления и удаления книг, а также для отображения списка книг на полке.

class Bookshelf {
  constructor() {
    this.books = [];
    console.log(this.books);
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(title) {
   
    const index = this.books.findIndex(readed => readed.title === title);
    console.log(index);
    if (index !== -1) {
      const deleteEl = this.books.splice(index, 1);
      console.log(` Delete book: ${deleteEl.title}`);
    } else {
      console.log(`Not deleted book: ${deleteEl.title}`);
    }
    }


    
  listBooks() {
    console.log("List of books on the shelf:");
    this.books.forEach((book) => {
      console.log(` ${book.title} \n Autor: ${book.author} `);
    });
  }
}


const listBookshelf = new Bookshelf();


listBookshelf.addBook({ title: "book Green", author: "Rose Smit" });
listBookshelf.addBook({ title: "book Red", author: "Jimmy Stonler" });
listBookshelf.addBook({ title: "book Gray", author: "Stiv Winst" });
listBookshelf.addBook({ title: "book Yellowe", author: "Christy Young" });

listBookshelf.listBooks();


listBookshelf.removeBook("book Red");

listBookshelf.listBooks();

console.log(listBookshelf);
