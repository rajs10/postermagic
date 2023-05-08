const {Schema,model} = require('../connection');

const myschema = new Schema({
    video: String
});
module.exports = model('video',myschema);