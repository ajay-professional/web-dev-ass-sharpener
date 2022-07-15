class Queue{
    constructor(){
        this.queue=[];
        this.front=-1;
        this.rear=-1;
    }
    enqueue(val){
        this.queue[this.rear+1]=val;
        this.rear+=1;
    }
    dequeue(){
        if(this.queue.length==0){
            return "nothing to pop!";
        }
        else{
            this.k+=1;
            return this.queue.shift();
        }

    }
    isEmpty(){
        return this.queue.length==0;
    }
    peek(){
        return this.queue[this.front+1];
    }
    displayQueue(){
        console.log(this.queue);
    }
}
let q=new Queue();
q.enqueue(79);
q.enqueue(7);
q.enqueue(9);
q.enqueue(-5);
q.displayQueue();
console.log(q.dequeue());
console.log(q.isEmpty());
console.log(q.peek());
console.log(q.dequeue());
q.displayQueue();