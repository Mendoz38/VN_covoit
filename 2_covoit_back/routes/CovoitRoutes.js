if(!process.env.HOST_DB) {
    var config = require('../config')
}else {
    var config = require('../config-exemple')
}
let secret = process.env.TOKEN_SECRET || config.token.secret;
const withAuth = require('../withAuth');

module.exports = (app, db)=>{
    const CovoitModel = require('../models/CovoitModel')(db);

	// Ajout d'un covoiturage
    app.post('/zzz/covoit/add',  async (req,  res, next)=>{
    	let result = await CovoitModel.saveOneCovoit(req);
		console.log("dans Route covoit on recoit la réponse")

    	if(result.code) {
			console.log("dans if", result)
    		res.json({status: 500, err: result});
    	}
		else {
    		res.json({status: 200, msg: 'Covoit enregistré'});
		}
    })

	// Ajout d'une réponse
    app.post('/zzz/reponse/add',  async (req,  res, next)=>{
    	let result = await CovoitModel.reponseCovoit(req);
		console.log("dans Route reponseCovoit on recoit la réponse")

    	if(result.code) {
			console.log("dans if", result)
    		res.json({status: 500, err: result});
    	}
		else {
    		res.json({status: 200, msg: 'Covoit enregistré'});
		}
    })

	// Tous les covoits
    app.get('/zzz/covoit/all', async (req,  res, next)=>{
     	let covoits = await CovoitModel.getAllCovoits();
		console.log("dans Route covoit/all")
    	if(covoits.code) {
    		res.json({status: 500, err: covoits});
    	}

    	res.json({status: 200, covoits: covoits});
    })

	// 1 Covoit par salon  A FAIRE
    app.get('/zzz/covoit/one/:id', async (req,  res, next)=>{

    	let id = req.params.id;
		console.log("dans Route covoit/one/:id", req.params.id)
    	let covoitDetail = await CovoitModel.getOneCovoit(id);
		console.log("covoitDetail : ", covoitDetail)
    	if(covoitDetail.code) {
    		res.json({status: 500, err: covoitDetail});
    	}

    	res.json({status: 200, covoitDetail: covoitDetail});
    })



	// Mise à jour covoit  A FAIRE
    app.put('/zzz/covoit/update/:id',  withAuth, async (req,  res, next)=>{
		console.log("data", req.params)
    		
    	let result = await CovoitModel.updateCovoit(req, req.params.id);
    	if(result.code) {
    		res.json({status: 500, err: result});
    	}
		res.json({status:200 , msg: 'Covoit modifié !', results: {result: result}}) 
    	console.log("result", result)
    })


	// Supprimer 1 covoit  A FAIRE
    app.delete('/zzz/covoit/delete/:id', withAuth, async (req,  res, next)=>{

    	let id = req.params.id;
    	let result = await CovoitModel.deleteOneCovoit(id);

    	if(result.code) {
    		res.json({status: 500, err: result});
    	}

    	res.json({status: 200, msg: 'Covoit supprimé !'});
    })
}