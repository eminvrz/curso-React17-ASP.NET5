import axios from "axios"
import { useEffect, useState } from "react"
import ListadoPeliculas from "./listadoPeliculas"
import { landingPageDTO } from './peliculas.model'
import { urlPeliculas } from '../utils/endPoints'
import { AxiosResponse } from 'axios'

function LandingPage() {

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
        axios.get(urlPeliculas)
        .then((respuesta: AxiosResponse<landingPageDTO>) => {
            setPeliculas(respuesta.data);
        })
    }, [])

    return (
        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCines} />

            <h3>Proximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}

export default LandingPage