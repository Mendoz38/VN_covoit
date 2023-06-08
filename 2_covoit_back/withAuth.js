const jwt = require('jsonwebtoken');
const secret = 'VN_covoit';
// middleware permettant de contrôler la validité du token
const withAuth = (req, res, next)=>{
    // on récupère les information du token stockées dans la partie headers de la requete axios
    const token = req.headers['x-access-token'];
    // si pas de token, c'est mort
		//console.log("Token dans withAuth : ", token)
		//console.log("secret dans withAuth : ", secret)

        jwt.verify(token, secret, (err, decode) => {
            //console.log("decode : ",decode);
        
            if (err) {
              console.log(err);
              res.json({ status: 401, err: err });
            } else {
              req.id = decode.id;
              req.email = decode.email;
              next();
            }
          });
        };
        
        module.exports = withAuth;