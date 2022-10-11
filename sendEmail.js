require('dotenv').config();
const nodemailer = require('nodemailer');

const optionsInfo = {
host: 'smtp.mailtrap.io',
port: 2525,
auth:{
    user:'<USERNAME HERE>',
    pass:'<PASSWORD HERE>',
}
};

const message = {
    from: 'test@testmail.com',
    to: 'user@testmail.com',
    subject:'Test email from Nodemailer',
    text: 'Hello, This is Amazing.'
};

let transport = nodemailer.createTransport(optionsInfo);
transport.sendMail(message, function (err, info) {
    if(err){
        console.log(err);
    }else{
        console.log(info);
    }
})