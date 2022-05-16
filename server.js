const express = require('express');
const app = express();
const multer = require('multer');
const mimeTypes = require('mime-types');

const storage = multer.diskStorage({
    destination: 'uploads/', 
    filename: function(req, file, cb){
        cb("",Date.now() + "." + mimeTypes.extension(file.mimetype));
    }
})


const upload = multer({
    storage: storage
})

app.get("/",(req, res)=> {
    console.log(__dirname)
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/files", upload.single('nombre'), (req,res)=>{
    res.send("Guardado correctamente");

})

app.listen(8080,()=>console.log("Servidor iniciado"))