const { Router } = require('express')

const router = Router()

// get post put delete

router.get('/tarefas', (req, res)=>{
    res.send("Lista de tarefas get")
})

router.post('/tarefas',  (req, res)=>{
    res.send("adicionando tarefas")
})

router.put('/tarefas/:id',  (req, res)=>{
    const id = req.params
    id.toString()
    res.send(`Atualizando tarefa numero :${id.id} `)
})

router.delete('/tarefas/:id', (req, res)=>{
    const id = req.params
    id.toString()
    res.send(`Deletando tarefa numero :${id.id}`)
})

module.exports = router