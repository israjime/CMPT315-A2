
const findNaNIndex = require('./findNaNIndex');

module.exports = {
    findNaNIndex,
}


// Test Data :
const results1 = findNaNIndex([2, NaN, 8, 16, 32]) // => [1]
// const results1 = _.findNaNIndex([2, 4, NaN, 16, 32, NaN]) // => [2,5]
// const results1 = _.findNaNIndex([2, 4, 16, 32]) // => []
console.log(results1)