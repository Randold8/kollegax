const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

// Handle root path specially
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle all other paths with redirect
app.get('/*', (req, res) => {
  const path = req.path;
  res.redirect(`https://x.com${path}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
