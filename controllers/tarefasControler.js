const tarefasModels = require('../models/tarefasModels')
class TarefasController{
    buscar(){
        return tarefasModels.listar()
    }

    criar(novaTarefa){
        return tarefasModels.criar(novaTarefa)
    }

    atualizar(id){
        return "Atualizando tarefa: " + id + ".."
    }

    deletar(id){
         return "Deletando tarefa: " + id + ".."
    }
}

module.exports = new TarefasController()