let app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
app.get('/', (req, res) => {
  res.send('hello world');
});

io.on('connection', socket => {
  console.log('user connected');
  socket.on('chat message', function(msg) {
    console.log(`messge: ${JSON.stringify(msg)}`);
    io.emit('chat message', msg);
  });
});

const PORT = 5002;
http.listen(PORT, () => {
  console.log('Server is Running on ' + PORT + '...');
});
