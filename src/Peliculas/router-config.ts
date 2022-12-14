import crearActores from '../Actores/crearActores'
import editarActores from '../Actores/editarActores'
import indiceActores from '../Actores/indiceActores'
import Login from '../auth/Login'
import Registro from '../auth/Registro'
import crearCines from "../Cines/crearCines"
import editarCines from "../Cines/editarCines"
import indiceCines from "../Cines/indiceCines"
import crearGenero from "../Generos/crearGeneros"
import editarGenero from "../Generos/editarGeneros"
import IndiceGeneros from "../Generos/indiceGeneros"
import RedireccionarALanding from "../utils/RedireccionarALanding"
import crearPeliculas from "./crearPeliculas"
import DetallePelicula from "./DetallePelicula"
import editarPeliculas from './editarPeliculas'
import filtroPeliculas from "./filtroPeliculas"
import LandingPage from './LandingPage'

import IndiceUsuarios from '../auth/IndiceUsuarios'

const rutas  = [
    {path: '/generos/crear', componente: crearGenero, esAdmin: true},
    {path: '/generos/editar/:id(\\d+)', componente: editarGenero, esAdmin: true},
    {path: '/generos', componente: IndiceGeneros, exact: true, esAdmin: true},

    {path: '/actores/crear', componente: crearActores, esAdmin: true},
    {path: '/actores/editar/:id(\\d+)', componente: editarActores, esAdmin: true},
    {path: '/actores', componente: indiceActores, exact: true, esAdmin: true},

    {path: '/cines/crear', componente: crearCines, esAdmin: true},
    {path: '/cines/editar/:id(\\d+)', componente: editarCines, esAdmin: true},
    {path: '/cines', componente: indiceCines, exact: true, esAdmin: true},

    {path: '/pelicula/:id(\\d+)', componente: DetallePelicula},

    {path: '/peliculas/crear', componente: crearPeliculas, esAdmin: true},
    {path: '/peliculas/editar/:id(\\d+)', componente: editarPeliculas, esAdmin: true},
    {path: '/peliculas/filtrar', componente: filtroPeliculas},

    {path: '/registro', componente: Registro}, 
    {path: '/login', componente: Login}, 
    {path: '/usuarios', componente: IndiceUsuarios, esAdmin: true}, 


    {path: '/', componente: LandingPage, exact: true},
    {path: '*', componente: RedireccionarALanding}
];

export default rutas;