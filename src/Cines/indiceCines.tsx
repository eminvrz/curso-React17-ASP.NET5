import { Link } from "react-router-dom"

function indiceCines() {
    return ( 
        <>
            <h3>Indice Cines</h3>
            <Link to="cines/crear">Crear Cine</Link>
        </>
        
     );
}

export default indiceCines;