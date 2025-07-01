import express from 'express'
import authRouter from './routes/auth.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.use('/api/auth',authRouter)


app.listen(8001, () =>{
    console.log('rodando')
})