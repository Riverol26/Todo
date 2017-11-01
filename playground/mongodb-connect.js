// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, objectID} = require('mongodb');  // ES6 destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    } 
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, function(err, result){
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert a new doc into the Users Collection

    // db.collection('Users').insertOne({
    //     name: 'Tony Riverol',
    //     age: 23,
    //     location: "Miami, FL"
    // }, function(err, result){
    //     if(err){
    //         return console.log('Unable to insert User', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });



    db.close();
});







