const express = require('express');
const app = express();
const port = 3000;

function produtorio(m, n, recursive = false) {
  if (recursive) {
    if (n >= m) {
      return 1;
    }
    return ((n + 1) / n) * produtorio(m, n + 1, recursive);
  } else {
    let r = 1;
    for (let i = n; i < m + n; i++) {
      r = r * ((i + 1) / i);
    }
    return r;
  }
}

app.get('/produtorio/:m/:n/:recursive?', (req, res) => {
  const m = parseInt(req.params.m);
  const n = parseInt(req.params.n);
  const recursive = req.params.recursive === 'true';
  const result = produtorio(m, n, recursive);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
