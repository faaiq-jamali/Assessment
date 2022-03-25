

module.exports = function(io){
// Chatroom


let numUsers = 0;

io.on('connection', (socket) => {

    // when the client emits 'new message', this listens and executes
    socket.on('New Message', (data) => {
        // we tell the client to execute 'new message'
        socket.broadcast.emit('New Message', data);
    });

})
}