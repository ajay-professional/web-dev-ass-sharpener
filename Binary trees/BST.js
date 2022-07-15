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
  
}

function search(node, data) {
  if (node===null) return null;
  else if (data < node.value) return search(node.left, data);
  else if (data > node.value) return search(node.right, data);
  else return node;
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

console.log(search(BST.root, 10))
