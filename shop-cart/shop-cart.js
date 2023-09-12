let cart = {
    'pizza1': 2,
    'pizza2': 2,
    'pizza3':2,
}

document.onclick = event => {
    if (event.target.classList.contains('plus')) {
        plusFanction(event.target.dataset.id);
    }
    if (event.target.classList.contains("minus")) {
      minusFanction(event.target.dataset.id);
    }
}
const plusFanction = id => {
    cart[id]++;
    renderCart()
}
const minusFanction = id => {
    if (cart[id] - 1 == 0) {
        deleteFanction(id);
        return true;
    }
    cart[id]--;
    renderCart()
}
const deleteFanction = (id) => {
 delete cart[id];
  renderCart();
};
const renderCart = () => {
    console.log(cart);
}
renderCart();