import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Cargando from "../utils/Cargando"
import { urlGeneros } from "../utils/endPoints"
import MostrarErrores from "../utils/MostrarErrores"
import FormularioGeneros from "./FormularioGenero"
import { generoCreacionDTO, generoDTO } from './Generos.model'

function EditarGenero() {

    const {id}: any = useParams();
    const [genero, setGenero] = useState<generoDTO>();
    const [errores, setErrores] = useState<string[]>([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`${urlGeneros}/${id}`)
        .then((respuesta: AxiosResponse<generoDTO>) => {
            setGenero(respuesta.data);
        })
    }, [id])

    async function editar(generoEditar: generoCreacionDTO){
        try{
            await axios.put(`${urlGeneros}/${id}`, generoEditar)
            history.push('/generos');
        } catch(error){
            setErrores(error.response.data);
        }
    }

    // si el genero no a cargado, va a mostrar cargando, operador ternario
    return ( 
        <>
        
         <h3>Editar Genero</h3>
         <MostrarErrores errores={errores}/>
         {genero ? <FormularioGeneros modelo={genero}
                onSubmit={ async (valores, acciones)  => {
                    await editar(valores)
                }}
            /> : <Cargando/>}
         
        </>
     );
}

export default EditarGenero;