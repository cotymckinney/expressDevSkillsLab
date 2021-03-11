// EXPORTED FUNCTIONS/METHODS FROM MODULE
module.exports = {
    getAll,
    getOne
   };

// "DATABASE"
const skills = [
    {unit: 'One', name: 'HTML', img: 'https://bit.ly/30zYZo6'},
    {unit: 'One', name: 'CSS', img: 'https://bit.ly/3cmpT8z'},
    {unit: 'One', name: 'JavaScript', img: 'https://bit.ly/2OL7cmy'},
    {unit: 'One', name: 'AJAX', img: 'https://bit.ly/3t8Xdqe'}
];

// MODULE FUNCTIONS
function getAll(id) {
    return skills;
}

function getOne(id) {
    return skills[id];
}