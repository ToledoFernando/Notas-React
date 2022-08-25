import './crearTarea.css';



function vAbout(){
    let About = document.getElementById('About');
    let botones = document.getElementById('botones');

    botones.style.right="80%"
    About.style.right=0;
}

function cAbout(){
    let About = document.getElementById('About');
    let botones = document.getElementById('botones');

    About.style.right="-100%";
    botones.style.right="-60px";
}


function AgregarTarea({guardar, ver}){
    if(ver){
        document.getElementById('NuevaTarea').style.visibility="visible";
        document.getElementById('NuevaTarea').style.opacity="100%";
        document.getElementById('Container').style.right="auto"
    }

    let NuevaTarea = {TituloTarea: '', infoTarea: '', id: Math.round(Math.random()*10000)};

    function Change(e){
        NuevaTarea[e.target.name] = e.target.value; 
    }

    function desaparecerxd(){
        document.getElementById('NuevaTarea').style.visibility="hidden";
        document.getElementById('NuevaTarea').style.opacity="0%";
        document.getElementById('Container').style.right="-100%"
    }
    
    return (
        <div className="NuevaTarea" id='NuevaTarea'>
            <div className='Container' id='Container'>
                <div className='Alerta' id='Alerta'>
                    <h1>Los campos no puede estar Vacio!!</h1>
                </div>
                <div className='Formulario-xd'>
                    <form>
                        <h3>Agregar Tarea</h3>
                        <label>Titulo</label><br/>
                        <input type='text' onChange={Change} name="TituloTarea" placeholder='Titulo'/><br/>
                        <label>Tarea</label><br/>
                        <textarea placeholder="Tarea Info" onChange={Change} name="infoTarea"></textarea><br/>
                        <button id='Guardarxd' onClick={(e)=>{
                            e.preventDefault();
                            if(NuevaTarea.TituloTarea.length === 0 && NuevaTarea.infoTarea.length === 0){
                                document.getElementById('Alerta').style.left=0;
                                setTimeout(()=>{
                                    document.getElementById('Alerta').style.left="-100%";
                                },2000)
                            }else{
                                desaparecerxd()
                                guardar(NuevaTarea);

                            }
                        }}>Guardar</button>
                    </form>
                </div>
                <div id='botones'>
                    <button onClick={vAbout} id='VerAbout'> &#60; </button><button onClick={cAbout} id='CerrarAbout'>X</button>
                </div>
                <div className='About' id='About'>
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eum porro quod aspernatur tempore cum laudantium exercitationem ex.</p>
                </div>
            </div>
        </div>
    )
}

export default AgregarTarea;