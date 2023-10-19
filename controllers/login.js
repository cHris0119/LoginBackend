const Usuario = require('../model/usuario')
const bcryp = require('bcrypt')

const login = (req, res) => {
    const { email, contrasena } = req.body

    Usuario.findOne({ email })
        .then(usuario => {
            if (!usuario) {
                res.json({ msg: 'Usuario no encontrado' })
            } 

            bcryp.compare(contrasena, usuario.contrasena)
            .then(esCorrecta => {
                if (esCorrecta) {
                    const {email, name, _id } = usuario
                    res.json({  
                        ok: true,
                        msg: 'Usuario logeado exitosamente',
                        usuario: {
                           email, name, _id
                        } })
                } else{
                    res.status(401).json({ ok: false, msg: 'Contrasena incorrecta' })
                }
            })
        })

}

module.exports = login