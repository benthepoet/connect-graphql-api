const connect = require('connect');
const connectRoute = require('connect-route');
const http = require('http');

const auth = require('./auth');
const graphql = require('./graphql');

const app = connect();

app.use(connectRoute(auth));
app.use(connectRoute(graphql));

http
    .createServer(app)
    .listen(8080, () => console.log('API ready'));

