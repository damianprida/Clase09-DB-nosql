import mongoose from 'mongoose';
import Usuario from './model/user.model.js';
import connectToDatabase from './config/mongodb.config.js';


connectToDatabase();

function createUser(nombre, email, password) {
    Usuario.create({
        nombre: nombre,
        email: email,
        password: password
    })
}

createUser("Juan", "juan.perez@example.com", "contraseña123");