import express from 'express'
import {register,login} from '../controllers/auth.js'

const router = express.Router()

router.post('/register',register)
router.post('/login',login)

router.get("/teste",(req,res) =>{
    res.status(200).json({msg: "funcionando"})
})

export default router