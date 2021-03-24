
// // УСЛОВИЯ 

// const num = 50;
// (num === 50) ? console.log('ok!') : console.log('Error') // тернальный оператор состоит из 3х компонентов 

// // есть еще бинарный  и унарный 

// switch (num) {  // проверяем на строгое сооцвецтвие 
//     case 49:
//         console.log('Ne verno');
//         break; // обязательная конструкция 
//     case 100:
//         console.log('ne verno');
//         break;
//     default: // если ничего не подошло пишем и выполняем
//         console.log('ne v etot raz')
//         break;
// }


// //ЦИКЛЫ 

// "use strict"

//  let str = 50;

// while (str < 55){
//     console.log(str);
//     str++;
// }

// // Используем ДУ

//  do {
//     console.log(str);
//     num++;
//  }
//  while (str < 55);

 
//  // цыкл фор 
 
//  for (let i = 1; i < 10; i++) { // и - итератор / условия при котором цыкл остановит / что будет происходить в новом цикле  
//     console.log(str)
//     str++;
//  }

// // прерывание цикла двумя способами 

//  for (let i = 1; i < 10; i++){
//      if (i ===6){
//          //break;
//          continue;
//      }

//      console.log(i);
//  }




 //Практика 
// Практика 3 

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели ?', '');

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){  // is NaN проверяет число или нет
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели ?', '')  
    }
}

start();

 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
 };

//  const a = prompt('один из просмотренных фильмов?', ''),
//        b = prompt('На сколько оцените его ?', ''),
//        c = prompt('Один из последних просмотренных фильмов?', ''),
//        d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

//Как автоматизировать процесы и не прописывать одни и те же действи 


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){ 
        const a = prompt('один из просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его ?', '');
    
    //НАЧИНАЕМ проверять ответы в нутри цыкла 
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) { // length проверяем количество символов в строке
            personalMovieDB.movies[a] = b;
            console.log('done');
        }
        else {
            console.log('Error');
            i--; // возвращаем на одно повторение назад /оператор декримента 
        }
    }
}

// rememberMyFilms();


// выведем при условиях какой вы пользователь 


function detectPersonalLevel(){
    if(personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log(" Вы классический зритель");
    } else if (personalMovieDB.count >=30) {
        console.log("Вы киноман")
    }    

}
detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden) { // если не скрыта 
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); // указываем что минус 1  для порядка в массиве 
    }
}
writeYourGenres();


console.log(personalMovieDB);




