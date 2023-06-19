const nodeMailer = require('nodemailer');

config = require('../config')

let email = config.auth.user;
let pass = config.auth.pass;
let privateKey = config.dkim.privateKey;

//module d'envoi de mail grace à la librairie nodeMailer
module.exports =  (mailTo, subject, title, text) =>{
      
    //on crée le chemin de connexion au serveur mail
      let transporter = nodeMailer.createTransport({
          host: 'smtp.ionos.fr',
          port: 465,
          secure: true,
          auth: {
              user: email,
              pass: pass
          },
          dkim: {
            domainName: "vinsnaturels.fr",
            keySelector: "rsa",
            privateKey: privateKey
          }
        
      });

      let mailOptions = {
          from: '"Mendoz !" <cedric@mendoz.fr>', // sender address
          to: mailTo, // list of receivers
          subject: subject, // Subject line
          text: '', // plain text body
          html: '<b>'+title+'</b><p>'+text+'<p>' // html body
      };
    //chemin d'envoi du mail
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log('Erreur lors de l\'envoi de mail');
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
             
          });


//https://myaccount.google.com/lesssecureapps
}