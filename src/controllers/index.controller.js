//const usuarios = require('../models/users')
let edades = 0
//const { Pool } = require('pg');
const conection = require('../conection')
const raiz = require('../index');
const { response } = require('express');
const getUsers = (req, res) => {
    let respuesta 
    conection.query('SELECT * FROM usuarios').then((result) => {
        respuesta=result.rows
        console.log(respuesta)
        res.status(200).send(respuesta)
    }).catch((err) => {
        console.log(err)
    }); 
}

const createUsers = (req, res) => {
    console.log(req.body);
    res.send('user created');
}

const getUserById = (req, res) => {
    const id = req.params.id;
    const responce = conection.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}

const ubdateUser = (req, res) => {
    const id = req.params.id;
    const {nombre, primerApellido, segundoApellido, fechaNacimiento} = req.body;
    console.log(id, nombre, primerApellido, segundoApellido, fechaNacimiento);
    res.send('User Ubdate')
}

const deleteUser = (req, res) => {
    const id = req.params.id
    const response = conection.query('DELETE FROM users WHERE id = $1', [id])
    console.log(response)
    res.json(`User ${id} deleted successfully`)
}

const obtenerEdades = (req, res) => {
    let respuesta 
    conection.query('SELECT * FROM usuarios').then((result) => {
        respuesta=result.rows
        respuesta.forEach(el => {
            let getEdades = (new Date().getFullYear()) - (new Date(el.fechaNacimiento).getFullYear())
            edades = edades + getEdades
        })
        edades=edades/respuesta.length
        console.log('promedioEdad',edades)
        console.log(respuesta)
        res.status(200).send({promedio: edades})
    }).catch((err) => {
        console.log(err)
    }); 
}

module.exports = {
    getUsers,
    createUsers,
    getUserById,
    ubdateUser,
    deleteUser,
    obtenerEdades
}

