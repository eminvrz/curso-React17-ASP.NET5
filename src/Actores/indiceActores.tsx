import React from "react"
import { Link } from "react-router-dom"

function indiceActores() {
    return ( 
        <>
            <h3>Indice Actores</h3>
            <Link to="actores/crear">Crear Actor</Link>
        </>
        
     );
}

export default indiceActores;