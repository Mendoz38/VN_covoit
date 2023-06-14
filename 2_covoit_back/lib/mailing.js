const nodeMailer = require('nodemailer');

//module d'envoi de mail grace à la librairie nodeMailer
module.exports =  (mailTo, subject, title, text) =>{
      
    //on crée le chemin de connexion au serveur mail
      let transporter = nodeMailer.createTransport({
          host: 'smtp.ionos.fr',
          port: 465,
          secure: true,
          auth: {
              user: 'test@vinsnaturels.fr',
              pass: 'Test06/2023'
          },
          dkim: {
            domainName: "vinsnaturels.fr",
            keySelector: "rsa",
            privateKey: "-----BEGIN RSA PRIVATE KEY-----MIIEpQIBAAKCAQEAuPm9QgReR8TbgKcoVNK1BqD6b7tJ6avSjgSKhjOqguK9sFAjgmCf11Tyc3C3OjcUW1HcZkH5dW137h/h0mdGETNRLOr3TWBtOFqHgtKwygId8/0g7XF335CKf1tFfWJdmLVaHU9w+KEv3AHohBRImR5khWrbJGDnZbHueFarGguyMOVX09Dq4KdnyX+RBNNUCSsuy2FY06eUsfXCWAXvmsO3QjPyQaMchRNkVHGN3NVg90scGjedg4vI9fgoKQNc8KgzmALRmCizUUScJvIdPNQMJb/jyFNB8XUu0oQsxYoI7AwSGXMvM8WKQyVzFvbfv5gLs4Z4i2tP5V4crSWB7QIDAQABAoIBAQCe3ieVLqlG3KVlnqt+BqZhthrBocq+fctOHEpZLsCwv0sJxhppXNGLoLLHQTStNCcws2MnFFzLZSSPCSTrj7VXCosamAeklj/YGbCvRIOATEcriekg5cZ95ed9sIdDRBt9D60A5XzynYW8YIsx/TXJBJhzGi5y1SOIbUSSaGV17MXfNtHRdqZL9iZt3IjnvaKIanBPd9Q5+Vj3hDVRG9eNsu9osMDHB7Be3d2XgsNdOx83Mcqagbt5XtgvL992zleEkpscMz/HajplF/aXr7P6lYaw2RwpdWwyqPCxZubEzrB3nIj15Gw7rQlRpfmo22tFiHTERTfBZB3Gn2TnW1YlAoGBANbJ82Ov56E4hJslY3T7K13+26hK3SKT12jtwwAjBHo5cAsYUgw9vgyMLtCWCAI+ANzHzyspluEBcRv+ges/HI0IslMiBU0mrgvFXikimtC3vHelY9mZdrkJoz2cXXZ7ZbzdTFR2+YFmZhtrSFAHoQLx4hXWd3GYM+iretvz4fbfAoGBANx3aSVmUPVp6maiwllRXSSuVrVHpD7mk5J0V3L1jLNjBDrioqjI7SEByIuDuMPd9wVZw3BDYR803K6ojT5xfIoPnpc6W7fVgYE7Tk6Y4sOTIBRK8oOm0evJLJpTxmQm4yFhmPcnHWt0LargEmO1J6mBatVM2ykH6TO88OURCpyzAoGAcEGkHxm0aaJsS9nCnUUYaUvl6ZMW+BdkocaB//RNRsP2NxZC63rpdQ1e+k0valyVfs4/DEP0QyzJvOPLavPVLDC7Yo+JTcVFeYlxqPYZC7S7n5ylDvkR/6t10aGDh4T+qzLNzedQh7zI6NOtO4aBNFTO4LLyQkBWAOh+ka5pDukCgYEAzFzsXLzBYxxxKf7JhR4E51GsEpJ8T8pRFTs/LNMtP8QTUbpv6WGHXkdW7OyHQxjoOE+C+Peced74ifa4Jx/vv9LGwYxZJMmHKJIe/oB+A6jH3cezkhH7GUP8UnpBtujNNk5QCxp5DPg+tNzMbxynzVqn+10o8pngtBL6gnwPiD0CgYEAnkz6pjLNU1uXufRmXGDFitJzmKdTV8yCGtyXsGkwVD/huq7b+Upmyq1BPhv1VkxS9JJIdO7Ol6dsNi09cdHfcUMt93VlNakgDuinSfvdujcul4J69oN9CWbvy6detkuR8kB9E7mSR0yCxfD4yrc3BzcvlBXbK8TEuJXuN30HCXY=-----END RSA PRIVATE KEY-----"
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