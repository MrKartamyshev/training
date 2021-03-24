'use strict'

let arr = [10, 2, 34, 4, 52, 68, 17];
arr.sort(compareNum)
console.log(arr)

function compareNum(a,b){
    return a - b;
}

//console.log(arr.length);
// используем везде 
arr.forEach(function(item, i, arr){
    //console.log(`${i}: ${item} vnutri mass ${arr}` )
});

// arr.pop(); // удаление последнего елемента и возвращение его 
// arr.push(10); // добавление элемента в конец массива

// let ar = arr.splice(' ')


//выведем элементы массива 
// используем когда необходимо остановить цикл breke/continium 
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let value of arr){
//     console.log(value);
// }


// console.log(arr)



// const str = prompt('','')
// const products = str.split(",")
// //console.log(products)
// products.sort()
// console.log(products.join(': '))

