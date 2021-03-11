// Require model
const Skill = require('../models/skill');

// Export of index controller
module.exports = {
    index,
    show
}

// Controller functions
function index(req, res) {
    res.render('skills/index', {
        skill: Skill.getAll()
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
};