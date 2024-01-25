# CMPT 315 Assignment 2
Develop a basic JavaScript library similar to Lodash that provides functions to manipulate arrays and objects.
## Purpose
To learn how to code in JavaScript and publish NPM library. 
**Intended for learning purposes only**
## Usage
**Install it:**
`npm install @ij23/CMPT315-A2`
**Require it:**
`const _ = require('@ij23/CMPT315-A2');`
**Call it:**
`const results1 = _.findNaNIndex([2, NaN, 8, 16, 32]) `
## Documentation
The following functions are currently implemented:
* `findNaNIndex(arr) `: finds indexes of NaN in an array.
* `biggestLoser(matches)`: finds the participant with the most losing points
* `countNumberOfArrays(arr)`: counts the number of arrays in the array
* `isArrayFactorChain(arr)`: checks if each number is factor of the previous number.
* `participants(matches)`: lists all partipants of all matches
* `winnersObject(matches)`: lists all opponents beaten for each participant. 