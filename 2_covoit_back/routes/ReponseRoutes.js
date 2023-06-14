if (!process.env.HOST_DB) {
	var config = require('../config')
} else {
	var config = require('../config-exemple')
}
let secret = process.env.TOKEN_SECRET || config.token.secret;
const mail = require('../lib/mailing');
const withAuth = require('../withAuth');

module.exports = (app, db) => {
	const ReponseModel = require('../models/ReponseModel')(db);

	let api_url = "http://localhost:3000"

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

	// Ajout d'une réponse
    app.post('/zzz/reponse/add',  async (req,  res, next)=>{
    	let result = await ReponseModel.reponseCovoit(req);
		console.log("dans Route reponseCovoit on recoit la réponse", result)
		console.log("req.body", req.body)

    	if(result.code) {
			console.log("dans if", result)
    		res.json({status: 500, err: result});
    	}
		else {
			//envoi d'un mail (avec un lien a qui pointe vers la route api de validation par le key_id)
			mail(
				req.body.email,
				"Contact covoiturage, "+req.body.prenom+" "+req.body.nom+" souhaite covoiturer avec vous !",
				"Vous avez un nouveau contact pour votre covoiturage",
				'<a href="'+api_url+'/Login">Connectez-vous à votre compte<a/> pour voir le détail du message !<br />   '+req.body.email+' <br />  '+req.body.email+' xxxxxxxxxxxxx         '
			)
			console.log("Mail envoyé", req.body.email)

    		res.json({status: 200, msg: 'Covoit enregistré'});
		}
    })


	// Réponses par annonce
	app.get('/zzz/reponse/one/:id', async (req, res, next) => {

		let id = req.params.id;
		//console.log("dans Route reponse/one/:id", id)
		let NombreReponse = await ReponseModel.getReponseByAnnonce(id);
		//console.log("NombreReponse : ", NombreReponse.lenght)
		if (NombreReponse.code) {
			res.json({ status: 500, err: NombreReponse });
		}
		else {
			res.json({ status: 200, NombreReponse: NombreReponse });
		}
	})



}