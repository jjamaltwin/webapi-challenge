const express = require('express');
const server = express();
const actionRouter = require('./actionRouter')
const projectRouter = require('./projectRouter')



server.use(express.json())

// Routes

server.use('/api/actions', actionRouter)
server.use('/api/projects', projectRouter)

server.get("/", (req, res) => {
    res.send(`
    <h2> Sprint Webapi Challenge </h2>
    <p> Jason Holloway </p>
    
    `);
});



module.exports = server 