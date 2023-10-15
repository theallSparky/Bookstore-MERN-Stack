import express from 'express'
import mongoose from 'mongoose'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'
import * as dot from 'dotenv'

console.log(process.env.mongoDBURL)

// const mongoDBURL = process.env.mongoDBURL
const app = express()
dot.config({ path: "../.env" })

app.use(express.json())
app.use(cors())


app.get('/', (request,response) => {
    console.log(request)
    return response.status(234).send('Welcome to the Bookstore!')
    console.log(dot.config())
})

app.use('/books', booksRoute)

mongoose
    .connect(process.env.mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> {
        console.log(`App connected to database!`)
        app.listen(process.env.PORT, ()=> {
            console.log(`App is litening to port: ${process.env.PORT}`)
            console.log(process.env)
        })
    })
    .catch((error)=> {
        console.error('Error connecting to MongoDB', error)
    })