import internalIp from 'internal-ip';
import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// Initializing Server
const app = express();
const server = http.Server(app);
const port = process.env.PORT || 3002;
server.listen(port);
console.log(`Server running at http://${internalIp.v4.sync()}:${port}/`);

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
