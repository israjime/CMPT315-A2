const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]

const participants = function(matches){
    // stores list of all people
    var people = [];
    for (let i=0 ; i < matches.length ; i++){
        var a = matches[i].winner;
        var b = matches[i].loser;
        //  to ensure no duplicates
        if (!(people.includes(a))){
            people.push(a);
        }
        if (!(people.includes(b))){
            people.push(b)
        }
    }

    return people;
};

module.exports = participants;
