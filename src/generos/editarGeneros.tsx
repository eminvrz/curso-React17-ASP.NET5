import { useParams } from "react-router-dom"

function EditarGenero() {

    const {id}: any = useParams();

    return ( 
        <>
         <h3>Editar Genero</h3>
         <h4>El id es {id}</h4>
        </>
     );
}

export default EditarGenero;