const express = require('express');
const app = express();
const port = 2000;
const cors = require('cors');
const util = require('util');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended : false }));

app.get('/', (req,res) => {
    res.status(200).send(`<h1>API is Working</h1>`)
});

const {
    movieRouter,
    categoryRouter,
    movcatRouter
} = require('./router');

app.use('/movie', movieRouter);
app.use('/category', categoryRouter);
app.use('/movcat', movcatRouter);

app.listen(port, () => console.log(`API active at port ${port}`));