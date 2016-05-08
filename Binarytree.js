var TreeNode = function (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

var tree = new TreeNode('hello','world','again');
var preorder = new Array(1,2,4,7,3,5,6,8), midorder = new Array(4,7,2,1,5,3,8,6);

function mktree(preorder, midorder){
    var rootNode = new TreeNode();
    var root = preorder[0];
    var rootIndex = midorder.findIndex(function (data) {
        return data == root;
    });
    var leftPreorder = preorder.slice(1, rootIndex + 1);
    var leftMidorder = midorder.slice(0, rootIndex);

    var rightPreorder = preorder.slice(rootIndex + 1,preorder.length);
    var rightMidorder = midorder.slice(rootIndex + 1, midorder.length);

    if(leftPreorder.length == 0 || rightPreorder.length == 0) {
        return null;
    }else if(leftPreorder.length == 1){
        return new TreeNode(leftPreorder[0]);
    }else if(rightPreorder.length == 1){
        return new TreeNode(rightPreorder[0]);
    }
    rootNode.data = root;
    rootNode.left = mktree(leftPreorder,leftMidorder);
    rootNode.right = mktree(rightPreorder,rightMidorder);

    return rootNode;
}


console.log(mktree(preorder, midorder));
//
//console.log(midorder.findIndex(function (data) {
//    return data == 1;
//}))