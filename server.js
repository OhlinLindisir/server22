const PORT = 80;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { Server } = require("socket.io");

const {createServer} = require('node:http');
const {join} = require('node:path');

app.use(bodyParser.json());
app.use(cors());
const server = createServer(app);
const io = new Server(server);


const position = {
    x: 10,
    y: 10,
    z: 10
}

//pp helllo


app.get("/get-position", (req, res) =>{
    res.json(position);
});

app.get('/',(req, res)=>{
    res.send('<html style="background:Black; color: white;font-family: Arial, Helvetica, sans-serif;">hello world<html>');
});


io.on('connection',(socket)=>{
    console.log('a user connected');
});




server.listen(PORT, async () =>{
    console.log(`Server running on port ${PORT}`);
});

console.log('hello');