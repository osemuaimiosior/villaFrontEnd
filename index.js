require('dotenv').config();
require('events').EventEmitter.defaultMaxListeners = 0
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 1200;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(PORT, () => {console.log(`Server listerning on port ${PORT}`)});