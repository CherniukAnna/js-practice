// const input = document.querySelector('#input')
// const btn = document.querySelector("#btn")
// const list = document.querySelector(".list")
// const total = document.querySelector("#total")
// let number = 0

// btn.addEventListener('click', (e) => {
//     if (input.value === '') return

//     createDeleteElement(input.value)
//     input.value = ''
// })

// function createDeleteElement(value) {
// number++;
// const li = document.createElement("li");
// li.className = "item";
// li.textContent = value;
// list.appendChild(li);

// const btn = document.createElement("button");
// btn.className = "btn";
// btn.textContent = "delete";
// li.appendChild(btn);

// btn.addEventListener("click", (e) => {
//   number--;
//   total.textContent = number;
//   list.removeChild(li);
// });

// total.textContent = number;
// }

//******************************* */
// const formEl = document.querySelector("#converterForm");
// const inputAmount = document.querySelector("#amount");
// const select1 = document.querySelector("#fromCurrency");
// const select2 = document.querySelector("#toCurrency");
// const btn = document.querySelector("#button");
// const result = document.querySelector("#conversionResult");

// const exchangeRates = {
//   usd: 1,
//   eur: 0.9,
//   uah: 37,
// };

// formEl.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const parset = parseFloat(inputAmount.value);
//   const selectEl1 = select1.value;
//   const selectEl2 = select2.value;

//   if (
//     exchangeRates.hasOwnProperty(selectEl1) &&
//     exchangeRates.hasOwnProperty(selectEl2)
//   ) {
//     const convertedParsed =
//       parset * (exchangeRates[selectEl2] / exchangeRates[selectEl1]);

//     result.innerText = `${parset} ${selectEl1.toUpperCase()} = ${convertedParsed.toFixed(2)} ${selectEl2.toUpperCase()}`;
//   } else {
//     result.innerText = "impossible to count";
//   }
//   formEl.reset();
// });

//******************************* */

// const formEl = document.querySelector('.form-validate')

// formEl.addEventListener('submit', event => {
//   if (!formEl.checkValidity()) {
//     event.preventDefault()
//     alert(`Введите имя`)

//   }
// })

// ****  второй способ *****
// const formEl = document.querySelector('.form-validate')
// const inputEmail = document.querySelector('.input-email')
// const inputText = document.querySelector('.input-text')

// formEl.addEventListener('submit', event => {
// event.preventDefault()
//   if (!inputEmail.value) {

//     alert(`Введите email`)
//   }

//   if (inputText.value === '') {
//     alert(`Введите текст`)
//   }

// })

//*********************** */

// const database = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];

// const btnCheck = document.querySelector("#btn-check");
// const inputValue = document.querySelector("#input-value");
// const textEl = document.querySelector('#text')
// const value = inputValue.value;

// function uniqueCheck(value) {
//   const lowerCaseValue = value.toLowerCase()
//   for (let i = 0; i < database.length; i++) {
//     const lowerCaseDatabase = database[i].toLowerCase();
//     if (lowerCaseValue === lowerCaseDatabase) {
//       return false
//     }

//   }
//   return true;
// }

// btnCheck.addEventListener("click", () => {

//   const value = inputValue.value;
//   if (value.trim() !== "") {
//     const isUnique = uniqueCheck(value);
//     if (isUnique) {
//       textEl.textContent = `Значение уникальное: ${value}`;
//     } else {
//       textEl.textContent = `Значение не уникальное`;
//     }
//   }
// });

//******************************** */

// const textGenereit = document.querySelector(".text-genereit");
// const btnGeneteitet = document.querySelector("#btn-genereitet");

// function generatePassword() {
//   const characters =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

//   const passwordLength = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
//   const passwordArr = [];

//   for (let i = 0; i < passwordLength; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     const randomChar = characters[randomIndex];
//     passwordArr.push(randomChar);
//   }

//   let pass = passwordArr.join('')
//   const num = /\d/.test(pass)
//   const string = /[a-zA-Z]/.test(pass)
//   if (!num || !string) {
//   return generatePassword();
//   }
//   return pass

// }

// btnGeneteitet.addEventListener('click', (e) => {
//   e.preventDefault()
//   const password = generatePassword()
//   textGenereit.innerHTML = password
// })

//******************************** */

// const textGenereit = document.querySelector(".text-gen");
// const btnGeneteitet = document.querySelector("#btn-gen");

// function generatePassword(length) {
//   var charset =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   var password = "";

//   for (var i = 0; i < length; i++) {
//     var randomIndex = Math.floor(Math.random() * charset.length);
//     password += charset[randomIndex];
//   }

//   return password;
// }

// var minLength = 6;
// var maxLength = 20;
// var randomLength =
//   Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

// var password = generatePassword(randomLength);
// console.log(password);

// btnGeneteitet.addEventListener('click', () => {
//   var password = generatePassword(randomLength);
// console.log(password);
// })

//************************************* */

// const btnLike = document.querySelector("#like-btn");
// const btnDislike = document.querySelector("#dislike-btn");
// const total = document.querySelector("#total-text");
// let curTotal = 0
// btnLike.addEventListener('click', () => {
//   curTotal++

//   total.textContent = curTotal

// })

// btnDislike.addEventListener("click", () => {
//   curTotal--;
//   if (curTotal <= 0) {
//   curTotal = 0
//   }
//   total.textContent = curTotal;

// });

//************ */

//Есть три карточки товара с разными ценами
//нужно при клике на кнопку считать скидку для каждого товара 15 процентов и выводить это в параграф

// const cards = document.querySelectorAll(".product-card");

// cards.forEach(card  => {
//   const price = card.querySelector('p')
//   const btnDiscount = card.querySelector(".discount-btn");
//   const amount = card.querySelector(".discount-amount");
//   btnDiscount.addEventListener('click', () => {
//     const priceText = price.textContent
//     console.log(priceText);

//     const curPrice = parseFloat(priceText.replace('Цена: $', ''))
//     console.log(curPrice);

//     const diccount = (curPrice * 0.15).toFixed(2)
//     console.log(diccount);

//     amount.textContent = `скидка: $ ${diccount}`;

//     const p = document.createElement('p')

//     const newPrice = curPrice - diccount
//     console.log(newPrice);
//     card.appendChild(p)
//     p.textContent = `Цена со скидкой: $ ${newPrice}`

// })
// })

// Задача: Определить статус заказа по его номеру.
// const orderNumber = 'AB1234';
// let orderStatus;
// switch (orderNumber.charAt(2)) {
//   case "A":
//     orderStatus = "статус не активен";
//     break;
//   case "B":
//     orderStatus = "статус в обработке";
//     break;
//   case "1":
//     orderStatus = "статус обрабатывается";
//     break;
//   case "2":
//     orderStatus = "статус обработался";
//     break;
//   default:
//     orderStatus = 'неизвесный статус'
//     break;
// }
// console.log(`Статус заявки с номером ${orderNumber} ${orderStatus}`);

//Определить скидку в зависимости от суммы покупки.
//Discount 15, 10, 5, 0
// const price = 120
// let descount;
// switch (true) {
//   case price > 120 && price < 500:
//     descount = 15;
//     break;
//   case price <= 120 && price > 80:
//     descount = 10;
//     break;
//   case price <= 80 && price > 40:
//     descount = 5;
//     break;
//   default:

//     descount = 0;

// }
// console.log(`Скидка: ${descount}`);

//Создать новый массив, содержащий длины всех строк из исходного массива.
// const words = ['apple', 'banana', 'orange', 'grape'];
// const lengthWords = []

// words.forEach((elem) => {
//   lengthWords.push(elem.length)
// })
// console.log(lengthWords);

// Проверить, содержит ли массив хотя бы одно положительное число.
// const numbers = [-1, -2, -3, 4, -5];
// let bull = false

// numbers.forEach((elem) => {
//   if (elem > 0) {
//     bull = true;

//   }
// })
// console.log(bull);

//*************************** */

// function getPost() {
//   const data = new XMLHttpRequest()
//   data.open("GET", "https://restcountries.com/v3.1/name/ukraine");
//   data.onload = function () {
//     if (data.status === 200) {
//       const post = JSON.parse(data.responseText)
//       console.log(post);
//     } else {
//       console.error('ошибка получения')
//     }

//   }
//   data.send()
// }
// getPost()

//**************************** */

// const recvest = new XMLHttpRequest()
// recvest.open("GET", "https://restcountries.com/v3.1/name/ukraine");
// console.log(recvest);
// recvest.send()
// //console.log(recvest);

// recvest.addEventListener('load', function () {
//   const data = JSON.parse(recvest.responseText)
//   console.log(data);
//   const capital = data[0].capital
//   console.log(capital);
// })
// console.log('Hello wourd');

//********************* */

// fetch("https://restcountries.com/v3.1/all")
//   .then((response) => console.log(response.json()))
//   .then(data => {
//     const countrys = data.map((country) => ({
//       name: country.name.common,
//     }))
//     console.log(countrys);
//   })

// async("https://restcountries.com/v3.1/name/ukraine")
// .then(response => console.log(response.json()))
//   .then(data => {
//   console.log(data);
//   })
//   .catch(error => {
//   console.error(error, 'error');
// })

// async function getCountryData() {
//   try {
//     const response = await fetch("https://restcountries.com/v3.1/name/ukraine");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error, "error");
//   }
// }

// getCountryData();
// const container = document.querySelector(".container-users");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(users => {
//     console.log(users);
//     users.forEach(user => {
//       const html = `<li class="item-user"> ${user.name} ${user.email} ${user.website}</li>`
//       container.insertAdjacentHTML('afterbegin', html)
//     })
//   })
//   .catch(error => {
//   console.log(error);
//   })

// const fragment = document.createDocumentFragment('ul');
// fragment.appendChild(html)

// const container = document.querySelector(".container-users");

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
//   .then(users => {
//     console.log(users);
//     users.forEach(user => {
//       if (user.id > 2 && user.id < 7) {
//         const html = `<li class="item">${user.name} </li>`
//         container.insertAdjacentHTML('afterbegin', html)
//       }
//     })
//       .catch(err => {
//       console.log(err);
//     })
//   })

// const container = document.querySelector(".container-users");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     console.log(users);
//     users
//       .forEach((user) => {
//         if (user.name[0] === 'E') {
//           const html = `<li class="item">${user.name} </li>`;
//           container.insertAdjacentHTML("afterbegin", html);
//         }
//       })
//
//   })
//      .catch((err) => {
//         console.log(err);
//       });

//  const container = document.querySelector(".container-users");

//  fetch("https://jsonplaceholder.typicode.com/todos")
//    .then((response) => response.json())
//    .then((users) => {
//     //  console.log(users);
//      const userTrue = users.filter(user => user.completed === true)
//      console.log(userTrue);
//      userTrue.forEach((user) => {
//        if (user.id >= 20 && user.id <= 50) {
//          const html = `<li class="item">${user.title} </li>`;
//          container.insertAdjacentHTML("afterbegin", html);
//        }
//      })

//    })
//    .catch((err) => {
//          console.log(err);
//        });


////////////////////////////////////////////////////


// const searchInput = document.querySelector("#searchInput");
// const searchButton = document.querySelector("#searchButton");
// const userInfoDiv = document.querySelector("#userInfo");

// // Функция для обработки события клика на кнопку поиска
// function searchUser() {
 
//   userInfoDiv.innerHTML = "";

//   let inputName = searchInput.value;

//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//   xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 400) {
//       var response = JSON.parse(xhr.responseText);

//       // Фильтруем список пользователей по имени
//       let filteredUsers = response.filter(function (user) {
//         return (
//           user.name.charAt(0).toLowerCase() ===
//           inputName.charAt(0).toLowerCase()
//         );
//       });
//       // Проверяем, найдены ли пользователи с введенными первыми буквами имени
//       if (filteredUsers.length > 0) {
//         // Создаем список для отображения найденных пользователей
//         const userList = document.createElement("ul");
//         filteredUsers.forEach(function (user) {
//           let userItem = document.createElement("li");
//           userItem.textContent = user.name;

//           userItem.addEventListener("click",  () => {
            
//             userInfoDiv.innerHTML = "";

//             const userTable = document.createElement("table");

//             const headerRow = userTable.insertRow();
//             const nameCell = headerRow.insertCell();
//             nameCell.textContent = "Имя";
//             const emailCell = headerRow.insertCell();
//             emailCell.textContent = "Email";
//             const addressCell = headerRow.insertCell();
//             addressCell.textContent = "Адрес";

//             const userRow = userTable.insertRow();
//             const userNameCell = userRow.insertCell();
//             userNameCell.textContent = user.name;
//             const userEmailCell = userRow.insertCell();
//             userEmailCell.textContent = user.email;
//             const userAddressCell = userRow.insertCell();
//             userAddressCell.textContent =
//               user.address.street +
//               ", " +
//               user.address.city +
//               ", " +
//               user.address.zipcode;

//             userInfoDiv.appendChild(userTable);
//           });

//           userList.appendChild(userItem);
//         });

//         userInfoDiv.appendChild(userList);
//       } else {
       
//         userInfoDiv.textContent = "Пользователи не найдены";
//       }
//     } else {
     
//       userInfoDiv.textContent = "Ошибка запроса к API";
//     }
//   };
//   xhr.onerror = function () {
//         userInfoDiv.textContent = "Ошибка запроса к API";
//   };
//   xhr.send();
// }

// searchButton.addEventListener("click", searchUser);
