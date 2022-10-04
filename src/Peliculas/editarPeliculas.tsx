import { generoDTO } from '../Generos/Generos.model'
import FormularioPeliculas from './FormularioPeliculas'
import { cineDTO } from '../Cines/cines.model'
import { actorPeliculaDTO } from '../Actores/actores.model'

function editarPeliculas() {

    const generosNoSeleccionados: generoDTO[] = [
        {id: 2, nombre: 'Drama'}, 
    ];
    const generosSeleccionados: generoDTO[] = [
        {id: 1, nombre: 'Accion'}, 
        {id: 3, nombre: 'Comedia'}
    ] 

    const cinesSeleccionados: cineDTO[] = [{id: 2, nombre: 'Sambil'}]
    const cinesNoSeleccionados: cineDTO[] = [{id: 1, nombre: 'Agora'}]

    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
            id: 1,
            nombre: 'Felipe',
            personaje: '',
            foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg'
        },
    ]
    return ( 
        <>
            <h3>Editar Peliculas</h3>

            <FormularioPeliculas
            actoresSeleccionados={actoresSeleccionados}
            cinesSeleccionados={cinesSeleccionados} 
            cinesNoSeleccionados={cinesNoSeleccionados} 
            generosNoSeleccionados={generosNoSeleccionados}
            generosSeleccionados={generosSeleccionados}
            modelo={{titulo: 'SpiderMan', enCines:true, trailer:'url', fechaLanzamiento: new Date('2019-01-01T00:00:00')}}
            onSubmit={valores => console.log(valores)} />
        </>
        
     );
}

export default editarPeliculas;