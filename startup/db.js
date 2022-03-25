
const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb+srv://testmongo:test123@cluster0.r9gmm.mongodb.net/chat?retryWrites=true&w=majority',
    {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Connected to a database...'))
    .catch(() => console.error('Could not connect to MongoDB..'));
}