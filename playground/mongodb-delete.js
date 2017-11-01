// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  // ES6 destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    } 
    console.log('Connected to MongoDB Server');

    
   
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then(function(result){
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: "Eat Lunch"}).then(function(result){
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then(function(result){
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: "Tony Riverol"}).then(function(result){
    //     console.log("deleted");
    // });

    // db.collection('Users').findOneAndDelete({_id : new ObjectID("59e92c082df1c2073c490b15")}).then(function(result){
    //     console.log(JSON.stringify(result, undefined, 2));
    // });







    db.close();
});

