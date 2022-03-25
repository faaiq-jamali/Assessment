const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "http://52.15.194.62",
      methods: ["GET", "POST"],
      credentials: true
    }
  });
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});
// Routing
app.use(cors({
  origin: 'http://52.15.194.62'
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require('./startup/routes')(app);
require('./startup/db')();
require('./startup/socket')(io);

