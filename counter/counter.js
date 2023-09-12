const btnPlas = document.querySelector('#plas');
 const btnMim = document.querySelector('#min');
const counter = document.querySelector('#counter');
 btnPlas.addEventListener('click', plasCounter )
 let count = 0;
function plasCounter () {
   count += 1
   counter.textContent = count
}
 btnMim.addEventListener('click', minCounter)
 function minCounter() {
    count -= 1;
    if (count < 0) {
       count = 0;
   }
     counter.textContent = count;
}
