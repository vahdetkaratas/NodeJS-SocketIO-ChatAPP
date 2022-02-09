var express=require('express');
var socket=require('socket.io');

var app=express();
var server=app.listen(4000,function(){
    console.log('Port 4000 dinleniyor');
    
})

app.use(express.static('public'));

var io=socket(server);

io.on('connection',function(socket){
    console.log('Socket baglantısı yapıldı.',socket.id);

    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    
    socket.on('yaziyor', function(data){
        socket.broadcast.emit('yaziyor', data);
    });

})