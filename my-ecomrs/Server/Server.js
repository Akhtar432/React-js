const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

mongoose.connect('mongodb+srv://intezarakhtar:Akhtar@123@my-ecomrs.qtex7.mongodb.net/')
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('error'))

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:3001',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "content-Type",
            'Authorization',
            'Cache-Control',
            'Express',
            'pragma'
        ],
        credentials: true
    })
)

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, ()=> console.log(`sever is running on port ${PORT}`))