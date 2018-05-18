const express = require('express');

const PORT = 3000;

const app = express();

app.use(express.static('./www'));

app.listen(PORT, () => console.log('🌎  Server listening on port:', PORT));
