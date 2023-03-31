import { useState } from 'react'
import "./cardAdicionar.css"

function CardAdicionar ({adicionarTarefa}) {
    //Criando um useState
    const [tarefa, setTarefa] = useState('')

    //Criando uma função para adicionar uma tarefa

    function handleAdicionar  (event)  {

        event.preventDefault()

        //Verifica se o input de texto não esta vazio
        if (tarefa!=""){

            //Cria o texto da tarefa e adiciona na lista
            adicionarTarefa(tarefa)
            //limpar o input do texto
            setTarefa("")
        }
    }
    
    return(
    <div className = {"Adicionar"} >
        <input  className = {"Barra-adicionar"} type="text" 
        placeholder="Adicione uma tarefa"  
        value={tarefa} 
        onChange={(e) => setTarefa(e.target.value)}/>

    {/*botão para criar a tarefa*/}
        <button className={"Button-adicionar"} onClick={handleAdicionar}> Adicionar </button>
    </div>
    );
}

export default CardAdicionar;