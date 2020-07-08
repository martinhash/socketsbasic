const { io } = require('../server')


io.on('connection', (client) => {
    client.on('sendMessage', (data, callback) => {
        client.broadcast.emit('sendMessage', data)
    })
})