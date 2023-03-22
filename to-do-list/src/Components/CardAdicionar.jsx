import { useState } from 'react'

function CardAdicionar ({adicionarTarefa, filtrarTarefasFinalizadas, tarefasFinalizadas}) {
    const [texto, setTexto] = useState('')

    
    return(
    <div>
        <input type="text" placeholder="Adicionar nova tarefa" value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button onClick={handleAdicionar}> Adicionar</button>
        <input type="checkbox" checked={tarefasFinalizadas} onChange={e =>filtrarTarefasFinalizadas(e.target.checked)} />
        <label>filtrar tarefas finalizadas</label>
    </div>
    )
}


export default CardAdicionar;

