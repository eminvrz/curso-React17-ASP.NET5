import FormularioPeliculas from "./FormularioPeliculas"
import { generoDTO } from '../Generos/Generos.model'
import { cineDTO } from '../Cines/cines.model'

function crearPeliculas() {

    const generos: generoDTO[] = [
        {id: 1, nombre: 'Accion'}, 
        {id: 2, nombre: 'Drama'}, 
        {id: 3, nombre: 'Comedia'}
    ] 

    const cines: cineDTO[] = [{id: 1, nombre: 'Agora'}, {id: 2, nombre: 'Sambil'}]

    return ( 
        <>
            <h3>Crear Peliculas</h3>

            <FormularioPeliculas 
            actoresSeleccionados={[]}
            cinesSeleccionados={cines}
            cinesNoSeleccionados={[]}
            generosNoSeleccionados={generos}
            generosSeleccionados={[]}
            modelo={{titulo: '', enCines:false, trailer:''}}
            onSubmit={valores => console.log(valores)} />
        </>
        
     );
}

export default crearPeliculas;