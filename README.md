# API EN NODE

# Instalando dependicias

nmp install

# verificar que este instalado postgres

crear la tabla usuarios en la base de datos
crear columnas id, ci, nombre, primerApellido, segundoApellido, fechaNacimiento 
si se desea configurar la base de datos ir al archivo raiz(src/index.js)

# Levantar el servidor

# si tienes nodemon ejecutar comando dentro de la carpeta src:

nodemon

# si no tienes instalado nodemon entrar a la carpeta src y ejecutar comando:

node index.js

# endponits

get('/users', getUsers) obtiene usuario
post('/users', createUsers) crea usuario
get('/users/:id', getUserById) busca usuario por id
delete('/user/:id', deleteUser) elimina usuario por id
put('/users/:id', ubdateUser) actualiza usuario por id
get('/users/edades/get', obtenerEdades) obtiene promedio de edades

# informacion del proyecto

{"name": "restapi-node-postgres",
"version": "1.0.0",
"description": "api rest node",
"main": "index.js",

"author": "Juan Marcelo Catari Ticona",
"license": "ISC",
"email": "marcelo.ticona.mj.97@gmail.com"}
