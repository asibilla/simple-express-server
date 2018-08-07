const express = require('express');
const path = require('path');
const middleware = require('./middleware');


const app = express();

app.use(express.static('dist'))
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../dist', 'index.html')));

app.get('/content', (req, res) => {
  let contentJson = middleware.getContent(req.query.id || 0);
  res.json(contentJson);
});

app.listen(8080, () => console.log(`Example app listening on port 8080`));
