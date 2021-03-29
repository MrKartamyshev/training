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


const numbers = [1,4]

// function pipeFix(numbers){
//     let i = numbers[0]
//     let mass = []
//     for (i; i <= numbers[numbers.length - 1]; i++ ){
//       mass.push(i)
//     }
//     return mass
//   }
  
//   let myarray=[25, 8, 7, 41]
    
//   myarray.sort(function(a,b){ 
//     return a - b
//   })
// console.log(myarray[0]);
let s = ['Anton','Kola']
function twoSort(s) {
  s.forEach(function(item) {
   let a = item.split('')
   a = a.join('***')
  return console.log(a)
});
}
twoSort(s)