import crearActores from '../Actores/crearActores'
import editarActores from '../Actores/editarActores'
import indiceActores from '../Actores/indiceActores'
import crearCines from "../Cines/crearCines"
import editarCines from "../Cines/editarCines"
import indiceCines from "../Cines/indiceCines"
import crearGenero from "../Generos/crearGeneros"
import editarGenero from "../Generos/editarGeneros"
import IndiceGeneros from "../Generos/indiceGeneros"
import RedireccionarALanding from "../utils/RedireccionarALanding"
import crearPeliculas from "./crearPeliculas"
import editarPeliculas from './editarPeliculas'
import filtroPeliculas from "./filtroPeliculas"
import LandingPage from './LandingPage'

const rutas  = [
    {path: '/generos/crear', componente: crearGenero},
    {path: '/generos/editar/:id(\\d+)', componente: editarGenero},
    {path: '/generos', componente: IndiceGeneros, exact: true},

    {path: '/actores/crear', componente: crearActores},
    {path: '/actores/editar/:id(\\d+)', componente: editarActores},
    {path: '/actores', componente: indiceActores, exact: true},

    {path: '/cines/crear', componente: crearCines},
    {path: '/cines/editar/:id(\\d+)', componente: editarCines},
    {path: '/cines', componente: indiceCines, exact: true},

    {path: '/peliculas/crear', componente: crearPeliculas},
    {path: '/peliculas/editar/:id(\\d+)', componente: editarPeliculas},
    {path: '/peliculas/filtrar', componente: filtroPeliculas},

    {path: '/', componente: LandingPage, exact: true},
    {path: '*', componente: RedireccionarALanding}
];

export default rutas;