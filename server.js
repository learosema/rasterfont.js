const HOST = '0.0.0.0';
const PORT = 1337;

const express = require('express');
const app = express();
app.use(express.static('.'));

app.listen(PORT, HOST, () => console.log(`Server listening at https://${HOST}:${PORT}/`));
