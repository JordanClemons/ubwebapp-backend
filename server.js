const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketio = require('socket.io')
const http = require('http');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const server = http.createServer(app);
const io = socketio(server);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users'); 
const classesRouter = require('./routes/classes');
const assgRouter = require('./routes/assg');
const notiRouter = require('./routes/noti');




app.use('/users', usersRouter);
app.use('/classes',classesRouter);
app.use('/assg', assgRouter);
app.use('/noti', notiRouter);


io.on('connection', (socket) => {
  console.log('We have a new connection!');

  socket.on('send-message', message => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('User has left');
  })
});

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
