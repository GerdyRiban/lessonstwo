//concatenate is to add intergers todether
// ??????  is when you write an interger as a string with quotes around it and javascript changes it to an interger during operations such as multiplecation functions.



//increment  "++"
//decrement "--"

var foo2 = 0;
//foo2 = foo2 +1
foo2++;//1
foo2++;//2
console.log(foo2++); //log out 2
foo2--;
console.log(foo2); //log out minus 1

var baz5, bar6, bar7; // asign variables with general names to be replaced at a later time.
var baz8 = 50, baz9 = 10; // multiple variables on one line seperated with commas


//+=
//-=
var foo7 = 0;
foo7 += 5;
console.log(foo7); // answer 5

var foo8 = 8;
foo8 -= 4;
console.log(foo8); //equals 4

//or
let foo9 = 33;
foo9 += 11;
console.log(foo9); //equals 44

// creating variable names
//dont use reserved key words such as break, return,
//cant start a variable with a number.
//you can start with an underscore, most use an underscore to indicate a private variable. 

//pto calculator V1
// pto V1: a simple program that calculates the PTO at a fixed rate of 5hrs a paycheck pbiweekly.

var pto = 5;
var rat = 26;
console.log(pto*rat);

var weeksperyear = 52;
var checksperyear = weeksperyear/2
var ptoperyear = pto * checksperyear;
console.log(ptoperyear);

//global scope variables
var foo3 = "hello";
let bar = 'mundo';
{    //in brackets is local scope.
    var faz = 'hola';
    let bar = 'world';
    const yo = 'yoyo';
}

console.log(foo3);
console.log(bar);
console.log(yo);

// use let and const as local scope (block scoped ) ??? within curly brackets. 



var foo4 = 1;
let foo5 = 2;
const foo6 = 3;

foo4 = 4;
foo5 = 5;
foo6 = 6; //reasignment of values are allowed with (var and let) but not wiht "const"
//const must have a declared value as var and let do not have to be declared.



