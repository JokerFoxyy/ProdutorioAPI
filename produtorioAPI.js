const express = require('express');
const app = express();
const port = 3000;

function produtorio(m) {
  let r = 1;
  for (let i = 0; i < m; i++) {
    i += 1;
    r = r * ((i + 1) / i);
  }
  return {
    result: r
  };
}

app.get('/produtorio/:m', (req, res) => {
  const m = parseInt(req.params.m);
  const result = produtorio(m);
  res.json(result);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});