// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  // ES6 destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    } 
    console.log('Connected to MongoDB Server');

    
    // db.collection('Todos').find({}).count().then(function(count){
    //     console.log(`Todos Count: ${count}`);
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, function(err){
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: "Tony Riverol"}).toArray().then(function(docs){
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
    }, function(err){
        console.log("Unable to find Users", err);
    });




    db.close();
});







