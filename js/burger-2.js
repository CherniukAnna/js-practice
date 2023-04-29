const burgerEl = document.querySelector('#burger');
const menuEl = document.querySelector('header')

burgerEl.addEventListener('click', () => {
menuEl.classList.toggle('open')
})

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("burger").addEventListener("click", function () {
//         document.querySelector("header").classList.toggle("open")
//     })
// })