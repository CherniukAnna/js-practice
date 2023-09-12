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
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(bookTitle) {
    const index = this.books.indexOf((book) => book.title === bookTitle);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Delete book`);
    } else {
      console.log(`Not deleted book`);
    }
    }


    
  listBooks() {
    console.log("Список книг на полці:");
    this.books.forEach((book) => {
      console.log(`- ${book.title} (Автор: ${book.author})`);
    });
  }
}

// Приклад використання класу "Книжна полка"
const myBookshelf = new Bookshelf();

// Додати книги на полку
myBookshelf.addBook({ title: "Книга 1", author: "Автор 1" });
myBookshelf.addBook({ title: "Книга 2", author: "Автор 2" });
myBookshelf.addBook({ title: "Книга 3", author: "Автор 3" });

// Відобразити список книг на полці
myBookshelf.listBooks();

// Видалити книгу з полки
myBookshelf.removeBook("Книга 2");

// Перевірити список книг після видалення
myBookshelf.listBooks();

