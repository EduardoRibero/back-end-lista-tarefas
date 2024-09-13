const tarefasModels = require('../models/tarefasModels')
class TarefasController{
    buscar(){
        return tarefasModels.listar()
    }

    criar(novaTarefa){
        return tarefasModels.criar(novaTarefa)
    }

    atualizar(tarefa, id){
        return tarefasModels.atualizar(tarefa, id)
    }

    deletar(id){
         return tarefasModels.deletar(id)
    }
}

module.exports = new TarefasController()