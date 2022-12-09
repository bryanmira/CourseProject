const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create schema for todo
const MovieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The movie is required'],
  },
});
// Create model for todo
const Todo = mongoose.model('movies', MovieSchema);
module.exports = Todo;