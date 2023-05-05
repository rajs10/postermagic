const mongoose = require('mongoose');

const url = 'mongodb+srv://Adarshmishra:adarsh123@cluster0.g5618lc.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;