const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Azure sets the PORT automatically

app.get('/', (req, res) => {
  res.send('Hello from Node.js on Azure App Service!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

