var socket = io();

socket.on('connect', function(){
    console.log("Conectado el cliente");
})
socket.on('disconnect', function(){
    console.log("Desconectando el cliente");
})

socket.emit('sendMessage', {
    user: '',
    message: 'Hola socket!!!'
}, function(resp){
    console.log("Message from server: ", resp);
})

socket.on('sendMessage', function(message){
    console.log("Servidor: ", message);
})