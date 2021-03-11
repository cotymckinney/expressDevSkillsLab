// EXPORTED FUNCTIONS/METHODS FROM MODULE
module.exports = {
    getAll,
    getOne
   };

// "DATABASE"
const cats = [
    {breed: 'Persian', sex: 'Female', name: 'Winnie', img: 'https://bit.ly/38u2OPY'},
    {breed: 'Maine Coon', sex: 'Female', name: 'Diva', img: 'https://bit.ly/3rF4aPw'},
    {breed: 'Bengal', sex: 'Male', name: 'Barry', img: 'https://bit.ly/3ciNvuC'}
];

// MODULE FUNCTIONS
function getAll(id) {
    return cats;
}

function getOne(id) {
    return cats[id];
}