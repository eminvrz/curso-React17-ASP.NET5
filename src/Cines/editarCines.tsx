import EditarEntidad from "../utils/EditarEntidad"
import { urlCines } from "../utils/endPoints"
import { cineCreacionDTO, cineDTO } from "./cines.model"
import FormularioCines from "./FormularioCines"

function editarCines() {
    return ( 
        <EditarEntidad<cineCreacionDTO, cineDTO> 
                url={urlCines}
                urlIndice="/cines"
                nombreEntidad="Cines"
                >
                    {(entidad, editar) => <FormularioCines modelo={entidad}
                        onSubmit={ async valores  => {
                        await editar(valores)
                    }}
                /> }
                </EditarEntidad>
        
     );
}

export default editarCines;