'use strict'

// function User(name,id) {
//     this.name = name;
//     this.id = id;
//     this.himan = true,
//     this.hello = function(){
//         console.log(`Hello ${this.name }`);
//     }
// }


// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 30);

// console.log(ivan)


// Контекст вызова 

// 4 способа 

// function showThis(){
//     console.log(this)
// }

// showThis()

//1) Обычная функция : this = window, но если стоит use strict - будет undefined 


// function showThis(a, b){
//      console.log(this)
//      function sum() {
//          console.log(this);
//          return a + b ;
//      }

//      console.log(sum())
// }

// showThis(4,5)

//2)Контекст у методов обьекта - это будет сам обьект 

// const obj = {
//     a: 20,
//     b: 15,
//     sum : function(){
//         function shout() {
//             console.log(this)
//         }
//         shoud();
//     }
// }
// obj.sum()

// 3) this в конструкторах  и классах - это новый экземпляр обьектов 
// function User (name, id ) {
//     this.name = name,
//     this.id = id,
//     this.human = true,
//     this.hello = function(){
//         console.log('Hello!' + this.name)
//     }
// }
// let ivan = new User('Ivan', 23)
// console.log(ivan.hello())

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name);
// }

// const user = {
//     name: 'Jone'
// }
// sayName.call(user, "Smith");// передает в функцию 
// sayName.apply(user, ['smith']);

// function count()



class Rectangle {// концепция 
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width ;
    }
}
class ColoredRectanglLeWithText extends Rectangle{// наследуем свойства другого класа 
    constructor(height,width,text, bgColor){
        super(height,width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Текст: ${this.text}, цвет ${this.bgColor}`)
    }
}

const div = new ColoredRectanglLeWithText(25,10,'hello world', 'red');
div.showMyProps();
console.log(div.calcArea())


// const aquer = new Rectangle(10,10)//екземпляры
// console.log(aquer.calcArea())


