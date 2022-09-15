//node factory
function node(data){
    return{
        data: data,
        left: null,
        right: null

    }
}
class tree{
    constructor(root){
        this.root = buildTree(root);
    }
};

function buildTree(unsortedArray){
    
    //probably better ways to do this but converting the array into the set removes duplicates.
    //might change and improve later on
    let sortedArray = [...new Set(unsortedArray)].sort(function(a, b){return a - b});
    //creates the tree 
    function treeMaker(arr, start, end){
        if (start > end) return null;
        let mid = parseInt(end + ((start-end + 1)/2))
        let n = node(arr[mid]);
        if (start == end) return n;
        n.left = treeMaker(arr, start, mid - 1);
        n.right = treeMaker(arr, mid + 1, end);

        return n;
    }

    root = treeMaker(sortedArray, 0, sortedArray.length - 1);

    
    return root;
}
/* A function that constructs Balanced Binary Search Tree 
 from a sorted array 
 function sortedArrayToBST(arr, start, end)
 {
     // Base Case 
     if (start > end)
     {
         return null;
     }
     // Get the middle element and make it root 
     var mid = parseInt((start + end + 1) / 2);
     var n = node(arr[mid]);
     // Recursively construct the left subtree and make it
     // left child of root 
     n.left = sortedArrayToBST(arr, start, mid - 1);
     // Recursively construct the right subtree and make it
     // right child of root 
     n.right = sortedArrayToBST(arr, mid + 1, end);
     return n;
 }
*/
 
const numbers = [9, 5, 1, 7, 2, 12, 8, 4, 3, 11];
buildTree(numbers);

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
prettyPrint(buildTree(numbers));

function preOrder(node)
{
    if (node == null)
    {
        return;
    }
    document.write(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
}

preOrder(buildTree(numbers));
