// necessary boilerplate
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.use(express.static('static'))

app.get('/', function(req,res) {
    console.log('GET /', req.originalURL)
    res.render('index');
})

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('send-chat', function(package) {
        console.log('send-chat', package)
        io.emit('receive-chat', package);
    })












});

http.listen(3000, function() {
    console.log('listening on port 3000');
});
