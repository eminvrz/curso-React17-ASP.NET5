import { useParams } from "react-router-dom"
import FormularioGeneros from "./FormularioGenero"

function EditarGenero() {

    const {id}: any = useParams();

    return ( 
        <>
         <h3>Editar Genero</h3>
         <FormularioGeneros modelo={{nombre: 'Accion'}}
                onSubmit={ async (valores, acciones)  => {
                    await new Promise(r => setTimeout(r, 3000));
                    console.log(valores);
                }}
            />
        </>
     );
}

export default EditarGenero;