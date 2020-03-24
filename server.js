const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Api running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
