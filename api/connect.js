import dotenv from 'dotenv'
import mysql from 'mysql'


export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'rede_social_next'
})