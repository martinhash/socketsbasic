const { io } = require('../server')


io.on('connection', (client) => {
    client.on('sendMessage', (message, callback) => {
        console.log(message);
        if(message.user){
            callback({
                ok: true,
                resp: "Todo salio OK."
            })
        }else{
            callback({
                ok: false,
                resp: "Todo salio MAL!!!!!!"
            })
        }
    })
})