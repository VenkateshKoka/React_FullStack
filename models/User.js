/**
 * Created by venkateshkoka on 10/7/17.
 */
const mongoose = require('mongoose');


//const Schema = mongoose.Schema;
// above and below lines of code are the same.
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId : String
});

mongoose.model('users',userSchema);