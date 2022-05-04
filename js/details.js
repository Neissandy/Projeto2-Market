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
      if(cartDesktop.style.display == 'none'){
        cartDesktop.style.display = 'block';
      }else{
        cartDesktop.style.display = 'none'; 
      }
  });
});

  // cartDesktop.style.display = 'none';                //Funcionou - Fez desaparecer o carrinho
  // cartDesktop.style.display = 'block';               //Funcionou - Fez reaparecer o carrinho
  //cartDesktop.parentNode.removeChild(cartDesktop); //Funcionou - Fez desaparecer o carrinho
