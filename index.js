import dotenv from 'dotenv'
import express from 'express'
dotenv.config()

const app = express()

app.get('/', (req, res) => res.json({ message: 'Hello' }))

app.listen(process.env.PORT || 3000)