module.exports = (_db)=>{
    db = _db;
    return CovoitModel;
}

class CovoitModel {


	// 1 Covoit détail  A FAIRE
	static async getReponseByAnnonce(id){
	console.log("Dans Model  covoit/one/:id", id)
		return db.query('SELECT * FROM  vn_covoit_reponse  WHERE reponse_id = ?', [id])
				.then((result)=>{
					return result
				})
				.catch((err)=>{
					return err
				})
	}


}