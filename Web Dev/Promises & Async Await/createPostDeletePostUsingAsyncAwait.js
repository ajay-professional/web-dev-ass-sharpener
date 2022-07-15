const posts=[{title:'Post One', body:'This is post one'},
        {title:'Post Two', body: 'This is post two'},
        {title:'Post three', body:'This is post three'}
];
const postAsyncF= async()=>{
    const createPost=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.push({title:'Post four', body:'This is post four'});
        const error=false;
        if(!error){
            resolve(posts);
        }
        else{
            reject('Error: Something went wrong');
        }
        }, 2000);
    });
    let created=await createPost;
    console.log(created);
    const deletePost=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.values!==0){
                resolve('Element popped out of the array!');
            }
            else{
                reject();
            }
        }, 1000);
    });
    let deletepost=await deletePost;
    console.log(deletepost);
};
postAsyncF();
