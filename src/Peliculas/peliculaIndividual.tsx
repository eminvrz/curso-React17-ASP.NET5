
import axios from "axios"
import { Link } from "react-router-dom"
import Button from "../utils/Button"
import confirmar from "../utils/Confirmar"
import { urlPeliculas } from "../utils/endPoints"
import { peliculaDTO } from "./peliculas.model"
import css from './peliculasIndividual.module.css'
import { useContext } from 'react'
import AlertaContext from '../utils/AlertaContext'


function PeliculaIndividual(props: peliculaIndividualProps) {

    const construirLink = () => `/pelicula/${props.pelicula.id}`
    const alerta = useContext(AlertaContext)

    function borrarPelicula(){
        axios.delete(`${urlPeliculas}/${props.pelicula.id}`)
            .then(() => {
                alerta();
            })
    }

    return (  
        <div className={css.div}>
            <a href={construirLink()}>
                <img src={props.pelicula.poster} alt="Poster" />
            </a>
            <p>
                <a href={construirLink()}>{props.pelicula.titulo}</a>
            </p>
            <div>
                <Link style={{marginRight: '1rem'}}  className="btn btn-info"
                    to={`/peliculas/editar/${props.pelicula.id}`}>Editar</Link>
                <Button 
                onClick={() => confirmar(() => borrarPelicula())}
                className="btn btn-danger">Borrar</Button>
            </div>
        </div>
    );
}

interface peliculaIndividualProps{
    pelicula: peliculaDTO;
}

export default PeliculaIndividual;