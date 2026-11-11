
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

export default connectToDatabase;