const findNaNIndex = function(arr){
    var storeIndex = [];
    // loops through each elements and checks if it is equal to the NaN Value
    for (let i=0 ; i < arr.length ; i++){
        if (isNaN(arr[i])) {
            storeIndex.push(i);
        };
    };
    // returns the array of indexes where NaN is found
    return storeIndex; 
};

module.exports = findNaNIndex;