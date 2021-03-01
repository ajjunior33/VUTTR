require('dotenv').config();
const http = require('http');
const app = require('./app/app');

const server = http.Server(app);
const port = process.env.PORT || 3000;
server.listen(port, () =>{
    console.log(`Server Running in port ${port}`)
});