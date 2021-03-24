

function first() {
    // do something
    setTimeout(function() {
        //console.log(1);
    }, 500);
} 

function second() {
    //console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(` Я учу: ${lang}`);
    callback();
}

function done(){
    console.log('Я прошел этот урок');
}

//learnJS('JavaScript', done);


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('test');
    }
};

//options.makeTest()

// деструктуризация 

const {bg} = options.colors;
console.log(bg)



//методы для обьектов 
//console.log(Object.keys(options));






// console.log(options['colors']['border'])// получить вложенный обьект в обект 

// //delete options.name; // удалить обект 
// let counter = 0 
// console.log(options);
// // перебор обьектов ключей 
// for (let key in options){
//     if(typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//         console.log(`Svoystva ${i}, imeet znachenye ${options[key][i]}`) 
//         counter++
//         }
//     } else {
//         console.log(`Svoystva ${key}, imeet znachenye ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter)