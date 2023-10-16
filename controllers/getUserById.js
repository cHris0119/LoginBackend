const Usuario = require('../model/usuario')

const getUserById = async (req, res = response) => {

    try {
        const { userId } = req.params

        if (userId.length === 24) {
            let usuario = await Usuario.findById(userId)
            if (!usuario) {
                return res.json({ msg: 'Usuario no encontrado' })
            } else {
                const { _id, contrasena, __v, ...resto } = usuario._doc
                res.json(resto)
            }
        } else {

        }
        res.json({ msg: 'Estas enviando una contraseña incorrecta' })
    } catch (error) {
        console.log(error);
    }
}

module.exports = getUserById