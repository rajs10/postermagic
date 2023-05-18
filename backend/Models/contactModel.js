const {Schema,model} = require('../connection');

const myschema = new Schema({
    name :String,
    email : String,
    message : String,
});
module.exports = model('contact',myschema);