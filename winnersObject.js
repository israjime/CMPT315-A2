const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]

const winnersObject = function(matches){
    // stores a list of people they beat.
    const wins = 
        {
            'Alice': [],
            'Bob':   [],
            'Carol': [],
            'Dean':  [],
            'Elise': [],
        }
    
    for (let i=0 ; i < matches.length ; i++){
        var a = matches[i].winner;
        var b = matches[i].loser;
        // access the winner in wins and checks if the person already exist,
        // if not, add to list
        if (!(wins[a].includes(b))){
            wins[a].push(b);
        }
    }
    return wins;
};

module.exports = winnersObject;