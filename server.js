var express = require ('express');
var nodemailer = require ('nodemailer');
var bodyParser = require('body-parser');
var app = express();

//use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 9000;


//post for conditional form
app.post('/mailPost', function(req, res) {
    console.log(req.body.customerInfo);
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'email@gmail.com',
            pass: 'email.password'
        }
    });
    let mailOptions = {
        from: '<' + req.body.email + '>',
        to: 'email@example.com',
        subject: 'test subject',
        text:
        'Date client:' + 
        '\n\nNume : ' + req.body.customerInfo[0].name + 
        '\nEmail : ' + req.body.customerInfo[0].email + 
        '\nTelefon : ' + req.body.customerInfo[0].phone + 
        '\nCompanie : ' + req.body.customerInfo[0].company + 
        '\n\nClientul doreste : ' + req.body.customerInfo[1] + 
        '\nDetalii suplimentare : ' + req.body.customerInfo[2] + 
        '\nBugetul sau este : ' + req.body.customerInfo[3] + 
        '\nAr dori sa fie gata in : ' + req.body.customerInfo[4] + 
        '\nMai multe detalii : ' + req.body.customerInfo[5] + 
        '\nMateriale : ' + req.body.customerInfo[6]  

    }
    console.log(mailOptions.text);
     transporter.sendMail(mailOptions, (error, info) => {
         if(error) {
             return console.log(error);
         }
         console.log('msg sent', info.messageId, info.response);
         //mailer.close();
     });
});


//start mail server on port 9000
app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});
