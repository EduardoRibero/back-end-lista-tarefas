class TarefasController{
    buscar(){
        return"Buscando tarefas"
    }

    criar(){
        return "Criando taarefa"
    }

    atualizar(id){
        return "Atualizando tarefa: " + id + ".."
    }

    deletar(id){
         return "Deletando tarefa: " + id + ".."
    }
}

module.exports = new TarefasController()