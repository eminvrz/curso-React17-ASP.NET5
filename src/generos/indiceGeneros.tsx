import { Link } from "react-router-dom"
import { useEffect } from 'react'
import axios, { AxiosResponse } from "axios"
import { generoDTO } from "./Generos.model"
import { urlGeneros } from "../utils/endPoints"

function IndiceGeneros() {

    useEffect( ()=> {
        // hacer una peticion http get hacia nuestro webapi con la libreria axios
        axios.get(urlGeneros)
            .then((respuesta: AxiosResponse<generoDTO[]>) => {
                console.log(respuesta.data);
            })
    }, [])

    return ( 
        <>
            <h3>Indice Generos</h3>
            <Link to="generos/crear">Crear Genero</Link>
        </>
        
     );
}

export default IndiceGeneros;