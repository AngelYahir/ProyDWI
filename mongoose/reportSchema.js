
var mongoose = require('mongoose');var Schema = mongoose.Schema;var reportSchema = new Schema({product: {type: Schema.Types.ObjectId, required: true, ref: 'productSchema'}}); 