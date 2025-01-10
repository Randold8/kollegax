const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/*', (req, res) => {
  const path = req.path;
  res.redirect(`https://x.com${path}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
