import path from 'path';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

/** CONSTANTS */
const PORT = 9000;
const server = express();

server.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<StaticRouter location={req.url}><App /></StaticRouter>);
  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

server.use(express.static('./build'));

server.listen(PORT, () => {
  console.log("\x1b[35m", `
  -----------------LOG_INFO-----------------
  
      Running App at port: ${PORT} 🚀
  
  ------------------------------------------
  `);
});
