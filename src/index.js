const express = require('express');
const app = express();
const cliente = require('./conection')

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index'));
cliente.connect().then(value =>{
    console.log('app conectada', value)
    app.listen(4000, () => {   
        console.log('server on port 4000')
    });
})

