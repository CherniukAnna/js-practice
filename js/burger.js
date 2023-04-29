const btnEl = document.querySelector('#btn')
const divEl = document.querySelector('.block')

btnEl.addEventListener('click', () => {
    divEl.classList.toggle('show')

})
