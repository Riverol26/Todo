const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(function(result){
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove('59fa0b20ef180a86abdb9327').then(function(todo){
    console.log(todo);
})

Todo.findByIdAndRemove('59fa0b20ef180a86abdb9327').then(function(todo){
    console.log(todo);
});