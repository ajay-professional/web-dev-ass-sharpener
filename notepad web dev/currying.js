//using closures
let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo=multiply(2);
multiplyByTwo(3);
let multiplyByThree = multiply(3);
multiplyByThree(10);

//using Bind
let multiply2 = function(x,y){
    console.log(x*y);
}
let multiplyByTwo2=multiply2.bind(this,2);
multiplyByTwo2(3);

let multiplyByThree3=multiply2.bind(this,3);
multiplyByThree3(5);
