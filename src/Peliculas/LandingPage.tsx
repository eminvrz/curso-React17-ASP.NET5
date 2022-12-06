import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import AlertaContext from "../utils/AlertaContext"
import { urlPeliculas } from '../utils/endPoints'
import ListadoPeliculas from "./listadoPeliculas"
import { landingPageDTO } from './peliculas.model'

function LandingPage() {

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
        cargarDatos();
    }, [])

    function cargarDatos() {
        axios.get(urlPeliculas)
        .then((respuesta: AxiosResponse<landingPageDTO>) => {
            setPeliculas(respuesta.data);
        })
    }

    return (
        <>
            <AlertaContext.Provider value={() => cargarDatos()}>
                <h3>En Cartelera</h3>
                <ListadoPeliculas peliculas={peliculas.enCines} />

                <h3>Proximos Estrenos</h3>
                <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
            </AlertaContext.Provider>
            
        </>
    )
}

export default LandingPage