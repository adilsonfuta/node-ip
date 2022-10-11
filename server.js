const express = require('express');
const requestIp = require('request-ip');
const app = express();
require('dotenv').config();
const port = process.env.PORT;


app.get('/',(req,res)=>{
    const clientIp = requestIp.getClientIp(req);
    res.send(`YOUR IP Adress is ${clientIp}.`);
    // res.end(`YOUR IP Adress is ${clientIp}.`);
});

app.listen(port, () =>{
    console.log(`Run on Port ${port}`);
    console.log(`Database Host ${process.env.DB_HOST}`);
    console.log(`Database Port ${process.env.PORT}`);
    console.log(`Database UserName ${process.env.DB_USERNAME}`);
    console.log(`Database Password ${process.env.DB_PASSWORD}`);
    console.log(`Database Name ${process.env.DB_NAME}`);
 
});


