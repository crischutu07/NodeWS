import { WebSocket } from "ws"
import promptSync from 'prompt-sync';
const prompt = promptSync();

const socket = new WebSocket("ws://localhost:3000");
const username = process.argv[2]
const content = process.argv[3]
socket.addEventListener("open", () => {
  // send a message to the server
    socket.send(JSON.stringify({
      type: `${username} Connected!\n${username}: ${content}`,
      content: [ 3, "4" ]
    }));
  });
// receive a message from the server
socket.addEventListener("message", ({ data }) => {
  const packet = JSON.parse(data);
      console.log(packet.type);
})
