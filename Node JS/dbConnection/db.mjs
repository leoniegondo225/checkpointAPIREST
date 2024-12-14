import mongoose from "mongoose"

//configurer la connexion à la base de donnée 
export const connectDB = async () => {
    const url = process.env.db_url
    const options = {
        serverApi: {version: "1", strict: true, deprecationErrors: true},
        dbName: 'UserConnect'
    }
    try {
      await mongoose.connect(url, options)  
      return "ok"
    } catch (error) {
        console.log(error)
    }
}