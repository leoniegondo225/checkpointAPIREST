// models/user.js
import { Schema, model} from "mongoose"

//le schéma de l'utilisateur
const userSchema = Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: false }
})

//lien pour exporter le modéle
export const userModel = model.user || model("user", userSchema)