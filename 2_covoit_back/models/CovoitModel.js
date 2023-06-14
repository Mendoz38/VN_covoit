module.exports = (_db)=>{
    db = _db;
    return CovoitModel;
}

class CovoitModel {

	// Ajout d'un covoit OK 
	static async saveOneCovoit(req){
		return db.query('INSERT INTO vn_covoit (id_membre, id_salon, choix, places, depart, arrivee,  date_aller, heure, date_retour, nom, prenom, email, telephone, genre, age, contrepartie, message, date_crea ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())', 
		[ req.body.id_membre, req.body.id_salon, req.body.choix, req.body.places, req.body.depart, req.body.arrivee, req.body.date_aller, req.body.heure, req.body.date_retour, req.body.nom,  req.body.prenom, req.body.email, req.body.telephone, req.body.genre, req.body.age , req.body.contrepartie , req.body.message  ])
				.then((result)=>{
					return result
				})
				.catch((err)=>{
					return err
				})
	}


	// Tous les covoits OK 
	static async getAllCovoits(){
	console.log("Dans Model  getAllCovoits avec *")
		return db.query('SELECT * FROM vn_covoit ORDER BY id DESC')
				.then((result)=>{
					return result
				})
				.catch((err)=>{
					return err
				})
	}


	// Tous les covoits par utilisateur 
	static async getAllCovoitById(id){
	console.log("Dans Model  getAllCovoitsById ", id)
		return db.query('SELECT * FROM vn_covoit WHERE id_membre = ?', [id])
				.then((result)=>{
					console.log("Nombre d'entrées :",result.length)
					return result
				})
				.catch((err)=>{
					return err
				})
	}

	// 1 Covoit détail  A FAIRE
	static async getOneCovoit(id){
	console.log("Dans Model  covoit/one/:id", id)
		return db.query('SELECT * FROM vn_covoit WHERE id_salon = ?', [id])
				.then((result)=>{
					return result
				})
				.catch((err)=>{
					return err
				})
	}

	// Mise à jour covoit  A FAIRE
	static  updateCovoit(req, id){
		console.log("Dans model id:", id)
		return db.query('UPDATE vn_covoit SET domaine = ?, nom = ?, prenom = ?, nom2 = ?, prenom2 = ? WHERE id = ?', [req.body.domaine, req.body.nom, req.body.prenom, req.body.nom2, req.body.prenom2, id])
				.then((result)=>{
					return result
				})
				.catch((err)=>{
					return err
				})
	}

	// Supprimer 1 covoit  A FAIRE
	static async deleteOneCovoit(id){
		return db.query('DELETE FROM vn_covoit WHERE id = ?', [id])
				.then((result)=>{
					return result
				})
				.catch((err)=>{
					return err
				})
	}

}