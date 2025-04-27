import express from 'express';
import { connectDB } from './config/dbConfig.js';
import apiRouter from './routers/apiRouter.js';
import { PORT } from './config/serverConfig.js';



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
  return res.json({message: "pong"});
});


app.use('/api',apiRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});







