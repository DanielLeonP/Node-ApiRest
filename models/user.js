const { Schema, model } = require('mongoose');
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});
UsuarioSchema.methods.toJSON = function () {//Permite modificar el metodo cuando se llama como json, se da en la
    // respuesta al usuario para poder no mostrar la contraseña y __v
    const { __v, password, ...user } = this.toObject();
    return user;
}
module.exports = model('Usuarios', UsuarioSchema);