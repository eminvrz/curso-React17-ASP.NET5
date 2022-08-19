import { useContext } from "react"
import Hijo from './Hijo'
import ValorContext from "./ValorContext"

function Padre() {

    //* ReactHook useContext
    const valor = useContext(ValorContext);


    return ( 
        <>
            <h3>Componente Padre: El valor del context es: {valor}</h3>
            <Hijo/>
        </>
     );
}

export default Padre;