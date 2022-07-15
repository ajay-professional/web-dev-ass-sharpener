console.log('person1: shows ticket');
console.log('person2: shows ticket');
const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000);
});
const getPopcorn=promiseWifeBringingTickets.then((t)=>{
    console.log('person3: My wife is in midway and coming with tickets');
    console.log('Wife: Here are the tickets');
    console.log('husband: Let\'s go in..')
    console.log('Wife: But I am hungry. Can we have something to eat in cinema hall.');
    console.log('husband: ok wait...');
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`husband: So here are your ${t} and popcorns`);
        },4000);
    });
});
const getButter=getPopcorn.then((p)=>{
    console.log(p);
    console.log('husband: so should we go in now');
    console.log('wife: But you did not buy butter for my popcorn. I only love popcorn with butter');
    console.log('husband: ok wait again...');
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`${p} and butter. Lets go in now please.`);
        },5000);
    });
});
const getColdDrinks=getButter.then((arg)=>{
    console.log(arg);
    console.log('wife: Sure, I will go. But please, one last time go and get some cold drinks also!');
    console.log('husband: Oho! ok this is last time. Wait...');
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`${arg}. I have bought cold drinks too now.`);
        },6000);
    });
});
getColdDrinks.then((par)=>{
    console.log(par);
    console.log('wife: Yaa, sure lets go in now.');
    console.log('person3: shows ticket');
})
console.log('person4: shows ticket');
console.log('person5: shows ticket');