const express = require('express');

// Init app
const app = express();

app.listen(4000, () => {
  console.log('Checkin app running on port 4000');
});