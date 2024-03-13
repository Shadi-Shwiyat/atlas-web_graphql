// Model for projects on
// mongoose connection to mongoDB
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    weight: Number,
    description: String,
    projectID: Number,
});

module.exports = mongoose.model('Project', projectSchema);
