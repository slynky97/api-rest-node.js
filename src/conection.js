
const {Client} = require('pg')
const conectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    post: 5432
}
const cliente = new Client(conectionData)
module.exports = cliente
