import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import './App.css';
import AgregarTarea from './component/crearTarea';
import VerTareas from './component/verTareas';
import {AgTask , DeleteTask} from './redux/actions';

function App() {
  const [AgrTarea, setAgrTarea] = useState(false); 
  const [Task, setTask] = useState(0); 
  const dispatch = useDispatch();
  const ver = ()=>{
    setAgrTarea(!AgrTarea)
  }

  const Guardar = (e) => {
    if(e.TituloTarea.length > 0 && e.infoTarea.length > 0){
      dispatch(AgTask(e))
      setTask(Task+1)
      setAgrTarea(!AgrTarea)      
    }else{
      alert("Algo salio mal... Intentalo de nuevo")
    }
  }

  const Eliminar = (e)=>{
      const id = e.target.parentElement.parentElement.id;
      dispatch(DeleteTask(id))
      setTask(Task-1)
  }

  return (
    <div className="App">
      <h1 className='Titulo'>Notas</h1>
      <div className='botonAgregar'>
        <button id='BotonAgregar' onClick={ver}>Agregar Tarea</button>
      </div>
      <AgregarTarea guardar={Guardar} ver={AgrTarea}/>
      <VerTareas eliminar={Eliminar} Tareas={AgrTarea} c={Task}/>
    </div>
  );
}

export default App;
