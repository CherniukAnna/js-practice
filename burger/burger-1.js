const btn = document.querySelector('button');
const menu = document.querySelector('ul')

btn.addEventListener('click', () => {
    (btn.textContent === 'menu') ? setMenu('open', 'close') : setMenu("close", "menu");
    
})

function setMenu(menuAction, btnAction) {
    menu.style.animationName = menuAction;
    btn.textContent = btnAction;
}

///// 1 вариант
// btn.addEventListener("click", () => {
//   if (btn.textContent === "menu") {
//     menu.style.animationName = "open";
//     btn.textContent = "close";
//   } else {
//     menu.style.animationName = "close";
//     btn.textContent = "menu";
//   }
// });

//////  2 вариант
// btn.addEventListener("click", () => {
//   if (btn.textContent === "menu") {
//     setMenu("open", "close");
//   } else {
//     setMenu("close", "menu");
//   }
// });
