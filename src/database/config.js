import mongoose from "mongoose";
export const dbConnection = async () =>{

    const { MONGO_DB_PROD, MONGO_DB_TEST, NODE_ENV } = process.env;

    const connectionString = NODE_ENV === 'test' ? MONGO_DB_TEST : MONGO_DB_PROD;

    console.log(connectionString);

    try {
        await mongoose.connect(connectionString);
        console.log("base conectada")
        
    } catch (error) {
        console.log(error)        
    }
}
