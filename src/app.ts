import { createServer } from 'http';
import WebSocket, { Server } from 'ws';

class App {
    constructor() {
        const server = createServer();
        const wsServer = new Server({ server });
        
        wsServer.on('connection', (ws: WebSocket) => {
            console.log('connected!');
            //connection is up, let's add a simple simple event
            ws.on('message', (message: string) => {
        
                //log the received message and send it back to the client
                console.log('received: %s', message);
                ws.send(`Hello, you sent -> ${message}`);
            });
        
            //send immediatly a feedback to the incoming connection    
            ws.send('Hi there, I am a WebSocket server');
        });
        
        server.listen(8081, () => {
            console.log('Server started on at http://localhost:8081');
        }); 
    }
}

export { App };