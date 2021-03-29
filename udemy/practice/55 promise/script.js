'use strict'

// console.log('Выполняется запрос')

// const req = new Promise(function(resolve, reject){// resolve обещание выполнелось / reject не выполнилось 
//     setTimeout(() => {
//         console.log('Подготовка данных...')

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product)
//     }, 2000)
// })

// req.then((product) =>{ // принимает аргумент resolve 
//     // setTimeout(() => {
//     //     product.status = 'order';
//     //     console.log(product)
//     // }, 2000)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order'
//             //reject(product)
//             resolve(product)
//         }, 2000)
//     })
// })  .then(data => {
//     data.modify = true;
//     return data
// }) .then(data => {
//     console.log(data)
// }).catch(() => {// когда произошла ошибка 
//     console.error('Произошла ошибка')
// }).finally(() => {
//     console.log('Finally')
// })




const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time)
    })
}

// test(1000).then(() => console.log("1000 ms"))
// test(2000).then(() => console.log("2000 ms"))


//методы 
Promise.all([test(1000), test(2000)]).then(() => { //ждет пока все промисы выполнятся 
    console.log('ALL')
})

Promise.race([test(1000), test(2000)]).then(() => {// ждет пока первый промис выполнится 
    console.log('ALL')
})


