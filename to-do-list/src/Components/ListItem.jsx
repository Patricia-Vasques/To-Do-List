import { useState } from "react"

function ListItem ({tarefa, removerTarefa}) {
    //se for uma tarefa finalizadad ou não vai guardar o valor
    const [finalizada, setFinalizada] = useState(tarefa.finalizada)

    //Finalizar a Tarefa
    function finalizarTarefa (evento) {
        
        evento.preventDefault()
        // Falso fica verdadeiro e o verdadeiro fica falso
        setFinalizada(!finalizada)
    }

    function handleRemoverTarefa (evento) {
        evento.preventDefault()
        removerTarefa(tarefa)

    }

    return(
        <div>
            <li key={tarefa.id} className={"list-item-button"}>
                {tarefa.texto}
                <button className="list-item-button" onClick={finalizarTarefa}>Finalizar</button>
                <button className="list-item-button" onClick={handleRemoverTarefa}>remover</button>
            </li>

            <li key = {tarefa.id} className={"list-item"}>
                {tarefa.texto}
                <button className="list-item-button" onClick={finalizarTarefa}>finalizar</button>
                <button className="list-item-button" onClick={handleRemoverTarefa}>remover</button>
            </li>
        </div>
    )
}

export default ListItem