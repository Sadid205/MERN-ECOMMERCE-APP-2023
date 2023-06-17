import mongoose from "mongoose";
import colors from "colors"

const ConnectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB is connected on ${conn.connection.host}`.bgMagenta.white)
    } catch(error){
        console.log(`MOngoDB Error On ${error} `.bgRed.white)
    }
    
}

export default ConnectDB;