const isArrayFactorChain = function(arr){
    //  sets the first number of array to start
    var a = arr[0];
    // goes through each value and checks if the division is an integer
    //  this should indicate that the previous number is a factor
    for (let i=1 ; i < arr.length ; i++){
        var b = arr[i];
        var c = (b/a);
        if (Number.isInteger(c)){
            a = b;
        }else{
            // if this fails at any time, automatically return false.
            return false
        }
    }
    // if it makes it to the end, return true.
    return true
};

module.exports = isArrayFactorChain;

