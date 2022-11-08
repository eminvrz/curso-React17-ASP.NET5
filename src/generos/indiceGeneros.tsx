import axios, { AxiosResponse } from "axios"
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { urlGeneros } from "../utils/endPoints"
import { generoDTO } from "./Generos.model"

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
            <h3>Generos</h3>
            <Link className="btn btn-primary" to="generos/crear">Crear Genero</Link>
        </>
        
     );
}

export default IndiceGeneros;