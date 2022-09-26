import React from "react"
import FormularioActores from './FormularioActores'


function crearActores() {
    return ( 
        <>
            <h3>Crear Actores</h3>
            <FormularioActores 
                modelo={{nombre: '', fechaNacimiento: undefined}} 
                onSubmit={valores => console.log(valores)}/>  
        </>
        
     );
}

export default crearActores;