import React from "react"
import FormularioActores from "./FormularioActores"


function editarActores() {
    return ( 
        <>
            <h3>Editar Actores</h3>
            <FormularioActores 
                modelo={{nombre: 'Tom Holland', fechaNacimiento: new Date ('1996-06-01T00:00:00')}} 
                onSubmit={valores => console.log(valores)}/>  
        </>
        
     );
}

export default editarActores;