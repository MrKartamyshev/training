
function solver(a,b,c,d,e){

    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number'|| typeof e !== 'number' )
    {    
    return('Wrong input'); 
    }
    else{
       return x = a ** 2 - 5 * b * c + d / 3 + e;
    }
}
