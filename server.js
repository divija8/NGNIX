const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const replicaApp = process.env.APP_NAME

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('Request served by node app ' + replicaApp);
});

app.listen(port, () => {
    console.log(`Server is running on ${replicaApp} and port is ${port}`);
});