const bcrypt = require('bcryptjs');
const saltRounds = 10;
 
module.exports = (_db)=>{
    db = _db;
    return UserModel;
}

class UserModel {
    
    //ajout d'un utilisateur  OK
	static async saveOneUser(req){
	    //on hash le password
	    let hash = await bcrypt.hash(req.body.password, saltRounds);
	    // on vérifie que si l'email existe dans la BDD
	    let user = await db.query('SELECT * FROM membres_users WHERE mail = ?', [req.body.mail]);
	    
		// il existe
	    if(user.length > 0) {
			return {status: 501, msg: "Email déjà utilisé"}
		}
	    // il n'existe pas, on sauvegarde l'utilisateur
	    return db.query('INSERT INTO membres_users (nom, prenom, mail, pwd, date_inscription) VALUES(?, ?, ?, ?, NOW())', [req.body.nom, req.body.prenom, req.body.mail, hash ])
		.then((result)=>{
			console.log("Création de ", req.body.mail)
			return result
		}).catch((err)=>{
			console.log("err : ", err)
			return err
		})
	    
	}
	
	// Récupération d'un user par mail
	static async getUserByMail(email){
		//console.log("req.body.mail : ", email)
	    let user = await db.query('SELECT * FROM membres_users WHERE mail = ?', [email]);
		return user;
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


}