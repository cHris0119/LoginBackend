require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('./database/config')

const express = require('express')

// Crea el servidor de express
const app = express()

//Conexion a bd
dbConnection()

// CORS
app.use(cors())

// Para analizar solicitudes tipo json
app.use(express.json());

// Manejo de rutas
app.use('/api/auth', require('./routes/auth'))


// Iniciar servidor http
app.listen(process.env.PORT, () => {
    console.log(`Servidor funcionando en el puerto ${process.env.PORT}`);
})

module.exports = app