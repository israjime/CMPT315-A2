const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]

const biggestLoser = function(matches){
    // this keeps track of the number of losses points
    const losses = 
    {
        'Alice': 0,
        'Bob':   0,
        'Carol': 0,
        'Dean':  0,
        'Elise': 0,
    }
    // loop to go through each match
    for (let i=0 ; i < matches.length ; i++){
        var a = matches[i].winner;
        var b = matches[i].loser;
        var c = matches[i].loser_points;
        // subtracts losing points if person is a winner 
        losses[a] -= c; 
        // adds losing points if person is a loser
        losses[b] += c;
    }
    // initializing the loser
    var loser = 'Alice';
    // compares the losing values stored with each name and sets loser to the one 
    // with the highest losing points
    for (i in losses){
        if (losses[loser]<losses[i]){
            loser = i;
        }
    }
    return loser;
};

module.exports = biggestLoser;