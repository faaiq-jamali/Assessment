
const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect(process.env.MONGO_CONN_STRING,
    {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Connected to a database...'))
    .catch(() => console.error('Could not connect to MongoDB..'));
}