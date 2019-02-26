// necessary boilerplate
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    console.log('a user connected');
});

http.listen(3000, function() {
    console.log('listening on port 3000');
});
