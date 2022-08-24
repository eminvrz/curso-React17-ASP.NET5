import PeliculaIndividual from './peliculaIndividual'
import {pelicula} from './peliculas.model'
import css from './listadoPeliculas.module.css'
import Cargando from '../utils/Cargando'

function ListadoPeliculas(props: listadoPeliculasProps) {

    if(!props.peliculas){
        return <Cargando/>;
    } else if (props.peliculas.length === 0){
        return <>No hay elementos  para mostrar </>
    } else {
        return (  
            <div className={css.div}>
                {props.peliculas?.map(pelicula => 
                <PeliculaIndividual pelicula = {pelicula}
                                    key = {pelicula.id}
                />)}
            </div>
        );
    }
}

interface listadoPeliculasProps
{
    peliculas?: pelicula[]
}
export default ListadoPeliculas;