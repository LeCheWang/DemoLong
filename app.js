const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

const connectDB = require('./configs/database');
const router = require('./routers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./uploads"));

app.set('view engine', 'ejs');
app.set('views', './views');

io.on('connection', function(client){
  console.log("có người kết nối");
  let room;
  client.on("join", (data) => {
    room = data;
    client.join(room);
  })

  client.on('message', (data) => {
    io.to(room).emit("thread", data);
  })
})

app.get("/chat-app", (req, res) => {
  return res.render("index.ejs");
})

connectDB();
router(app);

server.listen(5000, () => {
  console.log('server run at port 5000');
});
