import { Link } from "react-router-dom"

function IndiceGeneros() {
    return ( 
        <>
            <h3>Indice Generos</h3>
            <Link to="generos/crear">Crear Genero</Link>
        </>
        
     );
}

export default IndiceGeneros;