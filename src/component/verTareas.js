import store from "../redux/store";
import './verTablas.css';

function VerTareas({eliminar, c}){
    return (
        <div className="tablas">
            {c > 0 ? store.getState().Tareas.map((e)=>{
                return (
                    <div id={e.id} key={e.id} className="Tarea">
                        <div className="TituloTarea"> 
                            <h1>{e.TituloTarea}</h1>
                            <button onClick={eliminar}>X</button>
                        </div>
                        <p className="InfoTarea">{e.infoTarea}</p>
                    </div>
                )}
            ) : <h1>Sin Tareas</h1> }
        </div>
    )
}

export default VerTareas;