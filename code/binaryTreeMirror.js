var BinaryTree = function(data,lchild,rchild){
    this.data = data;
    this.lchild = lchild;
    this.rchild = rchild;
}

var root = new BinaryTree('a','b',new BinaryTree('c','d','e'));

console.log(root);