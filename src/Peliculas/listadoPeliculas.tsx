import PeliculaIndividual from './peliculaIndividual'
import {pelicula} from './peliculas.model'
import css from './listadoPeliculas.module.css'
import ListadoGenerico from '../utils/ListadoGenerico'

function ListadoPeliculas(props: listadoPeliculasProps) {

    
        return (  
        <ListadoGenerico  listado =  {props.peliculas }>
             <div className={css.div}>
                {props.peliculas?.map(pelicula => 
                <PeliculaIndividual pelicula = {pelicula}
                                    key = {pelicula.id}
                />)}
            </div>
        </ListadoGenerico>
           
        );
    
}

interface listadoPeliculasProps
{
    peliculas?: pelicula[]
}
export default ListadoPeliculas;