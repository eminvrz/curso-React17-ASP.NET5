import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Cargando from '../utils/Cargando'
import { urlPeliculas } from '../utils/endPoints'
import { convertirPeliculaAFormData } from '../utils/formDataUtils'
import MostrarErrores from '../utils/MostrarErrores'
import FormularioPeliculas from './FormularioPeliculas'
import { peliculasCreacionDTO, peliculasPutGetDTO } from './peliculas.model'

function EditarPeliculas() {

   const [pelicula, setPelicula] = useState<peliculasCreacionDTO>();
   const [peliculaPutGet, setPeliculaPutGet] = useState<peliculasPutGetDTO>();
   const {id}: any = useParams();
   const history = useHistory();
   const [errores, setErrores] = useState<string[]>([]);

   useEffect(() => {
        axios.get(`${urlPeliculas}/PutGet/${id}`)
            .then((respuesta: AxiosResponse<peliculasPutGetDTO>) => {
                const modelo: peliculasCreacionDTO = {
                    titulo: respuesta.data.pelicula.titulo,
                    enCines: respuesta.data.pelicula.enCines,
                    trailer: respuesta.data.pelicula.trailer,
                    posterURL: respuesta.data.pelicula.poster,
                    resumen: respuesta.data.pelicula.resumen,
                    fechaLanzamiento: new Date(respuesta.data.pelicula.fechaLanzamiento)
                };
                setPelicula(modelo);
                setPeliculaPutGet(respuesta.data);
            })
   }, [id])

   async function editar(peliculaEditar: peliculasCreacionDTO){
        try{
            const formData = convertirPeliculaAFormData(peliculaEditar);
            await axios({
                method: 'put',
                url: `${urlPeliculas}/${id}`,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            });
            history.push(`/pelicula/${id}`);
        }
        catch(error){
            setErrores(error.response.data);
        }
   }

    return ( 
        <>
            <h3>Editar Peliculas</h3>
            <MostrarErrores errores={errores}/>
            {pelicula && peliculaPutGet ? <FormularioPeliculas
            actoresSeleccionados={peliculaPutGet.actores}
            cinesSeleccionados={peliculaPutGet.cinesSeleccionados} 
            cinesNoSeleccionados={peliculaPutGet.cinesNoSeleccionados} 
            generosNoSeleccionados={peliculaPutGet.generosNoSeleccionados}
            generosSeleccionados={peliculaPutGet.generosSeleccionados}
            modelo= {pelicula!}
            onSubmit={async valores => await editar(valores)} /> : <Cargando/>}
            
        </>
        
     );
}

export default EditarPeliculas;