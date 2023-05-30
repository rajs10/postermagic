const {Schema,model, Types} = require('../connection');

const myschema = new Schema({
    image :{type : Types.ObjectId, ref : 'image'},
    video :{type : Types.ObjectId, ref : 'video'},
    pattern :String,
    user :{type : Types.ObjectId, ref : 'user'},
    createdAt : Date,
});
module.exports = model('marker',myschema);