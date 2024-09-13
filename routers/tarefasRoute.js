const { Router } = require('express')

const tarefasController = require('../controllers/tarefasControler')

const router = Router()

// get post put delete

router.get('/tarefas', (req, res)=>{
    const resposta = tarefasController.buscar()
    resposta.then((tarefas) => res.status(200).json(tarefas))
    .catch((err)=> res.status(400).json(err.mesage))
})

router.post('/tarefas',  (req, res)=>{
    const resposta = tarefasController.criar()
    res.send(resposta)
})

router.put('/tarefas/:id',  (req, res)=>{
    const id = req.params
    const resposta = tarefasController.atualizar(id.id)
    res.send(resposta)
})

router.delete('/tarefas/:id', (req, res)=>{
    const id = req.params
    const resposta = tarefasController.deletar(id.id)
    res.send(resposta)
})

module.exports = router