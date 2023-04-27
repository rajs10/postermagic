const mongoose = require('mongoose');

const url = 'mongodb+srv://rajs10102002:Raj2002@cluster0.gvyon.mongodb.net/postermagic?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;