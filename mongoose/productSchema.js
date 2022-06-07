
var mongoose = require('mongoose');var Schema = mongoose.Schema;var productSchema = new Schema({name: {type: String, required: true},description: {type: String, required: true},condition: {type: Boolean, required: true},price: {type: Schema.Types.Decimal128, required: true},size: [{type: String}],color: [{
name: {type: String},productImages: [{
image_url: {type: String},public_id: {type: String}}]}],stock: [{type: String, required: true}],questions: [{type: Schema.Types.ObjectId, ref: 'questionSchema'}],opinion: [{type: Schema.Types.ObjectId, required: true, ref: 'opinion'}]}); 