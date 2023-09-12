const btnChange = document.querySelector('#color');
const body = document.querySelector('body');
const spanEl = document.querySelector('.span')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChange.addEventListener('click', (event) => {
    spanEl.textContent = getRandomHexColor();
    body.style.backgroundColor = spanEl.textContent;
});
