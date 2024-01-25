const countNumberOfArrays = function(arr){
    // keeps track of number of arrays
    var count = 0;
    
    for (let i=0 ; i < arr.length ; i++){
        // checks type of object, if an array, add one to count.
        if ((Array.isArray(arr[i]))){
            count += 1;
        }
    }
    return count;
};

module.exports = countNumberOfArrays;