const treeify= require('treeify');
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(data){
        if(this.root==null){
            this.root=new Node(data);
            return;
        }else{
            this.insertNode(this.root, data);
        }
    }
    insertNode(root, dat){
        if(root.data>dat){
            if(root.left==null){
                root.left=new Node(dat);
                return;
            }
            this.insertNode(root.left, dat);
        }
        else if(root.data<dat){
            if(root.right==null){
                root.right=new Node(dat);
                return;
            }
            this.insertNode(root.right,dat);
        }
    }
    search(data, node=this.root){
        if(node===null){
            return 'not present in the tree';
        }
        else if(data<node.data) {
            return this.search(data, node.left);
        }
        else if(data>node.data) {
            return this.search(data, node.right);
        }
        else {
            return node;
        }
    }
    preOrderRecursive(node=this.root){
        if(node==null){
            return 'null';
        }
        if(node!==null){
            console.log(node.data);
            this.preOrderRecursive(node.left);
            this.preOrderRecursive(node.right);
        }
    }
    preOrderIterative(rot=this.root){
        if(rot==null){
            console.log('empty');
            return;
        }
        let stack=[];
        let result=[];
        stack.push(rot);
        while(stack.length!==0){
            let node = stack[stack.length-1];
            stack.pop();
            result.push(node.data);
            if(node.right!==null){
                stack.push(node.right);
            }
            if(node.left!==null){
                stack.push(node.left);
            }
        }
        console.log(result);
    }
}
const tree=new BST();
tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(9);
tree.insert(17);
tree.insert(16);
tree.insert(19);
tree.insert(22);
console.log(tree.search(10));
console.log(tree.search(9));
console.log(tree.search(22));
console.log(tree.search(11));
tree.insert(100);
console.log(treeify.asTree(tree,true));
tree.preOrderRecursive();
tree.preOrderIterative();


