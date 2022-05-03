document.addEventListener('DOMContentLoaded', () => {

    //Funcionou mais ou menos
    //Quantidade Produto
    const quantityElement = document.querySelector('.button-quantity');
    const sub = document.querySelector('.sub');
    const add = document.querySelector('.add');
    const quantity = document.querySelector('.value-quantity');

    add.addEventListener('click', () => {
      const newQtd = parseInt(quantity.innerText) + 1;
      quantity.innerHTML = newQtd;
    });

    sub.addEventListener('click', () => {
      const newQtd = parseInt(quantity.innerText) - 1;
      if (newQtd >= 0) quantity.innerHTML = newQtd;
    });


    //Aparecer e desaparecer carrinho
    const buttonCart = document.querySelector('.buttonCart');
    const cartDesktop = document.getElementById('cart-desktop');

    buttonCart.addEventListener('click', () => {
      //cartDesktop.parentNode.removeChild(cartDesktop); //Funcionou
      cartDesktop.style.display = 'none';                //Funcionou
    });
  });

