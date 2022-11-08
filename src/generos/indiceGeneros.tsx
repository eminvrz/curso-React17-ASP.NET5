import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Button from "../utils/Button"
import { urlGeneros } from "../utils/endPoints"
import ListadoGenerico from "../utils/ListadoGenerico"
import { generoDTO } from "./Generos.model"

function IndiceGeneros() {

    const [generos, setGeneros] = useState<generoDTO[]>();

    useEffect( ()=> {
        // hacer una peticion http get hacia nuestro webapi con la libreria axios
        axios.get(urlGeneros)
            .then((respuesta: AxiosResponse<generoDTO[]>) => {
                console.log(respuesta.data);
                setGeneros(respuesta.data);
            })
    }, [])

    return ( 
        <>
            <h3>Generos</h3>
            <Link className="btn btn-primary" to="generos/crear">Crear Genero</Link>

            <ListadoGenerico listado={generos}>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(generos => 
                        <tr key={generos.id}>
                            <td>
                                <Link className="btn btn-success" to={`/generos/${generos.id}`}>
                                   Editar 
                                </Link>

                                <Button className="btn btn-danger">Borrar</Button>
                            </td>
                            <td>
                                {generos.nombre}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </ListadoGenerico>

        </>
        
     );
}

export default IndiceGeneros;