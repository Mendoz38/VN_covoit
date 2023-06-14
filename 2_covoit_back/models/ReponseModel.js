module.exports = (_db)=>{
    db = _db;
    return ReponseModel;
}

class ReponseModel {

	// Réponse à un covoit 
	static async reponseCovoit(req){
		console.log("Dans Model  reponseCovoit  ")
		return db.query('INSERT INTO vn_covoit_reponse (id_membre, id_salon, reponse_id, choix, places, depart, arrivee,  date_aller, heure, date_retour, nom, prenom, email, telephone, genre, age, contrepartie, message, date_crea ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())', 
		[ req.body.id_membre, req.body.id_salon, req.body.id_annonce, req.body.choix, req.body.places, req.body.depart, req.body.arrivee, req.body.date_aller, req.body.heure, req.body.date_retour, req.body.nom,  req.body.prenom, req.body.email, req.body.telephone, req.body.genre, req.body.age , req.body.contrepartie , req.body.message  ])
				.then((result)=>{
					return result
				})
				.catch((err)=>{
					return err
				})
	}

	// 1 Covoit détail  A FAIRE
	static async getReponseByAnnonce(id){
	//console.log("Dans Model  covoit/one/:id", id)
		return db.query('SELECT * FROM  vn_covoit_reponse  WHERE reponse_id = ?', [id])
				.then((result)=>{
					return result
				})
				.catch((err)=>{
					return err
				})
	}


}