// Model for task on
// mongoose connection to mongoDB
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    weight: Number,
    description: String,
    projectID: Number,
});

module.exports = mongoose.model('Task', taskSchema);
