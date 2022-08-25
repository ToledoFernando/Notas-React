export const AgTask = (Tarea)=>{
    return {
        type: "Agregartarea",
        payload: Tarea
    }
}

export const DeleteTask = (id)=>{
    return {
        type: "EliminarTarea",
        payload: id
    }
}