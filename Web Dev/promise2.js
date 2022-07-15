const prom1 = Promise.resolve('Hello World');
const prom2 = 10;
const prom3 = new Promise((resolve, reject) => setTimeout((resolve, 2000, 'GoodBye')));

Promise.all([prom1, prom2, prom3]).then(values => console.log(values));
