//Посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 78, 92, 17, 120];

// *** 1 вариант ***

// 2. сделать переменную total до цикла
// let total = 0;
 
// 1. перебрать массив
// for (let index = 0; index < cart.length; index+=1) {
//   console.log(cart[index]);
  // 3. каждый элемент приплюсовать к total
//   total += cart[index];
// }

// console.log('Total:', total);

// *** 2 вариант ***

// for (const value of cart) {
//     total += value;
// }

// console.log('Total:', total);



// Написать скрипт который подсчитает сумму всех четных чисел в массиве.

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// *** 1 вариант ***

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
//     if (numbers[i] % 2 === 0) {
//         total+=numbers[i];
//     }
// }
// console.log('Total:', total);

// *** 2 вариант ***

// for (const number of numbers) {
//      if (number % 2 === 0) {
//          total += number;
//     }
// }
// console.log("Total:", total);



/* Напиши скрипт поиска логина.
* - Если логина нет , вывести сообщение 'Пользователь [логин] не найден.'
* - Если нашли логина, вывести сообщение 'Пользователь [логин] найден.'
*/

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';


// *** 1 вариант ***

// for (let i = 0; i < logins.length; i++){
    // console.log(logins[i]);
//     if (logins[i] === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break
//     }
//     message = `Пользователь ${loginToFind} не найден.`;
// }
// console.log(message);

// *** 2 вариант ***

// let message = `Пользователь ${loginToFind} не найден.`;

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break
//     }
// }
// console.log(message);

// *** 3 вариант ***

// console.log(logins.includes(loginToFind));

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;
  
// console.log(message);

// Напиши скрипт поиска самого маленького числа в массиве,
// при условии что числа уникальные (не повторяются)

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallNumber = numbers[0];

// for (const number of numbers) {
//     // console.log(number);

//     if (number < smallNumber) {
//         smallNumber = number;
//     }
// }
// console.log(smallNumber);


/* Напиши скрипт, который обьединяет все элементы массива в одно строковое знасение. 
* Элементов может быть произвольное количество. 
* Пусть элементы массива в строке будут разделены запетой. 
*/

// *** 1 вариант ***

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
//  for (const friend of friends) {
//      string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// *** 2 вариант ***

// const string = friends.join(',  ');
// console.log(string);


/* 
Напиши скрипт который заменяет регистр каждого символа в строке на противоположный. 
* Например , если строка 'JavaScript' то на выходе должно быть 'jAVAsCRIPT'
*/

// *** 1 вариант ***

// const string = 'JavaScript';

// const letters = string.split('');
// let newString = '';
// console.log(string);
// console.log(letters);

// for (const letter of letters) {
//     if (letter === letter.toLowerCase()) {
//         newString += letter.toUpperCase();
//     } else {
//         newString += letter.toLowerCase();
//     }
        
// }
// console.log(newString);

// *** 2 вариант ***

// const string = "JavaScript";
// const letters = string.split('');

// let newString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     newString +=
//       letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
// }

//     console.log(newString);


/*
Делаем slug в URL из названия статьи (например на dev.to)
* Заголовок статьи состоит только из букв и пробелов

*/


// Должно получится top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';


// *** 1 вариант ***

// let normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');
// console.log(slug);
// console.log(words);
// console.log(normalizedTitle);

// *** 2 вариант ***

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);


/*

Напиши скрипт который считает сумму элементов двух массивоа
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// console.log(numbers);

// for (const number of numbers) {
//     total += number;
// }
// console.log(total);

/*

Работаем с коллекцией карточек в trello
- метод splice()
- удалить
- добавить
- обновить
*/

// const cards = [
//     "Карточка-1",
//     "Карточка-2",
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
    
// ];

// удалить

// const cardToRemove = "Карточка-3";
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);


//- добавить

// const cardToInsert = "Карточка-6";
// const index1 = 3;
// cards.splice(index1, 0, cardToInsert);



//- обновить

// const cardToUpdate = "Карточка-4";
// const index2 = cards.indexOf(cardToUpdate)
// cards.splice(index2, 1, 'Обновленная карточка-4')

// console.table(cards);



/* 1
Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое всех чисел.
*/

// const numbers = [1, 2, 3, 4, 5];

// const getSum = (numbers)=> {
//     const sum = numbers.reduce((acc, number) => acc + number, 0);
//     return sum / numbers.length;
// }
// console.log(getSum(numbers));

/* 2
Напишите функцию, которая принимает массив строк и возвращает массив строк в верхнем регистре.
*/

// const words = ["apple", "banana", "peach"];

// const updateWords = function (words) {
//     return words.map((element) => element.toUpperCase())
    
// }
// console.log(updateWords(words));

/* 3
Напишите функцию, которая принимает массив строк и возвращает количество уникальных слов в массиве.

*/

// const words = ["apple", "banana", "Apple", "PEACH", "peach"];
// const getWords = function (words) {
// const newWords= new Set()

// for (const word of words) {
//     newWords.add(word.toLowerCase())
//     }
//     return newWords
// }
// console.log(getWords(words));
/* 4
Найти максимальное и минимальное значение в массиве.

*/

// const arr = [1, 2, 3, 4, 5];

// const findMaxNumber = function (arr) {
//     let maxNumber = numbers[0];

//     for (const number of arr) {
//         if (number > maxNumber) {
//             maxNumber = number;
//         }
//     }

//     return maxNumber
// }
// console.log(findMaxNumber(arr));

// const findMinNumber = function (arr) {
//   let minNumber = numbers[0];

//   for (const number of arr) {
//     if (number < minNumber) {
//       minNumber = number;
//     }
//   }

//   return minNumber;
// };
// console.log(findMinNumber(arr));

//Создайте функцию, которая принимает два массива и возвращает новый массив, состоящий из элементов, которые есть только в одном из массивов, но не в обоих.
// const array = [1, 2, 3, 4, 5];
// const array2 = [5, 8, 2, 1, 6];

// const sumArray = function (array, array2) {
//     const newArray = array.filter((element) => !array2.includes(element))
//     const newArray2 = array2.filter((element) => !array.includes(element))
//     return [...newArray, ...newArray2]
// }
// console.log(sumArray(array,array2));

//Напишите функцию, которая принимает массив объектов, каждый объект содержит информацию о человеке (имя и возраст), и возвращает массив имен людей, возраст которых больше 30, отсортированный в алфавитном порядке.

// const people = [
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
//   { name: "Dave", age: 40 },
//   { name: "Alice", age: 30 },
// ];

// const createFoo = function (people) {
//     return people.filter((people) => people.age >= 30).map((people) => people.name).sort()
    
// }
// console.log(createFoo(people));



// 1)Напишите функцию, которая принимает массив объектов, каждый объект содержит информацию о человеке (имя и возраст), и возвращает новый массив, состоящий только из имен людей.

// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
//   { name: "Dave", age: 40 }
// ];

// function createArr(people) {
//   return people.map((people)=>people.name)
// }
// console.log(createArr(people));

//2) Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только объекты с максимальным значением ключа price:

// const arr = [
//   { name: "Book", price: 10 },
//   { name: "Pen", price: 2 },
//   { name: "Notebook", price: 5 },
//   { name: "Pencil", price: 10 },
// ];

// function MaxKey(arr) {
  // return arr.reduce((prev, cur)=> prev < cur ? prev : cur);
// }
// console.log(MaxKey(arr));

// 3) Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий объекты, отсортированные по возрастанию значения ключа age:

// const arr = [
//   { name: "John", age: 25 },
//   { name: "Mary", age: 20 },
//   { name: "Alex", age: 30 },
// ];

// function sortArr(arr) {
//   let newArr = arr.sort(
//       (firstPeople, secondPeople) => firstPeople.age - secondPeople.age
//     );
//   return newArr;
// }
// console.log(sortArr(arr));

// 4) Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий объекты, у которых длина значения ключа name больше 5 символов и значение ключа age больше 20:

// const arr = [
//   { name: "John", age: 25 },
//   { name: "Mary", age: 20 },
//   { name: "Alexander", age: 30 },
// ];

// function checkArr (arr) {
//   return arr.filter((arr) =>
//     arr.age > 20 && arr.name.length > 5);
// }
// console.log(checkArr(arr));

//******* */ Напишите функцию, которая принимает массив объектов и возвращает новый массив объектов, содержащий информацию о студентах, отсортированных по возрастанию среднего балла.

// const students = [
//   { name: "Alice", grades: [5, 4, 5, 3, 5] },
//   { name: "Bob", grades: [4, 3, 4, 5, 2] },
//   { name: "Charlie", grades: [3, 2, 5, 4, 3] },
//   { name: "David", grades: [5, 5, 4, 5, 4] },
// ];

// function averagePoint(students) {
//   return students.sort((a, b) => {
//     const averageA = a.grades.reduce((acc, velue) => (acc + velue) / a.grades.length, 0)
//     console.log(averageA);

//     const averageB = b.grades.reduce(
//       (acc, velue) => (acc + velue) / b.grades.length,
//       0);
//     return averageA - averageB
//   })
// }
// console.log(averagePoint(students));

// function getSumGrades(students) {
//   let newStudents = students.map(({ grades }) => {
//     grades.reduce((acc, grade) => {
//       gradesCounter++;
//       return acc + grade;
//     }, 0);
//   });
  // return newStudents.reduce((acc, grade) => acc + grade) / gradesCounter;
// }
// console.log(getSumGrades(students));


// 2Напишите функцию, которая принимает два массива объектов и возвращает новый массив объектов, содержащий информацию о студентах, которые есть только в первом массиве объектов, но не во втором.

// const students1 = [
//   { name: "Alice", grade: "A" },
//   { name: "Bob", grade: "B" },
//   { name: "Charlie", grade: "C" },
//   { name: "David", grade: "D" },
// ];

// const students2 = [
//   { name: "Charlie", grade: "B" },
//   { name: "David", grade: "C" },
//   { name: "Eve", grade: "A" },
// ];

// function user (students1, students2) {
//   return students1.filter((students1) => !students2.some(students2 => students1.name === students2.name) );
  
// }
// console.log(user(students1,students2));

//3Напишите функцию, которая принимает массив объектов и возвращает новый массив объектов, содержащий информацию о тех студентах, у которых есть оценка "A" и у которых длина имени больше 4 символов.

// const students = [
//   { name: "Alice", grade: "A" },
//   { name: "Bob", grade: "B" },
//   { name: "Charlie", grade: "C" },
//   { name: "David", grade: "D" },
//   { name: "Eve", grade: "A" },
//   { name: "Frank", grade: "B" },
// ];

// function getArr(students) {
//   return students.filter((students) => students.grade === 'A' && students.name.length > 4)
// }
// console.log(getArr(students));

// Напишите функцию, которая принимает массив объектов и возвращает новый массив объектов, содержащий информацию о студентах, у которых есть оценка "A" и которые не имеют других оценок кроме "A".

// const students = [
//   { name: "Alice", grades: ["A"] },
//   { name: "Bob", grades: ["B", "A"] },
//   { name: "Charlie", grades: ["C", "A"] },
//   { name: "David", grades: ["A", "A"] },
//   { name: "Eve", grades: ["A", "B"] },
//   { name: "Frank", grades: ["A", "C"] },
// ];

// function getArr(students) {
//   const newStudents = students.filter((students) => {
//     return students.grades.every((a) => a === 'A')
//   })
//   return newStudents
// }

// console.log(getArr(students));


// // Получить новый массив, содержащий только первые два элемента исходного массива
// let user = [1, 2, 3, 4, 5]

// const newArr = user.slice(0, 2);
// console.log(newArr);

// Удалить элемент с индексом 2 из массива

// const user = ["red", "green", "blue", "yellow"]

// const newUser = user.splice(2,1);
// console.log(newUser);


// Найти индекс первого элемента, который начинается со строки "co" в массиве строк
// const user = ["dog", "cat", "cow", "chicken"]

// const newUser = user.findIndex((index) => index.startsWith('co'))
// console.log(newUser);

// Напишите функцию, которая принимает массив и возвращает новый массив, где каждый элемент умножен на свой индекс.

// const arr = [1, 2, 3, 4, 5];

// function newArr(arr) {
//  return arr.map((arr, index) => arr * index);
  
// }
// console.log(newArr(arr));

// Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий элементы первого массива, которые не встречаются во втором массиве.

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// function newArr(arr1, arr2) {
//  return arr1.filter((arr1) => !arr2.includes(arr1))
// }
// console.log(newArr(arr1, arr2));

// 1)Напишите функцию, которая принимает массив и возвращает новый массив, содержащий все уникальные элементы из исходного массива в порядке их появления.

// const arr = [1, 2, 3, 2, 4, 3];


// function unigue(arr) {
//   const getArr = new Set()

//   for (const num of arr) {
//     getArr.add(num)
//   }
//   return getArr
// }

// console.log(unigue(arr));

// 3) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий среднее арифметическое каждого элемента с предыдущим и следующим элементами.

// const arr = [1, 2, 3, 4, 5];

// function averageNum(arr) {
//  return arr.map((prev, cur) => (prev + cur) / 2)
// }
// console.log(averageNum(arr));

// 4) Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий все элементы обоих массивов без повторений.

// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];
// function newArr(arr1, arr2) {
//   let array = arr1.concat(arr2)
//   let getArr = [...new Set(array)]
//   return getArr
// }
// console.log(newArr(arr1, arr2));

// 5) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше или равны среднему арифметическому всех элементов.

// const arr = [1, 2, 3, 4, 5];

// function getArr(arr) {
//   const sum = arr.reduce((acc, arr) => acc + arr, 0) / arr.length;
//   let num = arr.filter((arr) => arr >= sum)
//   return num
// }
// console.log(getArr(arr));



// 6) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий сумму каждого элемента с предыдущим элементом.

// const arr = [1, 2, 3, 4, 5];
// function sumEl(arr) {
//   let sum = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] + arr[i - 1]) {
//      sum.push(arr[i] + arr[i - 1])
//    }
  
//   }
//    return sum;
// }
// console.log(sumEl(arr));

//************************************************************ */

// Напишіть ф-цію яка створює новий масив елементів, що становить суму відповідних елементів заданих масивів.

// let arr1 = [1, 2, 3, 4, 5,];
// let arr2 = [4, 5, 6];

// function getSum (arr1, arr2) {
//   let newArr = [];
//   const longesArr = arr1.length > arr2.length ? arr1 : arr2;

//   for (let i = 0; i < longesArr.length; i++) {
//     const a = arr1[i] || 0;
//     const b = arr2[i] || 0;

//     newArr.push(a + b);
    
//   }
//   return newArr
// }
// console.log(getSum(arr1, arr2));

// Потрібно отримати масив імен студентів та записати їх великими літерами.

// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const newArr = studentRecords.map((studentRecords) => studentRecords.name.toUpperCase());
// console.log(newArr);
 
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const newArr = studentRecords.filter((studentRecords) => studentRecords.marks > 50)
// console.log(newArr);

// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const sumMarks = studentRecords.reduce((acc, {marks}) => acc + marks, 0)
// console.log(sumMarks);


// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const newArr = studentRecords.filter((studentRecords) => studentRecords.marks > 50).map((studentRecords) => studentRecords.name)
// console.log(newArr);


// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const newArr = studentRecords.filter((studentRecords) => studentRecords.id > 120).reduce((acc, {marks}) => acc + marks, 0)

// console.log(newArr);

// Використовуючи метод map напишіть код , який отримує з масиву рядків новий масив, що містить їх довжину

// const vegetables = ["Капуста", "Репа", "Редиска", "Морква"];
// const newVegetable = vegetables.map((vegetables) => vegetables.length);
// console.log(newVegetable);

// Перед вами змінна що містить рядок.Напишіть код, який створює масив, який складаеться з перших літер слів рядка

// const str = "Каждый охотник желает знать, где сидит фасан.";
// let arr = str.split(' ').map((str) => str[0])

// console.log(arr);

///////////////////////////////////////////////



// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// let arr = studentRecords.map((student) => {
//   if (student.marks < 50) {
//     student.marks += 15
//   }
//   return student
// }).filter(({marks}) => marks > 50).reduce((acc, {marks}) => acc + marks, 0 )

// console.log(arr);

//////////////////////////////////////////////////

// Напишіть функцію myMap(array, callback), яка першим параметром приймає масив, а другим - функція , яка застосовується до кожного елемента масиву.
// Функція коллбек збільшуе елемент на 2
// Функція myMap повинна повернути новий масив , елементи якого будуть результати виклику коллбека.

// const numbers = [64, 49, 36, 25, 16];

// const result = numbers.map((numbers) => numbers * 2)

// const myMap = (array, callback) => {
//   const newArray = [];
//   array.forEach(el => {
//     newArray.push(callback(el))
//   })
//   return newArray
// }

// function foo(velue) {
//   return velue*2
// }
// console.log(myMap(numbers,foo));

//////////////////////////////////////////////////

// Виконати сортування масиву обєктів не змінюючи вихідний масив.
//- за зростанням та зменшенням значення price
//- та імя в алфавітньому та зворотньому напрямку

// const items = [
//   { name: "Samsung", price: 2000 },
//   { name: "Asus", price: 2500 },
//   { name: "LG", price: 1900 },
//   { name: "Dell", price: 1200 },
//   { name: "BenQ", price: 900 },
// ];

// const sortItem = [...items].sort((a, b) => a.price - b.price);
// const sortItem1 = [...items].sort((a, b) => b.price - a.price);

// const sortName = [...items].sort((a, b) => a.name.localeCompare(b.name));
// const sortName1 = [...items].sort((a, b) => b.name.localeCompare(a.name));

// console.log(sortItem);
// console.log(sortItem1);
// console.log(sortName);
// console.log(sortName1);