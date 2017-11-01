// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  // ES6 destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    } 
    console.log('Connected to MongoDB Server');

    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("59e93ef008bd64e1e09e5f49")
    // }, {
    //     $set : {
    //         completed : true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(function(result){
    //     console.log(result);
    // });


    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID("59e947f208bd64e1e09e5f4a")
    // }, {
    //     $set : {
    //         name : "Antonio"
    //     },
    //     $inc : {
    //         age : 1
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(function(result){
    //     console.log(result);
    // });
    




    db.close();
});

