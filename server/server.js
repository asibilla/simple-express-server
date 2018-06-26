import express from 'express';
import cors from 'cors';
import { corsOptions } from './config';
import { getData } from './middleware';


const app = express();

app.use(cors(corsOptions));


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/data', (req, res) => {
  let userData = getData(req);
  res.json(userData);
});

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}`));
