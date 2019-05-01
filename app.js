// init project
const express = require('express');
const app = express();
const server = require('http').Server(app);


app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

const io = require('socket.io')(server);

io.on('connect', (socket) => {
    console.log('made socket connection ', socket.id);
    socket.on('play1', function(){
        // console.log(data);
        io.sockets.emit('play1');
    });
});

server.listen(3000);