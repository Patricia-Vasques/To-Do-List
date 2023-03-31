import { useState } from "react"
import "./listItem.css"

function ListItem ({tarefa, removerTarefa}) {
    //se for uma tarefa finalizadad ou não vai guardar o valor
    const [finalizada, setFinalizada] = useState(tarefa.finalizada)

    //Finalizar a Tarefa
    function finalizarTarefa (evento) {
        
        evento.preventDefault()
        // Falso fica verdadeiro e o verdadeiro fica falso
        setFinalizada(!finalizada)
    }
 
    //função para remover  a tarefa
    function handleRemoverTarefa (evento) {
        //evita que aconteça o comportamento padrão do submit do botão
        evento.preventDefault()
        removerTarefa(tarefa)

    }

    return(
        <div>
            {
            finalizada?(
            <li key={tarefa.id} className={"list-item-button"}>
                {tarefa.texto}
                <button className="list-item-button" onClick={finalizarTarefa}>Finalizar</button>
                <button className="list-item-button" onClick={handleRemoverTarefa}>Remover</button>
            </li>
            ):(
            <li key = {tarefa.id} className={"list-item"}>
                {tarefa.texto}
                <button className="list-item-button" onClick={finalizarTarefa}>Finalizar</button>
                <button className="list-item-button" onClick={handleRemoverTarefa}>Remover</button>
            </li>
            )
}
        </div>
    )
}

export default ListItem