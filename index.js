//npm install --save express@4.15.2
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
/*
app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});
*/
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//npm install --save socket.io
/*
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
*/

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

/**
The next goal is for us to emit the event from the server to the rest of the users.
In order to send an event to everyone, Socket.IO gives us the io.emit
**/
io.emit('some event', { for: 'everyone' });





http.listen(3000, function(){
  console.log('listening on *:3000');
});
