const express=require('express');
var socket=require('socket.io');
var app=express();
var server=app.listen(3000,()=>{
  console.log('starting the server');
});


//static files
app.use(express.static('public'));


//creating connection
var io=socket(server);


//for listening to connections
io.on('connection',function(socket){
  console.log("connection was established");


//for recieving from front end and then emitting to it
  socket.on('chat',function(data){
    io.sockets.emit('chat',data);
  });
  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data);
  });

});
