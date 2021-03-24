function sortEvenOdd(arr) {
    arr.sort(function(a, b) { // команда sort сотритует по стандарту а и б 
        return a % 2 - b % 2 // накладываем наши требования 
    }); 
}
// для тестов 
const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
sortEvenOdd(arr);
console.log(arr);