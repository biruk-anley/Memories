import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';

import PostRoutes from './routes/posts.js';
const app = express()

app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.use('/posts', PostRoutes)

const CONNECTION_URL = 'mongodb+srv://kibur:1234abcd@clusters.cycdq7c.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => { app.listen(PORT, () => console.log(`server is listening ${PORT}`)) }
).catch((error) => { console.log(error.message) });

