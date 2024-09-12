const express = require('express')
const app = express()
const router = require('./routers/index')

router(app)

app.listen(8080, (err) =>{
    if(err){
        console.log("Erro na aplicação")
        return
    }
    console.log("Aplicação Ok!")
})