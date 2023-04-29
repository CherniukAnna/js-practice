// Знайти перше числа, кратне 5 та його індекс

// const numbers = [1, 10, 3, 25, 5, 60, 1000, 7, 12, 9];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 5 === 0) {
//         console.log(`Перше кратне 5, ${numbers[i]} індекс елемента кратного 5: ${i}`);
//         break;
//     }
// }

// function firstEl(numbers) {
//     numbers.find((numbers) => numbers % 5 === 0)
//     return numbers.findIndex((numbers) => numbers % 5 === 0)
// }
// console.log(firstEl(numbers));


// Напишіть дві функції
// letMeSeeYourName(callback) - запитує імя користувача через prompt та викликає callback функцію greet(name) - коллбек що приймає імя і логірує в консоль Рядок "Привіт <name>" Реалізує перевірку що prompt не порожній

// const letMeSeeYourName = callback => {
//     const yourName = prompt(`Введи своє імя :`);
//     yourName.trim() && callback(yourName);
    
// };
// const greet = name => {
//     console.log(`Привіт ${name}`);
// };
// letMeSeeYourName(greet);


/* Напишіть дві функції
makeProduct(name,price, callback) -приймає імя, ціну товару а також коллбек
Функція створює обект товару, додаючи йому унікальний індефікатор як id і викликає коллбек передаючи йому створений обект.
showProduct(product) - коллбек приймаючий обект продукту і логірующий їх в консоль
*/

// const makeProduct = (name, price, callback) => {
//     const obj = {
//         name,
//         price,
//         id: Date.now(),
//     }
//     callback(obj);
// };
// const showProduct = product => {
//     console.log(product);
// }
// makeProduct('Ann', 10, showProduct)

// Создайте объект со свойством name и методом getName, который возвращает значение свойства name.
// const obj = {
//     name: "John",
//     getName: function () {
//         return this.name
//     }
// };
// console.log(obj.getName());


// Создайте объект со свойством count и методом increment, который увеличивает значение свойства count на 1 при каждом вызове.

// const obj = {
//     count: 0,
//     increment: function () {
//         this.count ++
//     }
// };

// obj.increment();
// obj.increment();
// obj.increment();
// obj.increment();
// console.log(obj.count);

// Создайте объект со свойством count и методом reset, который устанавливает значение свойства count в 0.

// const obj = {
//     count: 10,
//     reset: function () {
//         this.count = 0
//     }
// }
// obj.reset();
// console.log(obj.count);

// Создайте объект со свойством numbers (массив чисел) и методом sum, который возвращает сумму всех чисел в массиве.
  
// const obj = {
//     numbers: [1, 2, 3, 4, 5],
//     sum: function () {
//         return this.numbers.reduce((acc,numbers) => acc + numbers)
//     }
// }
// console.log(obj.sum());


// Создайте объект со свойством numbers (массив чисел) и методом multiply, который принимает число и умножает каждый элемент массива на это число.

// const obj = {
//     numbers: [1, 2, 3, 4, 5],
//     multiply: function (n) {
//         return this.numbers.map((numbers) => numbers * n)
//     }

// }
// console.log(obj.multiply(2));

// Создайте объект со свойством text и методом reverse, который возвращает обратную строку.

// const obj = {
//     text: "hello",
//     reverse: function () {
//         return this.text.split('').reverse().join('')
//     }
// }
// console.log(obj.reverse());

// Создайте объект со свойством numbers (массив чисел) и методом even, который возвращает новый массив, содержащий только четные числа из массива numbers.

// const obj = {
//     numbers: [1, 2, 3, 4, 5],
//     even: function () {
//         return this.numbers.filter((numbers) => numbers % 2 === 0)
//     }
// }
// console.log(obj.even());

// Создайте объект со свойством text и методом isPalindrome, который проверяет, является ли строка палиндромом (читается одинаково с начала и с конца).

// const obj = {
//   text: "level",
//     isPalindrome: function () {
//       return this.text.split('').reverse().join('') === this.text
//   }
// };

// console.log(obj.isPalindrome());

// Создайте объект со свойством numbers (массив чисел) и методом max, который возвращает максимальное число в массиве.

// const obj = {
//     numbers: [10, 2, 5, 8, 3],
//     max: function () {
//     return Math.max(...this.numbers)
// }
// }
// console.log(obj.max());

// Создайте объект со свойством string и методом capitalize, который возвращает строку с первой буквой в верхнем регистре.

// const obj = {
//   string: "javascript is cool",
//     capitalize: function () {
//       return this.string.charAt(0).toUpperCase()+ this.string.slice(1)
//   }
// };
// console.log(obj.capitalize());

// Создайте объект со свойством text и методом countWords, который возвращает количество слов в строке.

// const obj = {
//   text: "JavaScript is cool",
//     countWords: function () {
//       return this.text.split(' ').length
//   }
// };
// console.log(obj.countWords());


/** 
 У детей задание вспомнить порядок букв в алфавите и написать столько букв, сколько они вспомнят. Задание учителя проверить, пишут ли дети буквы в правильном порядке и не пропущена ли буква в строке. Большие буквы или маленькие значения не имеет.

Давай поможем учителю функцией isAlphabet, которая будет принимать letters и возвращать true если порядок букв совпадает с порядком в алфавите. Иначе false. 

Данную задачу необходимо решить изначально
Сначала используя for и условия 
А вторым методом перепишите задачу используя методы массива 
 
 */


// function isAlphabet(letters) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     const vowelsLetters = letters.toLowerCase()
//     for (let i = 0; i < vowelsLetters.length; i++) {
//        const corentLetterIndex = alphabet.indexOf(vowelsLetters[i])
//         if (corentLetterIndex === -1) {
//            return false
//         } if (i > 0) {
//             const prevLetter = alphabet.indexOf(vowelsLetters[i - 1])
//             if (prevLetter > corentLetterIndex) {
//                return false
//             }
//         }
    
//     }
    
//     return true;
// }
// console.log(isAlphabet('abcdghfhgf'));


// function isAlphabet(letters) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     const vowelsLetters = letters.toLowerCase();

//     const letterIndex = Array.from(vowelsLetters, letter => alphabet.indexOf(letter))
//     return letterIndex.join(' ') === letterIndex.sort().join(' ')
// }
// console.log(isAlphabet('abcd'));

//Напишите функцию которая генерирует случайный текст и выводит сгенерируемый текст в инпут

 
// function getCharacters(length) {

//     const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * characters.length));
        
//     }
//     return result
// }

// const input = document.querySelector('input')
// input.value = getCharacters(5)
// console.log(getCharacters(8));

// Напишите фунукцию которая при нажатии на кнопку генерирует пароль длинной не менее 3 символов и выводит результат в инпут

// const buttonEl = document.querySelector('#but');
// const inputEl = document.querySelector('input');

// function generatePassword() {
//     const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

//     let password = '';
//     for (let i = 0; i < 3; i++){
//         password += characters.charAt(Math.floor(Math.random() * characters.length));
//     }

//     return password
// };

// buttonEl.addEventListener('click', () => {
//     inputEl.value = generatePassword();
//     inputEl.disabled = false;
// })

// Напишите функцию которая будет выводить случайные размеры квадратов


// const boxEl = document.querySelector("#box");

// function getRandomSize(min , max) {
//     return Math.floor(Math.random() * (max - min)) + min;
    
// }
 
// console.log(getRandomSize(10, 300));

// boxEl.style.width = `${getRandomSize(50, 300)}px`;
// boxEl.style.height = `${getRandomSize(50, 300)}px`;

// const btnPlas = document.querySelector('#plas');
// const btnMim = document.querySelector('#min');
// const counter = document.querySelector('#counter');
// btnPlas.addEventListener('click', plasCounter )
// let count = 0;
// function plasCounter () {
//     count += 1
//     counter.textContent = count
// }
//  btnMim.addEventListener('click', minCounter)
// function minCounter() {
//     count -= 1;
//     if (count < 0) {
//         count = 0;
//     }
//       counter.textContent = count;
// }

// const changeColor = document.querySelector('#color');
// const body = document.querySelector('body')
// changeColor.addEventListener('click', newColor)
// function newColor() {
//     const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
//     let upColor = colors[Math.floor(Math.random() * colors.length )]
// body.style.backgroundColor = upColor;
// }


// const btnChange = document.querySelector('#color');
// const body = document.querySelector('body');
// const spanEl = document.querySelector('.span')

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// btnChange.addEventListener('click', (event) => {
//     spanEl.textContent = getRandomHexColor();
//     body.style.backgroundColor = spanEl.textContent;
// });

///////////////////////////////////////


// const btnEl = document.querySelector('#btn')
// const divEl = document.querySelector('.block')

// btnEl.addEventListener('click', () => {
//     divEl.classList.toggle('show')

// })

const boxEl = document.querySelectorAll('.box');
console.log(boxEl);

for (const box of boxEl) {
    box.addEventListener('click', function (event) {
        // console.log(event
        // );
        event.stopPropagation()
        let id = this.getAttribute('id')
        console.log(id
        );
    })
}
