import express from 'express'
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

// app.use(
//     cors({
//         origin: 'http://localhost:5555',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

app.get('/', (request,response) => {
    console.log(request)
    return response.status(234).send('Welcome to the Bookstore!')
})

app.use('/books', booksRoute)

mongoose
    .connect(mongoDBURL)
    .then(()=> {
        console.log(`App connected to database!`)
        app.listen(PORT, ()=> {
            console.log(`App is litening to port: ${PORT}`)
        })
    })
    .catch((error)=> {
        console.log(error)
    })