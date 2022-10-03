import { generoDTO } from '../Generos/Generos.model'
import FormularioPeliculas from './FormularioPeliculas'

function editarPeliculas() {

    const generosNoSeleccionados: generoDTO[] = [
        {id: 2, nombre: 'Drama'}, 
    ];
    const generosSeleccionados: generoDTO[] = [
        {id: 1, nombre: 'Accion'}, 
        {id: 3, nombre: 'Comedia'}
    ] 

    return ( 
        <>
            <h3>Editar Peliculas</h3>

            <FormularioPeliculas 
            generosNoSeleccionados={generosNoSeleccionados}
            generosSeleccionados={generosSeleccionados}
            modelo={{titulo: 'SpiderMan', enCines:true, trailer:'url', fechaLanzamiento: new Date('2019-01-01T00:00:00')}}
            onSubmit={valores => console.log(valores)} />
        </>
        
     );
}

export default editarPeliculas;