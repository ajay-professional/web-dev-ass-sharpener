const posts=[{title:'Post One',body:'This is post one', createdAt:new Date().getTime()},
{title:'Post Two', body: 'This is post two',createdAt:new Date().getTime()}];
let intervalId=0;
function getPosts(){
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
        let output='';
        posts.forEach((post)=>{
        output+=`<li>${post.title} - created ${(new Date().getTime() - post.createdAt)/1000} seconds ago.</li>`;
        })
        document.body.innerHTML=output;
        },1000);
    }
function createPost(oost, callback){
    setTimeout(()=>{
    posts.push({...oost, createdAt:new Date().getTime()});
    callback();
    },2000);

}
function create4thPost(post, callback){
    setTimeout(()=>{
        posts.push({...post, createdAt:new Date().getTime()});
        callback();
    },3000)
}
createPost({title:'Post three',body:'This is post three'},create4thPost({title:'Post fourth', body:'This is post fourth'}, getPosts));

var timer;
var count=0;
function lastEditedInSecondsAgo(){
    count=0;
    clearInterval(timer)
    timer=setInterval(()=>{
        count++;
        console.log(count)
    },5000);
}
