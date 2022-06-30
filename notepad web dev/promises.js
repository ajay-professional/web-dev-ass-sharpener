const posts=[{title:'Post One', body:'This is post one'},
        {title:'Post Two', body: 'This is post two'},
        {title:'Post three', body:'This is post three'}
];
function getPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
        output+=`<li>${post.title}.</li>`;
        });
        document.body.innerHTML=output;
        const error=false;
        if(!error){
        resolve();
        }
        else{
        reject('Error: Something went wrong');
        }
        },3000);
    });
    }       
/*function createPost(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    posts.push(post);
    const error=false;
    if(!error){
        resolve(post);
    }
    else{
        reject('Error: Something went wrong');
    }
    updateLastUserActivityTime();
    }, 2000);
});
}*/
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.values!==0){
                resolve();
            }
            else{
                reject();
            }
        }, 1000);
    });
}
/*createPost({title:'Post four', body:'This is post four'}).then(()=>{
    getPosts()}).catch((err)=>console.log(err)).then(()=>{deletePost().then(()=>{posts.pop();}).catch(()=>console.log('Array is empty'))}).catch((err)=>console.log(err));

//deletePost().then(()=>{posts.pop();}).catch(()=>console.log('Array is empty'));
//deletePost().then(()=>{posts.pop();}).catch(()=>console.log('Array is empty'));

/*getPosts();
deletePost().then(()=>{
    posts.pop();
}).catch(()=>console.log('Array is empty'));
deletePost().then(()=>{
    posts.pop();
}).catch(()=>console.log('Array is empty'));*/
/*then(()=>{
    deletePost().then(()=>{
        posts.pop();
    }).catch(()=>console.log('Array is empty'));
})})*/
/*let p1=new Promise(function(resolve,reject){
    resolve("First");
});
let p2=new Promise(function(resolve,reject){
    resolve("second");
});
Promise.all([p1,p2]).then(msg=>console.log(msg));*/
const user={
    username: 'Ajay',
    lastActivityTime:'30th of June'
}
/*let updateLastUserActivityTime=function (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            user.lastActivityTime=new Date().getTime();
            resolve(user.lastActivityTime);
        },1000);
    });
};*/
//createPost({title:'Post four', body:'This is post four'});
//updateLastUserActivityTime();*/
Promise.all([new Promise((resolve,reject)=>{
    setTimeout(()=>{
    posts.push({title:'Post four', body:'This is post four'});
    const error=false;
    if(!error){
        resolve({title:'Post four', body:'This is post four'});
    }
    else{
        reject('Error: Something went wrong');
    }
    //updateLastUserActivityTime();
    }, 1000);
}),new Promise((resolve, reject)=>{
    setTimeout(()=>{
        user.lastActivityTime=new Date().getTime();
        resolve(user.lastActivityTime);
    },1000);
})]).then((data)=>{
    console.log(data);
}).catch(err=>console.log(err));

