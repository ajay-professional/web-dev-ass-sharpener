// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'Hello from Node.js');
//console.log("Hello World");
// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000);

// console.log('d');



// console.log('a');

// console.log('b');
// function prom() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('c')
//             res();
//         }, 3000)
//     })
// }
// prom().then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('d')
//             resolve();
//         }, 0 );
//     });
// }).then(()=>console.log('e'));

// async function prom() {
//     console.log('a');

//     console.log('b');

//     await new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('c');
//             res();
//         }, 3000);
//     });

//     await new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('d')
//             res();
//         }, 0);
//     });
//     console.log('e');
// };
// prom();
const http=require('http');
const server=http.createServer((req, res)=>{
    console.log("Ajay Kumar");
});
server.listen(4000);


