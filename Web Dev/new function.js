/*const name = (arr)=>{
    let count=0;
    return ()=>{
        console.log('Hello '+arr[count]);
        count++;
    }
};

let fun = name(["Ram","Shyam"]);

fun();// Print Hello Ram

fun();//print Hello Shyam*/
setTimeout(() => console.log('timer1 expired'), 1000)



setTimeout(() => console.log('timer2 expired'), 0)



function x(y) {

console.log('inside x');

y();

}



x(function y(){

setTimeout(() => console.log('inside y'), 0)

})