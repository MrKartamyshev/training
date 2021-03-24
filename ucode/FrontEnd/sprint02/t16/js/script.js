function firstElements(array, n) {
    let res = [], i;
    for (i = 0; i < n && i < array.length; ++i) // цыкл фор проходит по всем перечисленным свойствам 
    res.push(array[i]);// добавить в массив следующие элементы 
    return res;
}


var heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];
// console.log(firstElements(heroes, 5));
// // ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
// console.log(firstElements(heroes, 1));
// // ["Captain America"]
// console.log(firstElements(heroes, 3));
// // ["Captain America", "Hulk", "Thor"]
// console.log(firstElements(heroes, 6));
// // ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
// console.log(firstElements(heroes, 1));


switch (0) {
    case 0:
        console.log(heroes[0]);

}