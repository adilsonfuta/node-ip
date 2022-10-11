const express = require('express');
const requestIp = require('request-ip');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    const clientIp = requestIp.getClientIp(req);
    res.send(`YOUR IP Adress is ${clientIp}.`);
    // res.end(`YOUR IP Adress is ${clientIp}.`);
});

app.listen(port, () =>{
    console.log(`Run on Port ${port}`);
});