
var mongoose = require('mongoose');var Schema = mongoose.Schema;var questionSchema = new Schema({user: {type: objectId, required: true, ref: 'userSchema'},comment: {type: String},answer: {
answer: {type: String}}}); 