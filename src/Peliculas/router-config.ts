import crearGenero from "../Generos/crearGeneros"
import editarGenero from "../Generos/editarGeneros"
import IndiceGeneros from "../Generos/indiceGeneros"
import LandingPage from './LandingPage'
import editarActores from '../Actores/editarActores'
import indiceActores from '../Actores/indiceActores'
import crearActores from '../Actores/crearActores'
import indiceCines from "../Cines/indiceCines"
import crearCines from "../Cines/crearCines"
import editarCines from "../Cines/editarCines"
import crearPeliculas from "./crearPeliculas"
import editarPeliculas from './editarPeliculas'
import filtroPeliculas from "./filtroPeliculas"

const rutas  = [
    {path: '/generos/crear', componente: crearGenero},
    {path: '/generos/editar', componente: editarGenero},
    {path: '/generos', componente: IndiceGeneros},

    {path: '/actores/crear', componente: crearActores},
    {path: '/actores/editar', componente: editarActores},
    {path: '/actores', componente: indiceActores},

    {path: '/cines/crear', componente: crearCines},
    {path: '/cines/editar', componente: editarCines},
    {path: '/cines', componente: indiceCines},

    {path: '/peliculas/crear', componente: crearPeliculas},
    {path: '/peliculas/editar', componente: editarPeliculas},
    {path: '/peliculas/filtrar', componente: filtroPeliculas},

    {path: '/', componente: LandingPage, exact: true,}
];

export default rutas;