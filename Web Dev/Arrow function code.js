"use strict";

let getA= (a)=>a;
console.log(getA(1));

let square= (a) =>{ return a*a};
console.log(square(4));

let mult=(a,b) =>{ return a*b};
console.log(mult(6,7));

var x=(...n)=>{
    console.log(n[0])
};
x(1,2,3);
