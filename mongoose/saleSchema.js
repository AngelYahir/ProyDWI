
var mongoose = require('mongoose');var Schema = mongoose.Schema;var saleSchema = new Schema({status: {type: String},user: {type: objectId, required: true, ref: 'userSchema'},products: [{type: Schema.Types.ObjectId, required: true, ref: 'productSchema'}],total: {type: String}}); 