import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { urlCines } from "../utils/endPoints"
import MostrarErrores from '../utils/MostrarErrores'
import { cineCreacionDTO } from './cines.model'
import FormularioCines from "./FormularioCines"

function CrearCines() {

    const history = useHistory(); // para poder navegar al indice de cines
    const [errores, setErrores] = useState<string[]>([]);

    async function crear(cine: cineCreacionDTO){
        try{
            await axios.post(urlCines, cine);
            history.push('/cines');
        }catch(error){
            setErrores(error.response.data);
        }
    }


    return ( 
        <>
            <h3>Crear Cines</h3>
            <MostrarErrores errores={errores}/>
            <FormularioCines 
                    modelo={{nombre: ''}}
                    onSubmit={async valores => await crear(valores)}/>
        </>
        
     );
}

export default CrearCines;