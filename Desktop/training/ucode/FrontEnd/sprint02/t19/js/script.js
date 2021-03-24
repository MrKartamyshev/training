let checked = 0;
    let mustAdd = 0;
    let i;

function checkBrackets(str) {
    if (!str || typeof str !== 'string') {
        return -1;
    }

    for (i=0; i < str.length; ++i)
        if (str[i] == '(') {
        checked++; 
    } else if (str[i] == ')') {
         checked ? checked-- : mustAdd++;
     }
    
    mustAdd += checked;

    return mustAdd;
    
    } 




    console.log(checkBrackets('1)()(())2(()'));// 2
    console.log(checkBrackets(NaN));// -1