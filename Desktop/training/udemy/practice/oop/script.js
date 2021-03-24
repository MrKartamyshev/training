'use strict'

let str = 'some'
let strObj = String(str)

// console.log(typeof(str))
// console.log(typeof(strObj))

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("hello");
    }
}

//1
const jonh = Object.create(soldier)//создаем обект который унаследует прототипы от солдата 

// const jonh = {
//     health: 100
// }

//jonh.__proto__ = soldier; // метот спрото, устаревши и не используеться 

//2
Object.setPrototypeOf(jonh, soldier); // установили прототип от солдата к джону 


jonh.sayHello();

