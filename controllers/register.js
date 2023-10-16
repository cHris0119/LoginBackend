const { response } = require("express")

const Usuario = require('../model/usuario')
const bcrypt = require('bcrypt')

const register = async (req, res = response) => {

    try {
        const { name, email, contrasena } = req.body

        let usuario = await Usuario.findOne({ email })

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese email',
            })
        } 

        else if(!name || !email || !contrasena){
            return res.status(400).json({
                ok: false,
                msg: 'Faltan datos en el registro',
            })
        }

        else{
            bcrypt.hash(contrasena, 10, async(error, contraHasheada) => {
                if(error) res.json(error)
                else{
                    const usuario = new Usuario({
                        name,
                        email,
                        contrasena: contraHasheada
                    })
                    await usuario.save()

                    res.status(201).json({
                        ok: true,
                        msg: 'Registro completado',
                        usuario: usuario
                    })
                }  
            })
        }


       
    } catch (error) {
        console.log(error);
    }

}

module.exports = register