

var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({}, {
    strict: false
})

module.exports = mongoose.model("user", UserSchema)