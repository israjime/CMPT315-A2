
const findNaNIndex = require('./findNaNIndex');
const isArrayFactorChain = require('./isArrayFactorChain');
const countNumberOfArrays= require('./countNumberOfArrays');
const participants = require('./participants');
const winnersObject = require('./winnersObject');
const biggestLoser = require('./biggestLoser');

module.exports = {
    findNaNIndex,
    isArrayFactorChain,
    countNumberOfArrays,
    participants,
    winnersObject,
    biggestLoser
};


// Test Data :

// const results1 = _.findNaNIndex([2, NaN, 8, 16, 32]) // => [1]
// const results1 = _.findNaNIndex([2, 4, NaN, 16, 32, NaN]) // => [2,5]
// const results1 = _.findNaNIndex([2, 4, 16, 32]) // => []
// const data = [2, 4, 8, 16, 32]
// // 2 is a factor of 4
// // 4 is a factor of 8
// // 8 is a factor of 16
// // 16 is a factor of 32
// // therefore the result is true
// const results1 = _.isArrayFactorChain([2, 4, 8, 16, 32]) // => true
// const results2 = _.isArrayFactorChain([2, 4, 8, 16, 32, 68]) // => false
// const results1 = _.biggestLoser(matches) // => 'Bob',
// const results1 = _.winnersObject(matches) 
// const results1 = _.participants(matches) // => ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']
