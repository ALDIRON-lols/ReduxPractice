let express = require('express');

const app = express();

app.get('/', (req, res)=>{
    console.log("Landed on home page.");
    return res.status(200).send("This is the homepage.");
})

app.get('/three/', (req, res)=>{
    console.log("Landed on THREEJS page.");
    ///will provide absolute path as the node doesnt recognizes relative paths..
    return res.sendFile(__dirname+'/index1.html');
})

app.listen(9000, ()=>console.log("listening to port 9000."));