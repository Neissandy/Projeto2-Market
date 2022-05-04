document.addEventListener('DOMContentLoaded', () => {

    //Funcionou mais ou menos
    //Quantidade Produto
    const quantityElement = document.querySelector('.button-quantity');
    const sub = document.querySelectorAll('.sub');
    const add = document.querySelectorAll('.add');
    const quantity = document.querySelectorAll('.value-quantity');

    add.forEach(item => {
      item.addEventListener('click', () => {
        const newQtd = parseInt(quantity[0].innerText) + 1;
        quantity.forEach(item => item.innerHTML = newQtd);
      });   
    })

    sub.forEach(item => {
      item.addEventListener('click', () => {
        const newQtd = parseInt(quantity[0].innerText) - 1;
        if (newQtd >= 0) quantity.forEach(item => item.innerHTML = newQtd);
      });
    })


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
