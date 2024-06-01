/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let finalArray = []

    let totalDivisions; // Total divisions that should be made in the array
    
    if(arr.length <= size){
        finalArray.push(arr)
    }else{
        totalDivisions = Math.ceil(arr.length / size)
        
        let lastReachedIndex = 0;

        //run a loop for totalDivisions time
        for(let i=0; i<totalDivisions; i++){
            let subarray = arr.slice(lastReachedIndex, Math.min(lastReachedIndex+size, arr.length))
            finalArray.push(subarray)
            lastReachedIndex = Math.min(lastReachedIndex+size, arr.length)
        }
    }

    return finalArray

};


console.log(chunk([1,2,3,4,5], 3))
