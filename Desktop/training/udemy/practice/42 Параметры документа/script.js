'use strict';

const   box = document.querySelector('.box'),
        btn = document.querySelector('button');
// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth; //получаем длинну вложения скролла
const height = box.scrollHeight;

console.log(width,height)

btn.addEventListener('click', ()=>{
   //  box.style.height = box.scrollHeight + 'px'// присваиваем стилям новую высоту / сначала получаем высоту всего текста и добавляем пиксели выходит записали новый стиль 
   console.log(box.scrollTop)// выводим информацию сколько пролистали 
})

console.log(box.getBoundingClientRect().top)// получение всех значений / получение опредиленного 

const style = window.getComputedStyle(box);// получаем стили// стили из цсс можем получить и сравнить не путать с инлайн стилями ( инлайн в приоритете ) 


console.log(document.documentElement.scrollTop) // показывает скролл и можно задавать скролл 