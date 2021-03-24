'use strict';

// const box = document.getElementById('box');    // метод получения через id



// const btns = document.getElementsByTagName('button'); // получили псевдомасив 


// // const btns = document.getElementsByTagName('button')[2]; // получить елемент с массива 

// // console.log(btns);


// const circles = document.getElementsByClassName('circle');// обращение к классу 
// console.log(circles);

// const hearts = document.querySelectorAll('.heart'); //выводим все елементы через метот сердечки в консоль 

// hearts.forEach(item => {// выводим все елементы через метот сердечки в консоль 
//     console.log(item);
// })


// const oneHearts = document.querySelector('.heart'); // выводим первый элемент 

// console.log(oneHearts);



const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        wrapper = document.querySelector('.wrapper'),
        hearts = wrapper.querySelectorAll('.heart'),
        oneHearts = wrapper.querySelector('.heart')
       ;


box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px'; 

for (let i = 0; i < hearts.length; i++ ){
    hearts[i].style.backgroundColor = 'blue';
}

// hearts.forEach(item => {
//     item.style.backgroundColor = 'green';
// });


const div = document.createElement('div');
//const text = document.createTextNode('tyt bil ya');

div.classList.add('black');// добавить класс блек к диву 

// wrapper.append(div);// вставляет в конец елемент 

 wrapper.prepend(div); // в начало вставляет элемент 

// hearts[0].before(div);

//hearts[0].after(div); //манипулируем расположение документа 

//circles[0].remove();c // удалить елемент 

hearts[0].replaceWith(circles);// заменяем елементы 



// старые конструкции 

//wrapper.appendChild(div);

//div.innerHTML = 'Hello world';

 div.innerHTML = '<h1>Hello world</h1>';

 //div.textContent = '<h1>Hello</h1>';

 div.insertAdjacentHTML( "beforebegin", "<h2>Hello</h2>");