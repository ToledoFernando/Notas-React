const tareas = {
    Tareas: []
}

function rootReducer(state = tareas, action){
    switch (action.type) {
        case "Agregartarea":
            return {
                ...state,
                Tareas: [...state.Tareas, action.payload]
            }
        case "EliminarTarea":
            return {
                ...state,
                Tareas: state.Tareas.filter((e)=> e.id !== Number(action.payload))
            }
        default:
            return state
    }
}

export default rootReducer;