const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59f8b1559272c92bb800b89311';  // an id from the db

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id // mongoose will take the string and turn it into an object id
// }).then(function(todos){
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then(function(todo){
//     console.log('Todo', todo);
// });

// Todo.findById(id).then(function(todo){
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch(function(err){
//     console.log(err);
// })



// var id = '59ef9c29667f7e2840a75265';

// User.findById(id).then(function(user){
//     if(!user){
//         return console.log('User not found');
//     }
//     console.log(JSON.stringify(user, undefined, 2));
// }).catch(function(err){
//     console.log(err);
// });
