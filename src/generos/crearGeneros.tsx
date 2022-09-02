import { useHistory } from "react-router-dom";
import Button from "../utils/Button"

function CrearGenero() {

    // UseHistory para poder navegar utilizando codigo de JavaScript
    const history = useHistory();

    return (  
        <>
        <h3>Crear Genero</h3>
        <Button onClick={() => history.push('/generos')}>Salvar</Button>
        </>
        
    );
}

export default CrearGenero;