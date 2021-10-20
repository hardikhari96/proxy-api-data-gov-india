const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use('/api', require('./router/router'));

app.listen(process.env.PORT, () => {
    console.log('Proxy server started', process.env.PORT);
})