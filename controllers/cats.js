// Require model
const Cat = require('../models/cat');

// Export of index controller
module.exports = {
    index,
    show
}

// Controller functions
function index(req, res) {
    res.render('cats/index', {
        cats: Cat.getAll()
    });
};

function show(req, res) {
    res.render('cats/show', {
        cat: Cat.getOne(req.params.id),
        catNum: parseInt(req.params.id) + 1
    });
};