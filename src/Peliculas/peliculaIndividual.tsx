
import { pelicula } from "./peliculas.model"
import css from './peliculasIndividual.module.css'


function PeliculaIndividual(props: peliculaIndividualProps) {

    const construirLink = () => `/pelicula/${props.pelicula.id}`

    return (  
        <div className={css.div}>
            <a href={construirLink()}>
                <img src={props.pelicula.poster} alt="Poster" />
            </a>
            <p>
                <a href={construirLink()}>{props.pelicula.titulo}</a>
            </p>
        </div>
    );
}

interface peliculaIndividualProps{
    pelicula: pelicula;
}

export default PeliculaIndividual;