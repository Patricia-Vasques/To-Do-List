import { useState } from 'react'
import './App.css'
import CardAdicionar from './Components/CardAdicionar'

function App() {
    //estado base
    const [listaDeTarefas, setListaDeTarefas]= useState([
        {id: 1, texto: "Tarefa 1", finalizado:false}
    ])

 // função para adionar tarefa

function adicionarTarefa(texto){
    const novaTarefa = {
        id: setListaDeTarefas.length +1, 
        texto: tarefa,
        finalizado: false
    }

    setListaDeTarefas([...listaDeTarefas, novaTarefa])
}

    return(
        <div className = "App">
            <CardAdicionar adicionarTarefa={adicionarTarefa}/>
        </div>
    )
}


export default App
