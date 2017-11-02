const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
var {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());


app.post('/todos', function(req, res){
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then(function(doc){
        res.send(doc);
    }, function(err){
        res.status(400).send(err);
    });
});


app.get('/todos', function(req, res){
    Todo.find().then(function(todos){
        res.send({todos});
    }, function(err){
        res.status(400).send(err);
    });
});


app.get('/todos/:todoID', function(req, res){
    var id = req.params.todoID;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then(function(todo){
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo : todo});
    }).catch(function(err){
        res.status(400).send();
    })
});

app.delete('/todos/:todoID', function(req, res){
    var id = req.params.todoID;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then(function(todo){
        if(!todo){
            return res.status(404).send();
        }
        res.send(todo);
    }).catch(function(err){
        res.status(400).send();
    })
});

app.patch('/todos/:todoID', function(req, res){
    var id = req.params.todoID;
    var body = _.pick(req.body, ['text', 'completed']);
    var d = new Date();
    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = d.getTime();
    } else{
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(function(todo){
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch(function(err){
        res.status(400).send();
    })
});







app.listen(port, function(){
    console.log(`Started on port ${port}`);
});

module.exports = {app};
