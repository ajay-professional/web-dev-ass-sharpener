console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie= async()=>{
    console.log('person3: My wife is in midway and coming with tickets');
    const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000);
    });
    let ticket=await promiseWifeBringingTickets;
    console.log(`Wife: Here are the ${ticket}.`);
    console.log('husband: Let\'s go in..')
    console.log('Wife: But I am hungry. Can we have something to eat in cinema hall.');
    console.log('husband: ok wait...');
    const getPopcorn=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('popcorn');
        },3000);
    });
    let popcorn=await  getPopcorn;
    console.log(`husband: So here are your ${ticket} and ${popcorn}.`);
    console.log('husband: so should we go in now');
    console.log('wife: But you did not buy butter for my popcorn. I only love popcorn with butter');
    console.log('husband: ok wait again...');
    const getButter=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('butter');
        },3000);
    });
    let butter=await getButter;
    console.log(`husband: So here are your ${ticket} and ${popcorn} and ${butter}. Lets go in now please.`);
    console.log('wife: Sure, I will go. But please, one last time go and get some cold drinks also!');
    console.log('husband: Oho! ok this is last time. Wait...');
    const getColdDrinks=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Cold Drinks');
        },3000);
    });
    let colddrink=await getColdDrinks;
    console.log(`husband: So here are your ${ticket}, ${popcorn}, ${butter} and ${colddrink}. Lets go in now please.`);
    console.log('wife: Yaa, sure lets go in now.');
    console.log('person3: shows ticket');
};
preMovie();
console.log('person4: shows ticket');
console.log('person5: shows ticket');