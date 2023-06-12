if(!process.env.HOST_DB) {
    var config = require('../config')
}else {
    var config = require('../config-exemple')
}
let secret = process.env.TOKEN_SECRET || config.token.secret;
const withAuth = require('../withAuth');

module.exports = (app, db)=>{
    const ReponseModel = require('../models/ReponseModel')(db);


	// Tous les covoits
	/*
    app.get('/zzz/covoit/all', async (req,  res, next)=>{
     	let covoits = await ReponseModel.getAllCovoits();
		console.log("dans Route covoit/all")
    	if(covoits.code) {
    		res.json({status: 500, err: covoits});
    	}

    	res.json({status: 200, covoits: covoits});
    })
*/


	// Réponses par annonce
    app.get('/zzz/reponse/one/:id', async (req,  res, next)=>{

    	let id = req.params.id;
		console.log("dans Route reponse/one/:id", id)
    	let NombreReponse = await ReponseModel.getReponseByAnnonce(id);
		 console.log("NombreReponse : ", NombreReponse.lenght)
    	if(NombreReponse.code) {
    		res.json({status: 500, err: NombreReponse});
    	}

    	res.json({status: 200, NombreReponse: NombreReponse});
    })



}