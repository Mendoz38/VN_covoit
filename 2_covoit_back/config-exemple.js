module.exports = {
    db: { // identifiants en local
        host: "localhost",
        user: "root", 
        password: "root",
        database : "vinsnaturels",
    },
	token: {
		secret: "VN_covoit"
	},

    auth: {
        user: 'test@test.fr',
        pass: 'xxxxxxx'
    },
    dkim: {
      domainName: "vinsnaturels.fr",
      keySelector: "rsa",
      privateKey: "-----BEGIN RSA PRIVATE KEY-----xxxxxxxx-----END RSA PRIVATE KEY-----"
    }
}