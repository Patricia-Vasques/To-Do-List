import { useState } from 'react'
import './App.css'
import CardAdicionar from './Components/CardAdicionar'
import ListItem from './Components/ListItem'

function App() {
    //estado base
    const [listaDeTarefas, setListaDeTarefas]= useState([
        {id: 1, texto: "Tarefa 1", finalizada:false}
    ])

 // função para adionar tarefa

function adicionarTarefa(tarefa){
    const novaTarefa = {
        id: setListaDeTarefas.length +1, 
        texto: tarefa,
        finalizado: false
    }

    setListaDeTarefas([...listaDeTarefas, novaTarefa])
}

function removerTarefa (tarefa) {
    //remove a tarefa selecionada
    const novaLista = listaDeTarefas.filter(item=> item.id !=tarefa.id)
    setListaDeTarefas(novaLista)
}

    return(
        <div className = "App">
            <CardAdicionar adicionarTarefa={adicionarTarefa}/>
        {
        listaDeTarefas.map(tarefa => (
            <ListItem tarefa = {tarefa} removerTarefa = {removerTarefa} />
        ))
        }
        </div>
    )
}


export default App
