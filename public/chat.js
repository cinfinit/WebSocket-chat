
//for connecting to the particular part
var socket=io.connect('http://localhost:3000');


var handle=document.getElementById('handle');
var message=document.getElementById('message');
var btn=document.getElementById('send');
var output=document.getElementById('output');
var feedback=document.getElementById('feedback');


//event listener for button
btn.addEventListener('click',function(){
  socket.emit('chat',{
    message:message.value,
    handle:handle.value
  });
});
//event listener for keypress
message.addEventListener('keypress',function(){
  socket.emit('typing',handle.value);
});

//listen for events(for displaying on the front end part )
socket.on('chat',function(data){
  feedback.innerHTML="";
  output.innerHTML+='<p><strong>'+data.handle+':</strong>'+data.message+'</p>';
});

socket.on('typing',function(data){
  feedback.innerHTML='<p><em>'+data+' is typing a message...'+'</em></p>';
});
