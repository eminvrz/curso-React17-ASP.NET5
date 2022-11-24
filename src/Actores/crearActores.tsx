import axios from "axios"
import React, { useState } from "react"
import { actorCreacionDTO } from "./actores.model"
import FormularioActores from './FormularioActores'
import { urlActores } from '../utils/endPoints'

import MostrarErrores from '../utils/MostrarErrores'
import { useHistory } from "react-router-dom"



function CrearActores() {

    const [errores, setErrores] = useState<string[]>([]);
    const history = useHistory();

    async function crear(actor:actorCreacionDTO) {
        try{
            await axios.post(urlActores, actor);
            history.push('/actores');
        }
        catch(error){
            setErrores(error.response.data);
        }
    }


    return ( 
        <>
            <h3>Crear Actores</h3>
            <MostrarErrores errores={errores} />
            <FormularioActores 
                modelo={{nombre: '', fechaNacimiento: undefined}} 
                onSubmit={async valores => await crear(valores)}/>  
        </>
        
     );
}

export default CrearActores;


