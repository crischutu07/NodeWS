import { WebSocketServer } from "ws";
const getPort = 3000
const server = new WebSocketServer({ port: getPort });
var nums = Math.floor(Math.random() * 100)
var name = `username${nums}`
server.on("connection", (socket) => {
  socket.send(JSON.stringify({
    type: `Connected`,
    content: [ 1, "2" ]
}));

  // receive a message from the client
socket.on("message", (data) => {
    const packet = JSON.parse(data);
        console.log(packet.type);
        return
  });
});
