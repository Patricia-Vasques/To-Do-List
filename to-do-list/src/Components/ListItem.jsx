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

    return(
        <div>
            finalizada? (
                <li key={tarefa.id} className={"list-item-button"}>
                    {tarefa.texto}
                    <button className="list-item-button" onClick={finalizarTarefa}>Finalizar</button>
                    </li>
            )
        </div>
    )
}

export default ListItem