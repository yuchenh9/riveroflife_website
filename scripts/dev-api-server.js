const path = require('path');
const express = require('express');
const { registerImageRoutes } = require('../server/imageApiRoutes');

const app = express();
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const API_PORT = 3002;

registerImageRoutes(app, PUBLIC_DIR);

app.listen(API_PORT, () => {
  console.log(`Image API server running on http://localhost:${API_PORT}`);
});
