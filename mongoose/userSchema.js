
var mongoose = require('mongoose');var Schema = mongoose.Schema;var userSchema = new Schema({name: {type: String},lastname: {type: String},email: {type: String, required: true},password: {type: String, required: true},contact: {
phone: [{
pref: {type: String},num: {type: Number}}],address: [{
city: {type: String},num: {type: Number},col: {type: String},dist: {type: String},state: {type: String},country: {type: String},zip_code: {type: String}}]},rol: [{type: Schema.Types.ObjectId, required: true, ref: 'roleSchema'}]}); 