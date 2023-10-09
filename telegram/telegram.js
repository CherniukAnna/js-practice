const formEl = document.querySelector("#form");
const btnEl = document.querySelector("#btn");
// const inputName = document.querySelector("#name");
// const inputAge = document.querySelector("#age");
// const inputEmail = document.querySelector("#email");

const TOKEN = "5855080775:AAH2oFFuMMe5CEVMGO6wyFB_nCL0AO250FU";
const CHAT_ID = "-1001913994781";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

async function sendMessage(message) {
  try {
    const respons = await fetch(URL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      }),
    });
      if (respons.ok) {
          return 'send';
      } else {
          throw new Error('did not send')
    }
  } catch (error) {
      console.warn(error);
      throw error
    }
    
}

formEl.addEventListener('submit', async function (e) {
    e.preventDefault()
    let message = `<b>заявка сайта</b>\n`
    message += `<b>Имя Клиента<b/> ${this.name.value}\n`;
    message += `<b>Возраст Клиента<b/> ${this.age.value}\n`;
    message += `<b>Эмеил Клиента<b/> ${this.email.value}\n`;
    try {
        const responsMessage = await sendMessage(message);
        formEl.reset();
        btnEl.textContent = responsMessage
    } catch (error) {
        console.log(error);
    }
})



// const formEl = document.querySelector("#form");
// const btnEl = document.querySelector("#btn");

// const TOKEN = "5855080775:AAH2oFFuMMe5CEVMGO6wyFB_nCL0AO250FU";
// const CHAT_ID = "-1001913994781"; // Тут был пробел
// const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// async function sendMessage(message) {
//   try {
//     const response = await fetch(URL_API, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json", // Тут была опечатка
//       },
//       body: JSON.stringify({
//         chat_id: CHAT_ID,
//         parse_mode: "html", 
//         text: message,
//       }),
//     });

//     if (response.ok) {
//       return 'send';
//     } else {
//       throw new Error('did not send');
//     }
//   } catch (error) {
//     console.warn(error);
//     throw error;
//   }
// }

// formEl.addEventListener('submit', async function (e) {
//   e.preventDefault();
//   let message = `<b>заявка сайта</b>\n`;
//   message += `<b>Имя Клиента</b> ${this.name.value}\n`; 
//   message += `<b>Возраст Клиента</b> ${this.age.value}\n`;
//   message += `<b>Email Клиента</b> ${this.email.value}\n`; 

//   try {
//     const responseMessage = await sendMessage(message);
//     formEl.reset();
//     btnEl.textContent = responseMessage;
//   } catch (error) {
   
//     console.error(error);
//   }
// });


