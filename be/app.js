import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoutes from './src/routes/authRoutes.js'; // gina rename ang file
import channelsRoutes from './src/routes/channelsRoutes.js';

dotenv.config();
const PORT = process.env.PORT || process.env.API_PORT;
const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`http://localhost:` + PORT + ' connected to db');
    });
  })
  .catch((err) => {
    console.log('Db and server fail' + err);
  });

app.get('/', (req, res) => {
  return res.json('Hello World');
});

app.use('/api/auth', authRoutes);
app.use('/api/channels', channelsRoutes);

/*basic structure
import express from 'express'; 
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoutes from './src/routes/authRoutes.js'; // gina rename ang file

dotenv.config();
const PORT = process.env.PORT || process.env.API_PORT;
const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`http://localhost:` + PORT + ' connected to db');
    });
  })
  .catch((err) => {
    console.log('Db and server fail' + err);
  });

app.get('/', (req, res) => {
  return res.json('Hello World');
});

app.use('/api/auth', authRoutes);
*/
