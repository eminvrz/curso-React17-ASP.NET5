import FormularioPeliculas from "./FormularioPeliculas"
import { generoDTO } from '../Generos/Generos.model'
import { cineDTO } from '../Cines/cines.model'
import { useEffect, useState } from 'react'
import axios from "axios"
import { urlPeliculas } from "../utils/endPoints"
import { AxiosResponse } from 'axios'
import { peliculasCreacionDTO, peliculasPostGetDTO } from "./peliculas.model"
import Cargando from "../utils/Cargando"
import { convertirPeliculaAFormData } from "../utils/formDataUtils"
import { useHistory } from 'react-router-dom'
import MostrarErrores from "../utils/MostrarErrores"

function CrearPeliculas() {

    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState<generoDTO[]>([]); 
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState<cineDTO[]>([]); 
    const [cargado, setCargado] = useState(false);
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);
    
    useEffect(() => {
        axios.get(`${urlPeliculas}/postget`)
        .then((respuesta: AxiosResponse<peliculasPostGetDTO>) => {
            setGenerosNoSeleccionados(respuesta.data.generos);
            setCinesNoSeleccionados(respuesta.data.cines);
            setCargado(true);
        })
    }, [])

    async function crear(pelicula: peliculasCreacionDTO) {
        try{
            const formData = convertirPeliculaAFormData(pelicula);
            await axios({
                method: 'post',
                url: urlPeliculas,
                data: formData,
                headers:{'Content-Type': 'multipart/form-data'}
            }).then((respuesta: AxiosResponse<number>) => {
                history.push(`/pelicula/${respuesta.data}`);
            })
        }

        catch(error){
            setErrores(error.response.data);
        }
    }


    return ( 
        <>
            <h3>Crear Peliculas</h3>
            <MostrarErrores errores={errores}/>
            {cargado ? <FormularioPeliculas
            actoresSeleccionados={[]}
            cinesSeleccionados={cinesNoSeleccionados}
            cinesNoSeleccionados={[]}
            generosNoSeleccionados={generosNoSeleccionados}
            generosSeleccionados={[]}
            modelo={{titulo: '', enCines:false, trailer:''}}
            onSubmit={async valores => crear(valores)} 
            /> : <Cargando />}
        </>
        
     );
}

export default CrearPeliculas;