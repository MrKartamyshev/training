var x = 123;
const bigInt = 12345678901234344546456456567890n;
var str = 'hello World';
var nameAnton = true;
var age = null;
var nu;
var obj = new Object();
var obj = {name: 'Anton'};
var sym = Symbol.for("name");
 var my = function(w)
{
    w = "Freedom is power";
    return w;
};

alert(
    x + " is Number" + 
    "\n" + bigInt + " is BigInt" + 
    "\n" + str + " is String" + 
    "\n" + nameAnton + " is Boolean" + 
    "\n" + age +" is Null" + 
    "\n" + nu + " is Undefined" + 
    "\n" + obj.name + " is Object" + 
    "\n" + Symbol.keyFor(sym) + " is Symbol" + 
    "\n" + my() + " is Function" 
    );
