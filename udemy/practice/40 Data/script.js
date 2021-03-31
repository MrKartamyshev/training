// const now = new Date('2020-05-01')// варианты записать время    
// // new Date.parse('2020-05-01')// альтернатива записи 

// // console.log(now.getFullYear())
// // console.log(now.getMonth())
// // что бы установить часы 

// console.log(now.setHours(18))
// console.log(now)

// let start = new Date()


// for (let i = 0; i < 15000000; i++){
//     let some =i ** 3;
// }

// let end = new Date()

// alert(`Цыкл отработал за ${end - start} милисикунд`)


let arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}
 console.log(countSheeps(arrayOfSheep));

const month = 10

 const quarterOf = (month) => {
    // Your code here
    return Math.ceil(month / 3);// возвращает ближайшее целое число 
  }
  console.log(quarterOf(month));