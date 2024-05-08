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
  
  cookie: {maxAge: 60 * 60 * 1000, secure:false, httpOnly: false}
};


//cors設定
const options: cors.CorsOptions = {
  origin: ['http://localhost:5143', 'http://192.168.101.63:5173/*', 'http://localhost:5143/Main', 'http://192.168.101.63:5173/Main']
};

//cors対策
app.use(cors())

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Content-Type, Authorization, access_token'
//   )
//   next()
// })

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(session_opt));

app.use('/session', cors(options), createSession());
app.use('/login',cors(options), login());


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));