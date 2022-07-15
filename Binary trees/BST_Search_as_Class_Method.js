class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(value){
    let newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
  
  search(data, node=this.root) {
    if (node === null) return 'not found';
    else if (data < node.value) return this.search(data, node.left);
    else if (data > node.value) return this.search(data, node.right);
    else return node;
  }
  findMin(root){
    if(root==null){
      return -1;
    }
    let curr=root;
    while(curr.left!=null){
      curr=curr.left;
    }
    return curr.value;
  }
  findMax(root){
    if(root==null){
      return -1;
    }
    let curr=root;
    while(curr.right!==null){
      curr=curr.right;
    }
    return curr.value;
  }
}

let BST = new BinarySearchTree();
BST.insert(15);
BST.insert(28);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(30);

console.log(BST.search(5)); // sub tree of node containing value 5
console.log(BST.search(88)); // not found
//console.log(BST);
console.log(BST.findMin(15));

