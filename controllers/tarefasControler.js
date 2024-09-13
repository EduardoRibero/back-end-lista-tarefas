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

    deletar(tarefa){
         return "Deletando tarefa: " + id + ".."
    }
}

module.exports = new TarefasController()