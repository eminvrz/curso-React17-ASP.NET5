import PeliculaIndividual from './peliculaIndividual'
import {pelicula} from './peliculas.model'
import css from './listadoPeliculas.module.css'

function ListadoPeliculas(props: listadoPeliculasProps) {
    return (  
        <div className={css.div}>
            {props.peliculas.map(pelicula => 
            <PeliculaIndividual pelicula = {pelicula}
                                key = {pelicula.id}
            />)}
        </div>
    );
}

interface listadoPeliculasProps
{
    peliculas: pelicula[]
}
export default ListadoPeliculas;