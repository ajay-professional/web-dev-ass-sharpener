var minimum_in_BST=function(root){
    let curr=root;
    if(curr.left!==null){
        let min=curr.left.value;
        let curr_r=(curr.left).right;
        while(curr.left!==null){
            curr=curr.left;
            curr_r=(curr.left).right;
            if(curr.value<min){
                min=curr.value;
            }
        }
        while(curr_r!==null){

        }
        
    }
}