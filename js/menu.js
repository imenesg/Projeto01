const menubotao = document.querySelector(".header__menu");
const menubotaoclose = document.querySelector(".header__menuclose");
const menuLista = document.querySelector(".header__nav");

menubotao.addEventListener("click", ()=>{menuLista.classList.toggle("header__nav-visivel" , console.log("apertado"))});
menubotaoclose.addEventListener("click", ()=>{menuLista.classList.toggle("header__nav-visivel")});



    