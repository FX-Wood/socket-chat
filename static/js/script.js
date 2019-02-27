var socket = io();

document.addEventListener('DOMContentLoaded', function(e) {
    var form = document.forms[0]
    var nameInput = document.getElementById('name')
    var msgBox = document.getElementById('msgBox');
    var chatLog = document.getElementById('chatlog')

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let msg = msgBox.value;
        let name = nameInput.value;
        socket.emit('send-chat', {name, msg});

    })
    socket.on('receive-chat', function(msg) {
        console.log('receive-chat', msg)
        var li = document.createElement('li');
        li.textContent = `${msg.name} : ${msg.msg}`;
        chatLog.appendChild(li);
    });

})