import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { urlGeneros } from '../utils/endPoints'
import MostrarErrores from '../utils/MostrarErrores'
import FormularioGeneros from './FormularioGenero'
import { generoCreacionDTO } from './Generos.model'

function CrearGenero() {

    // UseHistory para poder navegar utilizando codigo de JavaScript
    const history = useHistory();
    // para actualizar el UI en funcion de los errores
    const [errores, setErrores] = useState<string[]>([]);

    async function crear(genero:generoCreacionDTO) {
        try{
            await axios.post(urlGeneros, genero);
            history.push('/generos');
        } catch (error){
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear Genero</h3>
            <MostrarErrores errores={errores}/>
            <FormularioGeneros modelo={{nombre: ''}}
                onSubmit={async valores => {
                    await crear(valores);
                }}
            />
        </>

    )
}

export default CrearGenero