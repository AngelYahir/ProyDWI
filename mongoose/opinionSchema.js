
var mongoose = require('mongoose');var Schema = mongoose.Schema;var opinionSchema = new Schema({user: {type: objectId, required: true, ref: 'userSchema'},score: {type: Schema.Types.Decimal128},comment: {type: String}}); 