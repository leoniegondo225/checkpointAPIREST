
import express from "express"
import { Adduser, Deleteuser, Getuser, Updateuser } from "../Controllers/Getuser.mjs"

const routes = express.Router()
//Routes pour la fonction user
routes.get("/get-user", Getuser)

//AJOUTER UN NOUVEAU UTILISATEUR À LA BASE DE DONNÉES
routes.post("/add-user", Adduser)

routes.put("/update-user", Updateuser)

routes.delete("/delete-user", Deleteuser)

export default routes