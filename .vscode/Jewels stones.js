var numJewelsInStones = function(jewels, stones) {
    let arr1 = stones.split('');
    let arr2 = jewels.split('');
    
    const countMap = new Map();
    for(let nums1 of arr1){
        if(countMap.has(nums1)){
            countMap.set(nums1, countMap.get(nums1)+1);
        }
        else{
            countMap.set(nums1, 1);
        }
    }
    let i=0;
    let count =0;
    while(i<arr2.length){
        if(countMap.has(arr2[i])){
            let va = countMap.get(arr2[i]);
            count = count + va;
        }
        i+=1;
    }
    return count;
};
console.log(numJewelsInStones("aA", "aaaAAAbbb"));
