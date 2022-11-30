import EditarEntidad from "../utils/EditarEntidad"
import { urlGeneros } from "../utils/endPoints"
import FormularioGeneros from "./FormularioGenero"
import { generoCreacionDTO, generoDTO } from './Generos.model'

function EditarGenero() {
    // si el genero no a cargado, va a mostrar cargando, operador ternario
    return ( 
        <>
            <EditarEntidad<generoCreacionDTO, generoDTO> 
                url={urlGeneros}
                urlIndice="/generos"
                nombreEntidad="Generos"
                >
                    {(entidad, editar) => <FormularioGeneros modelo={entidad}
                        onSubmit={ async valores  => {
                        await editar(valores)
                    }}
                /> }
                </EditarEntidad>
            </>
     );
}

export default EditarGenero;