const mongoose = require('mongoose');

const url = 'mongodb+srv://Adarshmishra:1234@cluster0.g5618lc.mongodb.net/postermagic?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;