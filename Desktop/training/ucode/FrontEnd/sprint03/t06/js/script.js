 function transformation(){
    let x = document.getElementById("lab");
    let hero = document.getElementById("hero");
    
    if(hero.innerText != 'hulk'){
      x.style.backgroundColor = '#70964b' ;
      hero.style.fontSize = '130px';
      hero.style.letterSpacing = '6px';
      hero.innerText = 'hulk';
    }
    else {
      x.style.backgroundColor = '#ffb300' ;
      hero.style.fontSize = '60px';
      hero.style.letterSpacing = '2px';
      hero.innerText = 'Bruce Banner';
    }
 }
