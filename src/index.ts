// import express from 'express';

// const app = express();
// const port = 8080;

// const data: string[] = [];

// app.get("/", (req, res) => {

//     res.writeHead(200, {
//         Connection: "keep-alive",
//         "Content-Type": "text/event-stream",
//         "Cache-Control": "no-cache"
//       });

//       let sessionData = data.slice();
//       data.forEach((d) => res.write(`${d}\n`));

//       setInterval(() => {
//         const atIntervalData = data.slice();
//         if (atIntervalData.length != sessionData.length) {
//             const intervalData = atIntervalData.slice(sessionData.length);
//             intervalData.forEach((d) => res.write(`${d}\n`));
//         }
//         sessionData = atIntervalData;
//       }, 100);
// })
// .get("/write", (req, res) => {
//     data.push(`${new Date()}: ${data.length}`);
//     res.status(200).send("Added!");
// });

// app.listen(port, () => {
//     console.log(`Server started at http://localhost:${port}`);
// });

import { App } from './app';

new App();