import { useContext } from "react"
import ValorContext from "./ValorContext";

function Hijo() {

    //* ReactHook useContext
    const valor = useContext(ValorContext);

    return ( 
        <>
            <h3>Componente Hijo: El valor del context es: {valor}</h3>
        </>
     );
}

export default Hijo;