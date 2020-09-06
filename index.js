const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/main.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
