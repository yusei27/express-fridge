import express from 'express';
import cors from "cors";
const app = express();
const port = 3000;

import session, { SessionOptions } from 'express-session';
import { createSession } from './routes/session';
import { login } from './routes/login';


//session設定
declare module 'express-session' {
  interface SessionData {
      name: string;
  }
}

var session_opt:SessionOptions = {
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60 * 60 * 1000, secure:false}
};


//cors設定
const options: cors.CorsOptions = {
  origin: ['http://localhost:5143']
};

//cors対策
app.use(cors())

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(session_opt));

app.use('/session', createSession());
app.use('/login', cors(options),login());


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));