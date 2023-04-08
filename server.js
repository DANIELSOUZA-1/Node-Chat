import express from 'express'
const app = express()
import path from 'path';
import {fileURLToPath} from 'url';
import WebSocket, { WebSocketServer } from 'ws';


// WebSocket session
const _webSocketServer = new WebSocketServer({ port: 3000 })


_webSocketServer.on("connection", webSocketClient => {
  webSocketClient.on("message", message => {
    const content = JSON.parse(message)

    if (content.type == "message") {
      _webSocketServer.clients.forEach(client => {

        if (client != webSocketClient && client.readyState == webSocketClient.OPEN) {
          client.send(JSON.stringify( { type: "message", data: content.data } ))
        }

      })
    }
    
  })
})


// server session

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5500

app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.sendFile('/', {root: __dirname })
})

app.listen(PORT, () => {
  console.log('Server running on port: ', PORT)
})

