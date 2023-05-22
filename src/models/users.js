
const raiz = require('../index')
async function insert(){
    const query= raiz.client
    const respuesta = await query.query(cliente.query('SELECT * FROM usuarios'))
    return respuesta  
} 

module.exports={
    insertar:insert()
}
