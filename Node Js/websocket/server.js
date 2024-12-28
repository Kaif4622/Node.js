const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 }, () => {
    console.log('WebSocket server is running on ws://localhost:8080');
});

wss.on('connection', (ws)=> {
    console.log("New client is connected....")
    
    ws.send("Hello from server")

    ws.on('message', (message)=> {
        console.log(`From Client: ${message}`)
    })

    ws.on('close', ()=> {
        console.log("Client disconnected")
    })
})