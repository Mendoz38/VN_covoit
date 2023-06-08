const bcrypt = require('bcryptjs');
const saltRounds = 10;
let randomId = require('random-id');
let len = 30;
let pattern = 'aA0'
 
module.exports = (_db)=>{
    db = _db;
    return UserModel;
}

class UserModel {
    
    //ajout d'un utilisateur  A FAIRE
	static async saveOneUser(req){
		console.log("saveOneUser : ", req.body.prenom)
		console.log("req.body.password : ", req.body.password)
		console.log("saltRounds : ", saltRounds)
	    //on hash le password
	    let hash = await bcrypt.hash(req.body.password, saltRounds);
		console.log("hash : ", hash)
	    //on génère un id personalisé
	    let key_id = randomId(len, pattern);
	    console.log("key_id : ",key_id)
	    
	    let user = await db.query('SELECT * FROM membres_users WHERE mail = ?', [req.body.mail]);
	    
	    if(user.length > 0) {
			console.log("email déjà utilisé")
			return {status: 501, msg: "email déjà utilisé"}
		}
		console.log("req.body.nom : ", req.body.nom)
		console.log("req.body.prenom : ", req.body.prenom)
		console.log("req.body.mail : ", req.body.mail)
		console.log("key_id : ", key_id)
	    //on sauvegarde l'utilisateur
	    return db.query('INSERT INTO membres_users (nom, prenom, mail, pwd, membre_grade, date_inscription, validate, key_id) VALUES(?, ?, ?, ?, "3", NOW(), "no", ?)', [req.body.nom, req.body.prenom, req.body.mail, hash, key_id ])
		.then((result)=>{
			//on retourne l'objet de reponse reussit en lui rajoutant le key_id
			result.key_id = key_id
			console.log("result : ", result)
			return result
		}).catch((err)=>{
			console.log("err : ", err)
			return err
		})
	    
	}
	
	// Mise à jour du profil de l'utilisateur  A FAIRE
	static async updateUser(req, id){
		return db.query('UPDATE membres_users SET nom = ?, prenom = ?, email = ? WHERE id = ?', [req.body.nom, req.body.prenom, req.body.email, req.body.id])
				.then((result)=>{
					return result
				})
				.catch((err)=>{
					return err
				})
	}

	
	//  A FAIRE
	static async updatepassword(newPassword, key_id){
	    //on crypte le password
	    let hash = await bcrypt.hash(newPassword, saltRounds);
		
		let result = await db.query('UPDATE membres_users SET password = ? WHERE key_id = ?', [hash, key_id]);
		return result;
	}
	
	// Récupération d'un user par mail
	static async getUserByMail(email){
		//console.log("req.body.mail : ", email)
	    let user = await db.query('SELECT * FROM membres_users WHERE mail = ?', [email]);

		return user;
	}

	// Afficher 1 user  A FAIRE
	static async getOneUser(id) {
	    return db.query('SELECT * FROM membres_users WHERE id = ?', [id])
				.then((result)=>{
	            return result;
		        })
		        .catch((err)=>{
		            return err;
		        })
	}

}