//Дан объект books со свойствами, содержащими информацию о книгах. Напишите функцию, которая возвращает массив названий всех книг.
// const products = {
//   product1: { name: 'Apple', price: 1.5 },
//   product2: { name: 'Banana', price: 0.5 },
//   product3: { name: 'Orange', price: 2 }
// };

// function newArr(arry) {
//    return arry.map(arry => arry.name)
// }
// const arry = Object.values(products)
// console.log(newArr(arry));

//**************************** */

//Дан объект users со свойствами, содержащими информацию о пользователях. Напишите функцию, которая возвращает массив имен пользователей, у которых возраст больше 25.
// const users = {
//   user1: { name: 'John', age: 30 },
//   user2: { name: 'Jane', age: 22 },
//   user3: { name: 'Bob', age: 27 }
// };

// const newUser = Object.values(users)

// function foo(newUser) {
//     return newUser.filter(newUser => newUser.age > 25).map( newUser => newUser.name)

// }
// console.log(foo(newUser));

//*********************************** */

//Напишите функцию, которая принимает массив объектов студентов и возвращает средний возраст студентов мужского пола.
// const students = [
//   { name: "John", age: 20, gender: "male" },
//   { name: "Jane", age: 22, gender: "female" },
//   { name: "Bob", age: 21, gender: "male" },
// ];

// function sum (students) {
//     return students.filter(students => students.gender === "male").reduce((acc, students) => acc + students.age, 0) / students.length
// }
// console.log(sum(students));

//*********************************** */

//Напишите функцию, которая принимает на вход строку и возвращает количество гласных букв в этой строке.

// function newVowels(str) {
//     const vowels = "aeiou";
//     const lowerCasuStr = str.toLowerCase()
//     let counter = 0
//     for (let char of lowerCasuStr) {
//         if (vowels.includes(char)) {
//             counter ++
//         }

//     }

//     return counter
// }
// console.log(newVowels("Hello everybody"));
//
//******************************* */

// Фильтрация

//     const filterInput = document.querySelector('#filterInput');
//     const list = document.querySelector('#list');
//     const items = document.querySelectorAll('li');

//     filterInput.addEventListener('input', filterItems);

//     function filterItems(element) {
//       let filterValue = element.target.value.toLowerCase();

//       for (let i = 0; i < items.length; i++) {
//         let item = items[i];
//         let text = item.innerText.toLowerCase();
//         if (text.indexOf(filterValue) > -1) {
//           item.style.display = '';
//         } else {
//           item.style.display = 'none';
//         }
//       }
// }

//********************** */

//Найти среднее значение всех положительных чисел в массиве.
// const array = [-1, 2, -3, 4, -5, 6];

// const sumNumber = (array) => array.filter((array) => array > 0).reduce((acc, n) => acc + n, 0)
// console.log(sumNumber(array));

//*********************** */

//Подсчитать сумму квадратов положительных чисел в массиве.
// const numbers = [2, -3, 5, -1, 0, 4];

// const sumSque = (numbers) => numbers.filter((numbers) => numbers > 0).map((numbers) => numbers * numbers).reduce((acc, n) => acc + n, 0 )
// console.log(sumSque(numbers));
//********************************* */
// Найти сумму значений числовых свойств объекта, преобразованного в массив, и вернуть общую сумму.
// const elem = { a: 5, b: 10, c: 3, d: 'hello', e: 7 };

// const elemNew = Object.values(elem).filter((elemNew) => typeof (elemNew) === "number").reduce((acc, n) => acc + n, 0)
// console.log(elemNew);
// //************************************* */
// Преобразовать значения объекта в строки и объединить их в одну строку с разделителем.
// const obj = { a: 10, b: 20, c: 30 };

// const newObj = Object.values(obj).join('/')
// console.log(newObj);
//************************

//Посчитать сумму всех чисел вложенных массивов.
// const numbers = [[1, 2], [3, 4], [5, 6]];
// const arr = numbers.flat().reduce((acc, n) => acc + n, 0)
// console.log(arr);

//Создать новый массив, содержащий только первые буквы каждого элемента исходного массива.
// const words = ['apple', 'orange', 'banana', 'grape'];
// const char = words.map((words) => words[0])
// console.log(char);
//**************************** */
//У вас есть два массива

//Оставьте в этих массивах только числа и возведите эти числа во вторую степень
// const words = ["Hello", "world", 25, 50, "this", "is", "JavaScript"];
// const numbers = [10, 5, 20, 15, 30];
// const arr = [...words, ...numbers].filter((arr) => typeof(arr) === "number").map((arr) => arr * 2)
// console.log(arr);
//********************** */

// Найти наибольшее и наименьшее число в массиве.
// const numbers = [10, 5, 20, 15, 30];
// const minNumber = Math.min(...numbers)
// console.log(minNumber);

// const numbers = [10, 5, 20, 15, 30];
// const maxNumber = Math.max(...numbers)
// console.log(maxNumber);

//************************** */

//Преобразовать значения объекта в новый объект, где значения станут ключами, а ключи - значениями.
// const obj = { a: 'apple', b: 'banana', c: 'cherry' };
// const newObj = {}

// for (const key in obj) {
//   const value = obj[key]
//   newObj[value] = key
// }
// console.log(newObj);

//*************************** */

//Проверить, является ли массив упорядоченным по возрастанию.
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, 3, 2, 4, 5];

// function orderNum(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return false
//     }
//   }
//   return true
// }

// console.log(orderNum(array1));
// console.log(orderNum(array2));

//******************* */

//Найти наибольшую разницу между двумя элементами массива, где меньший элемент находится перед большим элементом.
// const array = [7, 2, 5, 3, 7, 1, 6];

// function maxNum(array) {
//   let maxNumArr = array[0]
//   let minNumArr = 0

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < maxNumArr) {
//       maxNumArr = array[i]
//     } else if (array[i] - maxNumArr > minNumArr) {
//       minNumArr = array[i] - maxNumArr
//       console.log(minNumArr);
//     }

//   }
//   return minNumArr
// }
// console.log(maxNum(array));

///****************** */

// const array = [7, 2, 5, 3, 7, 1, 6];
// function curNum(array) {
//   let minEl = Math.min(...array)

//   return array.reduce((acc, n) => {
//     if (n - minEl > acc) {
//       return n - minEl
//     }
//     return acc
//   }, 0)

// }

// console.log(curNum(array));

//********************** */

//Удалить дубликаты из заданного массива, не используя встроенные методы массива
//Можно использовать метод push
// const array = [1, 2, 3, 3, 4, 4, 5];

// function push(array) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!newArr.includes(array[i])) {
//       newArr.push(array[i])
//     }

//   }
// return newArr;
// }
// console.log(push(array));

// function push(array) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (newArr.indexOf(array[i]) === -1) {
//       newArr.push(array[i])
//     }

//   }
// return newArr;
// }
// console.log(push(array));

//*********************
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Найти наибольшую сумму подмассива в заданном массиве чисел.
// const array = [1, -2, 3, 4, -1, 2, -3, 5];

//********************* */

// const array = [1, -2, 3, 4, -1, 2, -3, 5];
// const newArr = []
// const arr1 = array.slice(0, 2)
// const arr2 = array.slice(3, 5)
// const arr3 = array.slice(6, 7)

// newArr.push(arr1, arr2, arr3)
// console.log(newArr);

//************************ */

//напиши функцию которая разделяет массив на три подмассива и возвращает новый массив в котором. 3 массива

// function divide(array) {
//   const array = [2, 9, 5, 1, 8, 4, 6, 8, 2];
//   const lengthArr = array.length;
//   const divideArr = Math.floor(lengthArr / 3);

//   return divideArr;
// }

// console.log(divide(array));
// const array = [2, 9, 5, 1, 8, 4, 6, 8, 2];
// function newArr(array) {
//     const chankSize = Math.ceil(array.length / 3)
//     const subArrays = []

//     for (let i = 0; i < array.length; i+= chankSize) {
//         const sumArray = array.slice(i, i + chankSize)
//         subArrays.push(sumArray)

//     }
//     return subArrays
// }

// console.log(newArr(array));

//******************** */

//Найти наибольшую сумму подмассива в заданном массиве чисел.
// const array = [1, -2, 3, 4, -1, 2, -3, 5];

// const newArray = []
// const maxArr = 0
// const arr1 = array.slice(0, 3)
// const arr2 = array.slice(3, 6)
// const arr3 = array.slice(6, 8)

// newArray.push(arr1, arr2, arr3)

// const sum1 = arr1.map((arr) => arr).reduce((acc, n) => acc + n, 0)

// const sum2 = arr2.map((arr) => arr).reduce((acc, n) => acc + n, 0);
// const sum3 = arr3.map((arr) => arr).reduce((acc, n) => acc + n, 0);

// const maxSum = Math.max(sum1, sum2, sum3)

// console.log(maxSum);

//******************************* */
// Найти наиболее часто встречающийся элемент в массиве.
// const numbers = [1, 2, 3, 2, 4, 2, 5, 2, 6];
// function maxPopular(numbers) {
//     const counterObj = numbers.reduce((acc, n) => {
//         acc[n] = (acc[n] || 0) + 1;
//         return acc
//     }, {})

//     const element = Object.keys(counterObj).reduce((acc, n) => {
//         if (counterObj[n] > counterObj[acc]) {
//             return n
//         }
//         return acc
//     })
//     return element

// }
// console.log(maxPopular(numbers));

//************************ */

// Посчитать сумму всех значений числовых свойств объекта.
// const obj = { a: 10, b: 20, c: 30 };
// const sumValue = Object.values(obj).reduce((acc, n) => acc + n, 0)

// console.log(sumValue);

//***************************** */

//Задача:Преобразовать значения объекта в строки и объединить их в одну строку с разделителем.
// const obj = { a: 10, b: 20, c: 30 };
// const newObj = Object.values(obj).join('-')

// console.log(newObj);

//********************************* */

//Задача: Найти среднее значение всех числовых свойств объекта.
// const obj = { a: 10, b: 20, c: 30, d: "David" };

// const newObj = Object.values(obj).filter(value => typeof (value) === "number")

//     const newObj2 = newObj.reduce((acc, n) => acc + n, 0) / newObj.length

// console.log(newObj2);

//******************************** */

//Напишите функцию где при одном клике цвет красный а при двойном клике цвет синий

// const btnEl = document.querySelector('.btn')

// btnEl.addEventListener("dblclick", changeColor);

// function changeColor(event) {
//     if (event.type === 'click') {
//         btnEl.style.backgroundColor = 'red'
//     } else if (event.type === 'dblclick') {
//       btnEl.style.backgroundColor = "blue";
//     }
// }

//btnEl.addEventListener("click", changeColor);

// const clickEl = document.querySelector('.ntn-click')
// function dblClick(event) {
//     event.preventDefault()
//     if (event.type === "dblclick") {
//       btnEl.style.backgroundColor = "blue";
//       console.log("2");
//     } else if (event.type === "click") {
//       btnEl.style.backgroundColor = "red";
//       console.log("1");
//     }

// }

// clickEl.addEventListener('click', dblClick)

//**************************** */

//Напишите функцию, которая будет отслеживать изменение значения текстового поля и выводить его в консоль.
//

// const input = document.querySelector(".input");

// input.addEventListener("input", () => {
//   console.log("Input value:", input.value);
// });

//***************************** */
//Проверка изменения состояния флажка

// const checkbox = document.getElementById("check");

// checkbox.addEventListener("change", function () {
//   if (this.checked) {
//     console.log("on");
//   } else {
//     console.log("off");
//   }
// });

//**************************** */

//Переключение видимости пароля
//Напишите функцию, которая будет отслеживать изменение чекбокса "Показать пароль" и изменять тип поля ввода с паролем на обычное текстовое поле или наоборот.

// const showPassword = document.querySelector('#show')
// const password = document.querySelector("#password")

// showPassword.addEventListener("change", function () {
//   if (showPassword.checked) {
//     password.type = "text"
//   } else {
//     password.type = "password"
//   }
// })

//***************************** */

//Подсказка по вводу
//Напишите функцию, которая будет отслеживать введенный текст в поле ввода и предлагать подсказки или автозаполнение на основе уже введенных значений.

// const things = ["shorts", "shoes", "boots", "tie", "glasses", "hat"];

// const input = document.querySelector("#clue");
// const listEl = document.querySelector(".list");

// input.addEventListener("input", function () {
//   let inputText = input.value.toLowerCase();
//   const thingsFilter = things.filter((element) =>
//     element.toLowerCase().startsWith(inputText)
//   );

//   render(thingsFilter);
// });
// console.log(input);
// console.log(listEl);

// function render(things) {
//     if (input.value === '') {
//         listEl.innerHTML = "";
//         return
//     }
    
//   listEl.innerHTML = '';
//   things.forEach((element) => {
//     const li = document.createElement("li");
//     li.textContent = element;
//     li.addEventListener("click", () => {
//       input.value = element;
//         listEl.innerHTML = '';
//     });
//       listEl.appendChild(li);
      
//   });
// }

////************************* */

// const divEl = document.querySelector('.anime')

// window.addEventListener('scroll', () => {
//     const windowHeight = window.innerHeight;
//     // console.log(windowHeight);
//     const scrollY = window.scrollY;
//     // console.log(scrollY);
//     const scrolldivEl = divEl.offsetTop;
//     console.log(scrolldivEl);
    
//     if (scrollY + windowHeight > scrolldivEl) {
//         divEl.style.opacity = 1
//     }
// })


//**************************** */
//Отслеживание загрузки страницы

// window.addEventListener('load', () => {
//     console.log(" страница загруженая");
// })

//************************* */

//Фильтрация и сортировка массива объектов
//В этом примере есть массив объектов users, представляющий пользователей с именем и возрастом. При вводе текста в поле фильтра (filterInput) будет осуществляться фильтрация пользователей по имени. При нажатии кнопки "Сортировка по возрасту" (sortButton) пользователи будут отсортированы по возрасту в возрастающем порядке. Отфильтрованные и отсортированные пользователи будут отображаться в списке (userList).
//<input type="text" id="filterInput" placeholder="Фильтр по имени">
//<button id="sortButton">Сортировка по возрасту</button>
//<ul id="userList"></ul>

// const users = [
//   new User("John", 30),
//   new User("Alice", 25),
//   new User("Bob", 35),
//   new User("Emily", 28),
//   new User("David", 32),
// ];



// function User (name, age) {
//     this.name = name;
//     this.age = age;
// }

// function displayUsers(users) {
// const userList = document.querySelector('#userList');
// userList.innerHTML = '';
    
// for (let user of users) {
// const li = document.createElement('li');
// li.innerText = `${user.name}, ${user.age}`;
// userList.appendChild(li);
// }
// }

// function filterUsers() {
// const filterInput = document.querySelector('#filterInput');
// const filter = users.filter(user => user.name.toLowerCase().includes(filterInput.value.toLowerCase()));
// displayUsers(filter);
// }

// function sortUsersAge() {
// const sortedUsers = users.slice().sort((a, b) => a.age - b.age);
// displayUsers(sortedUsers);
// }

// const sortButton = document.querySelector('#sortButton');
// sortButton.addEventListener('click', sortUsersAge);

// filterInput.addEventListener('input', filterUsers);

// displayUsers(users);


//************************** */

// const inputProd = document.querySelector("#product");
// const inputPrice = document.querySelector("#price");
// const btnEl = document.querySelector(".call");
// const textEl = document.querySelector(".totol-price");

// btnEl.addEventListener("click", () => {
//     const valueProd = parseInt(inputProd.value);
//     const valuePrice = parseFloat(inputPrice.value);
//     if (isNaN(valueProd) || isNaN(valuePrice)) {
//         textEl.textContent = "Error"
//     } else {
//         const result = valueProd * valuePrice;
//         textEl.textContent = result
//     }
// })

//**************************** */

// const inputTask = document.querySelector("#input-task")
// const bntTask = document.querySelector("#btn-task")
// const listEl = document.querySelector(".task-list")

// bntTask.addEventListener("click", () => {
//     const valueInp = inputTask.value;
    
//     if (valueInp.trim() !== "") {
//         const li = document.createElement(`li`)
//         li.textContent = valueInp;
//         listEl.appendChild(li)
//         inputTask.value = ""
//     }

// })
    

//************************** */
