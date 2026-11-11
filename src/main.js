import mongoose from 'mongoose';
import Usuario from './model/user.model.js';

const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = "2026_UTN_PWA";

async function connectToDatabase() {
    try {
        await mongoose.connect(`${DB_URL}/${DB_NAME}`);
        console.log("conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
    }
}

connectToDatabase();

function createUser(nombre, email, password) {
    Usuario.create({
        nombre: nombre,
        email: email,
        password: password
    })
}

createUser("Juan", "juan.perez@example.com", "contraseña123");