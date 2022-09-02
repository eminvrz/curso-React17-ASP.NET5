import { useEffect, useState } from "react"
import ListadoPeliculas from "./listadoPeliculas"
import { landingPageDTO } from "./peliculas.model"

function LandingPage() {

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPeliculas({
                enCartelera: [
                    {
                        id: 1, titulo: 'Spider-Man: Far from Home',
                        poster: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2019/01/qDz9iemTMUENJnhakF1KPwLO2dl.jpg?itok=BJE8MyqO'
                    },
                    {
                        id: 2, titulo: 'Moana',
                        poster: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/aaab47a0da6fc54f0a304f891b1638a19b9ccdefb69a00f10329a70b9b70cc08._RI_V_TTW_.jpg'
                    },
                ],
                proximosEstrenos: [
                    {
                        id: 3, titulo: 'Soul',
                        poster: 'https://lumiere-a.akamaihd.net/v1/images/image_5e27f8d3.jpeg?region=0,0,648,972'
                    }
                ]
            })
        }, 500)

        return () => clearTimeout(timerId)
    })

    return (
        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />

            <h3>Proximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}

export default LandingPage