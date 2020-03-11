import { createServer, Server } from 'http';
import WebSocket, { Server as WebSocketServer } from 'ws';

class App {
    private data: string[] = [];

    private onMessage = (message: string) => {
        this.data.push(message);
    }

    private onConnection = (webSocket: WebSocket) => {
        webSocket.on('message', this.onMessage);

        let sessionData = this.data.slice();
        sessionData.forEach((d) => {
            webSocket.send(d);
        });

        setInterval(() => {
            const atIntervalData = this.data.slice();
            if (atIntervalData.length != sessionData.length) {
                const intervalData = atIntervalData.slice(sessionData.length);
                intervalData.forEach((d) => webSocket.send(d));
            }
            sessionData = atIntervalData;
        }, 100);
    }

    listen(port: number = 8080, listeningListener: () => void ): Server {
        const server = createServer();
        const webSocketServer = new WebSocketServer({ server });

        webSocketServer.on('connection', this.onConnection);

        return server.listen(port, listeningListener);
    }
}

export { App };