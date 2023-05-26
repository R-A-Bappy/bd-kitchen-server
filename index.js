const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

const data = require('./data.json');

app.get('/', (req, res) => {
    res.send(data);
})

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedData = data.find(d => parseInt(d.id) === id);
    res.send(selectedData);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})