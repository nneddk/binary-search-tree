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
        this.array = root;
        this.root = buildTree(root);


    }
    print(fNode){
        function prettyPrint(node, fNode, prefix = '', isLeft = true){
            if (node.right !== null) {
              prettyPrint(node.right, fNode, `${prefix}${isLeft ? '│   ' : '    '}`, false);
            }
            console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data==fNode?'['+node.data+']':''+node.data}`);
            if (node.left !== null) {
              prettyPrint(node.left, fNode, `${prefix}${isLeft ? '    ' : '│   '}`, true);
            }
          }
        prettyPrint(this.root, fNode);
    }
    printArray(){
        //prints array containing tree values, **it is not sorted, it gets sorted when placed inside the tree** 
        //for debug purposes only
        console.log(this.array);
    }
    insert(v){
        //this rebuilds the entire tree SO it can be so much faster, but this works
        this.array.push(v)
        this.root = buildTree(this.array);
    }
    delete(v){
        if (this.array.indexOf(v) > -1){
            this.array.splice(this.array.indexOf(v), 1);
            this.root = buildTree(this.array);
        }
    }
    
    find(v){
        this.print(v);
        /*
        function finder(root, v){
            //apologies for the if monster, but this should work
            if(root.data == v){
                return console.log('node found at: ', root);
            }
            if (root.left == null||root.right == null){
                return;
            }
            if (v < root.data){
                finder(root.left, v);
            }else if(v > root.data){
                finder(root.right, v);
            }
            
        }
        finder(this.root, v);
        */
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

const numbers = [1, 2, 3, 4, 5, 6, 7];
let example = new tree(numbers);

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
