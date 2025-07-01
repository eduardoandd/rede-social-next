import express from 'express'
import {register} from '../controllers/auth.js'

const router = express.Router()

router.post('/register',register)

router.get("/teste",(req,res) =>{
    res.status(200).json({msg: "funcionando"})
})

export default router