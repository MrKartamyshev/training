const now = new Date('2020-05-01')// варианты записать время    
// new Date.parse('2020-05-01')// альтернатива записи 

// console.log(now.getFullYear())
// console.log(now.getMonth())
// что бы установить часы 

console.log(now.setHours(18))
console.log(now)

let start = new Date()


for (let i = 0; i < 15000000; i++){
    let some =i ** 3;
}

let end = new Date()

alert(`Цыкл отработал за ${end - start} милисикунд`)