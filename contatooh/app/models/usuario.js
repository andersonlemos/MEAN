/**
 * Created by anderson on 23/05/15.
 */
var mongoose =  require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function(){
    var schema = mongoose.Schema({
        login:{
            type: String,
            required: true,
            index:{
                unique: true
            }
        },
        nome:{
            type: String,
            required: true
        },
        inlcusao:{
            type: Date,
            default: Date.now()
        }
    });
    schema.plugin(findOrCreate);
    return mongoose.model('Usuario',schema);
};