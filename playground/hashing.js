const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



var password = '123abc!';

// bcrypt.genSalt(10, function(err, salt){
//     bcrypt.hash(password, salt, function(err, hash){
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$gjd4dBHyJvykBfeA.9R6/uRvS.SdWe05k3lcCFUIMeo4k3f2eHkgi';

bcrypt.compare(password, hashedPassword, function(err, res){
    console.log(res);
});












// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded: ', decoded);

//--------------------------------------------------

// var message = "I am user number 3";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id : 4
// };
// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

//-------------------------------------------------------------------

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('data was not changed');
// } else{
//     console.log('data was changed, don\'t trust it');
// }