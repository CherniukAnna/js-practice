const prod = document.querySelectorAll('.item');
for (const e of prod) {
    e.addEventListener('click', function () {
        this.classList.toggle('item-active')
        calcPrice()
    })
}


function calcPrice() {
    let sum = 0;
    for (const e of prod) {
        if (e.classList.contains('item-active')) {
            let calc = Number(e.dataset['price'])
            sum += calc
        }
    }
    const total = document.querySelector(".value");
    console.log(total);

    total.innerText = sum - (sum * 5) / 100;
}




