
function Heroes(he) {
// обевляем функцию 
    if ( // проверяем обект на совпадение
    (he.team == "Avenger" || he.team == "S.H.I.E.L.D.")
    && he.universe == "Marvel"
    && he.race == "human" 
    && he.eyeColor == "green" 
    && he.hairColor == "lightBrown/green") 
    {
        alert("This is Black Widow!"); // если все совпадает выводим строку
    } 
    
    else if (  // если нет проверяем тут 
        (he.team == "Justice League Of Americ" || he.team == "Teen Titans")
        && he.universe == "MC Comics"
        && (he.race == "human" || he.race == "kryptonian") 
        && he.eyeColor == "blue" 
        && he.hairColor == "black") 
        {
        alert("This is a Superman or Robin!"); // если совпадает выводим строку
        } 
    else // во всех остальных слкчаях выводим строку 
        alert( "Didn't recognize!" );
}


//Для тестов использовать 

// let he1 = {
//     team: "Teen Titans",
//     universe: "MC Comics",
//     race: "human", 
//     eyeColor: "blue", 
//     hairColor: "black"
// }


// Heroes(he1);