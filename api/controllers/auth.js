import {db} from '../connect.js'
import bcrypt from 'bcrypt'

export const register = (req,res) =>{
    // const username = req.body
    const {username, email,password, confirmPassword} = req.body

    if(!username){
        return res.status(422).json({msg: "Nome é obrigatório"})
    }
    if(!email){
        return res.status(422).json({msg: "Email é obrigatório"})
    }
    if(!password){
        return res.status(422).json({msg: "senha é obrigatório"})
    }
    if(!confirmPassword){
        return res.status(422).json({msg: "Confirmação de senha é obrigatório"})
    }
    if(confirmPassword !== password){
        return res.status(422).json({msg: "Senhas não coicidem"})
    }
    
    db.query('SELECT email from user WHERE email = ?', [email], async (error, data) =>{
        if(error){
            console.log(error)
            return res.status(500).json({msg: "Aconteceu algum erro no servidor, tente novamente mais tarde!"})
        }
        if(data.length > 0){
            return res.status(500).json({msg: "Esse email já está sendo utilizado!"})
        }else{
            const passwordHash= await bcrypt.hash(password, 8)
            db.query(
                "INSERT INTO user SET ?", {username,email,password:passwordHash},
                (error) =>{
                    if(error){
                        console.log(error)
                        return res.status(500).json({msg: "Aconteceu algum erro no servidor, tente novamente mais tarde!"})

                    }
                    else{
                        return res.status(200).json({msg: "Cadastro realizado com sucesso!"})
                    }
                }
            )
        }
    })
    
    
}