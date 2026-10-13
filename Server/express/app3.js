const express = require('express');
const app = express();
const path = require("path");

app.get("/",(req,res)=>{
    //res.send("Hola mundo");
    //res.sendFile("/Users/huronmarron/Desktop/clases2027/web21758/Server/express/index.html");
    res.sendFile(path.join(__dirname + "/index.html"));
});
const port = 3005;
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});