import { App } from './app';

const app = new App();
app.listen(8080, () => { console.log('WebSocket server started at ws://localhost:8080'); });