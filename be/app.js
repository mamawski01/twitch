import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { Socket } from 'socket.io';

import authRoutes from './src/routes/authRoutes.js'; // gina rename ang file

dotenv.config();
const PORT = process.env.PORT || process.env.API_PORT;
const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});

app.get('/', (req, res) => {
  return res.json('Hello World');
});

app.use('/api/auth', authRoutes);
