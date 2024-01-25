const findNaNIndex = function(arr){
    var storeIndex = [];
    for (let i=0 ; i < arr.length ; i++){
        if (isNaN(arr[i])) {
            storeIndex.push(i);
        };
    };
    return storeIndex;
};

module.exports = findNaNIndex;