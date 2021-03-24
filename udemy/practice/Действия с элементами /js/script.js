'use strict';


const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHearts = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');// добавили див в конец 

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';  // помещаем в онлайн стили 

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// используем цикл не используем есть методы 
// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }


hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Tyt bil ya');

//действия с нашим классом 

div.classList.add('black');


//wrapper.append(div); // добавили див в конец 


wrapper.prepend(div);// в начало елемента 


