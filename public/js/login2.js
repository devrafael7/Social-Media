const div1 = document.querySelector('.div-1');
const div2 = document.querySelector('.div-2');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

function trocarDeLugar() {
  div1.classList.toggle('move-right');
  div2.classList.toggle('move-left');
}

btn1.addEventListener('click', trocarDeLugar);
btn2.addEventListener('click', trocarDeLugar);