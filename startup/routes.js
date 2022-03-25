const users = require('../routes/users');
const message = require('../routes/message');

module.exports = function(app){
    app.use('/api/user', users);
    app.use('/api/message', message);
}