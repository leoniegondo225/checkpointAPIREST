//importation des modules 
import express from "express"
import dotenv from "dotenv"
import routes from "./Routes/routes.mjs"
// pour la configuration
dotenv.config()

const app = express()

// Midlleware pour le format json
app.use(express.json())
app.use("/api", routes)

//pour lancé le serveur au port 3000 
app.listen(3000, () => console.log("server demarrer  au port 3000") )