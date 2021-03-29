'use strict'

//filter возвращают новый массив 

const names = ['Anton', 'Vlad', 'Ksenia' ]

 
const shortName = names.filter(function(name) {
    return name.length < 5
})

console.log(shortName);

// map

const answers = ['IvAn', 'AnnA', 'Hello']

const result = answers.map(item => item.toLocaleLowerCase())

console.log(result);


//every/some

const some = [4, 'sadasd', 'awdawdad']

console.log(some.some(item => typeof(item) === 'number')); // вернет true

console.log(some.every(item => typeof(item) === 'number'));// если все элементы подходят под условия наш метот вернет true

//reduce 

const arr = [4,3,5,6,12,9]


const res = arr.reduce((sum, current) => sum + current, 3)// проходит по все элементам и схлопываем в единственное значение/ второй аргумент что по дефолту плючуем

console.log(res);

const arr1 = ['apple','pear','plum']

const res1 = arr1.reduce((sum, current) => `${sum}, ${current}`)
console.log(res1);



// пример работы 
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
}
 
const newArr = Object.entries(obj)// метот преобразует обьект в массив 
.filter(item => item[1] === 'persone')// отфильтровали 
.map(item => item[0])// вернуть имена 
 
console.log(newArr);

