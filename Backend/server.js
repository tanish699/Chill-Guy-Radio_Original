import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoutes.js';
import connectDb from './src/config/mongoDB.js';

//app config
const app = express();
const port = process.env.port || 4000;
connectDb();

// middleware
app.use(express.json());
app.use(cors())

// initializing routs
app.use("/api/song",songRouter)

app.get('/',(req,res)=> res.send("API Working"))

app.listen(port,()=>console.log(`Server started on ${port}`))