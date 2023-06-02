var express = require('express');
var app = express();
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
let config
if(!process.env.HOST_DB) {
    config = require('../config')
}else {
    config = require('../config-exemple')
}
let secret = process.env.TOKEN_SECRET || config.token.secret;
const withAuth = require('../withAuth');

let api_url_back = "http://localhost:9500"
let api_url_front = "http://localhost:3000"

module.exports = (app, db)=>{
    const userModel = require('../models/UserModel')(db);
    
    //route d'ajout d'un utilisateur A FAIRE
    app.post('/api/v1/user/add', async (req,  res, next)=>{
        let result = await userModel.saveOneUser(req);
        if(result.code) {
            res.json({status: 500,msg: "echec requète", err: result})
        }

        if(result.status === 501 ) {
            res.json(result)        
        } else {     
        res.json({status: 200, msg: "Utilisateur enregistré"})
		
		}
    
    })
    

    
    //route de login
    app.post('/api/v1/user/login', async (req,  res, next)=>{
        let user = await userModel.getUserByMail(req.body.email);
        // console.log("req.body.email", user)
        if(user.length === 0) {
            res.json({status: 404, msg: "email inexistant dans la base de donnée"})
        } else {
            
            let same = await bcrypt.compare(req.body.pwd, user[0].pwd);
            if(same) {
                
            console.log("if same", same)
                let infos = {id: user[0].id, email: user[0].mail}
                console.log("infos",infos)
                let token = jwt.sign(infos, secret);
    
                res.json({status: 200, msg: "connecté", token: token, user: user[0]})
                
            } else {
                console.log("else", same)
                res.json({status: 401, msg: "mauvais mot de passe"})
            }
            
        }
        
    })
    
    //route de récupération d'un utilisateur par son id
    app.get('/api/v1/user/one/:id', async (req, res, next)=>{
		let id = req.params.id 

        console.log("user", id)
		let user = await userModel.getOneUser(id)

		if(user.code){
			res.json({status: 500, msg: "pb"})
		}

		res.json({status: 200, user: user[0]})
	})
    
        
}