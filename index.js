const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("client-message", (msg) => {
    console.log(msg);
    io.emit("server-message", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
