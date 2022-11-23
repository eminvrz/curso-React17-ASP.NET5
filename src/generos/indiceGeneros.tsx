import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Button from "../utils/Button"
import confirmar from "../utils/Confirmar"
import { urlGeneros } from "../utils/endPoints"
import ListadoGenerico from "../utils/ListadoGenerico"
import Paginacion from "../utils/Paginacion"
import { generoDTO } from "./Generos.model"

function IndiceGeneros() {

    const [generos, setGeneros] = useState<generoDTO[]>();
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [recordsPorPagina, setRecordsPorPagina] = useState(5);
    const [pagina, setPagina] = useState(1);

    useEffect( ()=> {
        // hacer una peticion http get hacia nuestro webapi con la libreria axios
        cargarDatos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pagina, recordsPorPagina])

    function cargarDatos(){
        axios.get(urlGeneros, {
            params: {pagina, recordsPorPagina}
        })
            .then((respuesta: AxiosResponse<generoDTO[]>) => {
                const totalRegistro = 
                parseInt(respuesta.headers['cantidadtotalregistros'], 10);
                setTotalPaginas(Math.ceil(totalRegistro/recordsPorPagina));
                console.log(respuesta.data);
                setGeneros(respuesta.data);
            })
    }

    async function borrar(id:number){

        try{
            await axios.delete(`${urlGeneros}/${id}`)
            cargarDatos();
        } catch(error){
            console.log(error.response.data);
        }
    }

    return ( 
        <>
            <h3>Generos</h3>
            <Link className="btn btn-primary" to="generos/crear">Crear Genero</Link>

            <div className="form-group" style={{width: '150px'}}>
                <label>Registros por Pagina:</label>
                <select defaultValue={10}
                        onChange={e => {
                        setPagina(1);
                        setRecordsPorPagina(parseInt(e.currentTarget.value, 10))}} className="form-control">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>
            </div>

            <Paginacion cantidadTotalPaginas={totalPaginas} 
                        paginaActual={pagina} 
                        onChange={nuevaPagina => setPagina(nuevaPagina)} />

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
                                <Link className="btn btn-success" to={`/generos/editar/${generos.id}`}>
                                   Editar 
                                </Link>

                                <Button 
                                onClick={() => confirmar(() => borrar(generos.id))}
                                className="btn btn-danger">Borrar</Button>
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