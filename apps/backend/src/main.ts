import * as express from 'express';
import upload from './upload';
import * as cors from 'cors';

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.post('/upload', upload);

app.get('/', (req, res) => {
  res.send(`Welcome to backend!`);
});

const port = 8000;
app.listen(port, err => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});
