const WebSocket = require('ws');

// Connect to the WebSocket server
const ws = new WebSocket('ws://localhost:8080');

ws.on('open', ()=> {
    console.log("Connected to the server")
    ws.send("Hello from client")

    ws.on('message', (message)=> {
        console.log(`From server: ${message}`)
    })

    ws.on('close', () => {
        console.log("Disconnected from server")
    })

    ws.on('error', (error) => {
        console.log(`websocket error: ${error}`)
    })
})