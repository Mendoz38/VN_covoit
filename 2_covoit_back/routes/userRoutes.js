var express = require('express');
var app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let config
if (!process.env.HOST_DB) {
    config = require('../config')
} else {
    config = require('../config-exemple')
}
let secret = process.env.TOKEN_SECRET || config.token.secret;


module.exports = (app, db) => {
    const userModel = require('../models/UserModel')(db);

    //route d'ajout d'un utilisateur OK
    app.post('/api/v1/user/add', async (req, res, next) => {
        let result = await userModel.saveOneUser(req);
        if (result.code) {
            res.json({ status: 500, msg: "echec requète", err: result })
        }

        if (result.status === 501) {
            res.json(result)
        } else {
            res.json({ status: 200, msg: "Utilisateur enregistré" })

        }

    })

    //route de login OK
    app.post('/api/v1/user/login', async (req, res, next) => {
        let user = await userModel.getUserByMail(req.body.email)
        // vérifie si l'email est dans la BDD
        if (user.length === 0) {
            res.json({ status: 404, msg: "Email inexistant dans la base de donnée" })
        } else {
            // l'email est bien dans la BDD
            // compare le mot de passe rentré
            let same = await bcrypt.compare(req.body.pwd, user[0].pwd);
            if (same) {
                // le mot de passe est bon
                // crée les infos pour les stocker dans le store de redux
                let infos = { id: user[0].id, email: user[0].mail }
                let token = jwt.sign(infos, secret);
                console.log("Connecté !")

                res.json({ status: 200, msg: "Connecté", token: token, user: user[0] })

            } else {
                // le mot de passe n'est pas bon
                console.log("Mauvais mot de passe", same)
                res.json({ status: 401, msg: "Mauvais mot de passe" })
            }

        }

    })



}