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

	// Tous les covoits
    app.get('/zzz/covoit/all', async (req,  res, next)=>{
     	let covoits = await CovoitModel.getAllCovoits();
		console.log("dans Route covoit/all")
    	if(covoits.code) {
    		res.json({status: 500, err: covoits});
    	}

    	res.json({status: 200, covoits: covoits});
    })


	// Tous les covoits par utilisateur
    app.get('/zzz/covoit/user/:id_membre', async (req,  res, next)=>{
    	let id = req.params.id_membre;
		//console.log("id", id)
     	let covoitsById = await CovoitModel.getAllCovoitById(id);
    	if(covoitsById.code) {
    		res.json({status: 500, err: covoitsById});
    	}

    	res.json({status: 200, covoitsById: covoitsById});
    })

	// Covoit par salon  OK
    app.get('/zzz/covoit/one/:id', async (req,  res, next)=>{

    	let id = req.params.id;
		//console.log("dans Route covoit/one/:id", req.params.id)
    	let covoitDetail = await CovoitModel.getOneCovoit(id);
		// console.log("covoitDetail : ", covoitDetail)
    	if(covoitDetail.code) {
    		res.json({status: 500, err: covoitDetail});
    	}

    	res.json({status: 200, covoitDetail: covoitDetail});
    })

	// 1 Covoit détail par id 
    app.get('/zzz/covoit/detail/:id', async (req,  res, next)=>{

    	let id = req.params.id;
		console.log("dans Route covoit/detail/:id", req.params.id)
    	let covoitDetail = await CovoitModel.covoitDetail(id);
		console.log("covoitDetail : ", covoitDetail)
    	if(covoitDetail.code) {
    		res.json({status: 500, err: covoitDetail});
    	}

    	res.json({status: 200, covoitDetail: covoitDetail});
    })



	// Mise à jour covoit  EN COURS
    app.put('/zzz/covoit/update/:id',  withAuth, async (req,  res, next)=>{
		console.log("data", req.body)
    		
    	let result = await CovoitModel.updateCovoit(req);
		console.log("req.body.id",req.body.id)
    	if(result.code) {
    		res.json({status: 500, err: result});
    	}
		res.json({status:200 , msg: 'Covoit modifié !', results: {result: result}}) 
    	console.log("result", result)
    })


	// Supprimer 1 covoit  A FAIRE
    app.delete('/xzzz/covoit/delete/:id', withAuth, async (req,  res, next)=>{
		console.log("delete", req.params.id)

    	let id = req.params.id;
    	let result = await CovoitModel.deleteOneCovoit(id);

    	if(result.code) {
    		res.json({status: 500, err: result});
    	}

    	res.json({status: 200, msg: 'Covoit supprimé !'});
    })
}