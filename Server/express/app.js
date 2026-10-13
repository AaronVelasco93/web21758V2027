const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Hola mundo");
})
const port = 3005;
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});