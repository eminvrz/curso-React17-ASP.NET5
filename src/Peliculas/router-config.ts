import IndiceGeneros from "../generos/indiceGeneros"
import LandingPage from './LandingPage'

const rutas  = [
    {path: '/generos', componente: IndiceGeneros},
    {path: '/', componente: LandingPage, exact: true, }
];

export default rutas;