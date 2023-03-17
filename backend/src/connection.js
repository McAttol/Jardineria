import mysql from 'mysql'

const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'jardineria'
})

export default conn;