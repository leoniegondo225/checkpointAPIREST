import {connectDB} from"../dbConnection/db.mjs"
import mongoose from "mongoose"
import {userModel} from "../models/user.mjs"

export const Getuser = async (req, res) => {
    try {
        const db = await connectDB()
        if(db === "Connecté à la base de donnée") {

            const data = await userModel.find()
            res.json({statusCode: 200, data})

        } else {
            res.json({statusCode: 500, message:"Erreur pendant la connexion à la db"})
        }
        
     
        //Deconnexion de la a la base de donné
        await mongoose.disconnect()
    } catch (error) {
        res.json({statusCode: 500, error})
    }
}

//Ajouter un utilisateur
export const Adduser = async(req, res) => {
    try {
        const db = await connectDB()
        if(db === "Connecté à la base de donnée") {

            const data = new userModel(req.body)
            await data.save()
            res.json({statusCode: 200, data})

        } else {
            res.json({statusCode: 500, message:"Erreur pendant la connexion à la db"})
        }

        //Deconnexion de la a la base de donné
        await mongoose.disconnect()
    } catch (error) {
        res.json({statusCode: 500, error})
    }
}

//ÉDITER UN UTILISATEUR PAR ID
export const Updateuser = async(req,res) => {
    try {
        const db = await connectDB()
        if(db === "Connecté à la base de donnée") {

            const id = req.params.id
            const data = await userModel.findByIdAndUpdate(id, req.body, { new: true })

        } else {
            res.json({statusCode: 500, message:"Erreur pendant la connexion à la db"})
        }

        //Deconnexion de la a la base de donné
        await mongoose.disconnect()
    } catch (error) {
        res.json({statusCode: 500, error})
    }
}

//SUPPRIMER UN UTILISATEUR PAR ID
export const Deleteuser = async(req, res) => {
    try {
        const db = await connectDB()
        if (db === "ok") {
            const id = req.params.id
            const data = await userModel.findByIdAndDelete(id)
            res.json({ statusCode: 200, message:"Tache supprimé avec succès"})
        } else {
            res.json({statusCode: 500, error})
        }
        //Deconnexion de la db
        await mongoose.disconnect();
    } catch (error) {
        res.json({statusCode: 500, error})
        
    }
}
