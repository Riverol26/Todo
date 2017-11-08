var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,  // maxlength is also available
        trim: true // removes leading or trailing white space
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator:{
        type: mongoose.Schema.Types.ObjectId,  // so that they can be compared
        required: true,
    }
 });

module.exports = {Todo};