import { Typeahead } from 'react-bootstrap-typeahead'
import { actorPeliculaDTO } from './actores.model'


function TypeAheadActores(props: typeAheadActoresProps) {

    const actores: actorPeliculaDTO[] = [
    {
        id: 1,
        nombre: 'Felipe',
        personaje: '',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg'
    },
    {
        id: 2,
        nombre: 'Fernando',
        personaje: '',
        foto: 'https://mx.web.img2.acsta.net/pictures/15/07/27/12/24/354255.jpg'
    },
    {
        id: 3,
        nombre: 'Roberto',
        personaje: '',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg'
    }
]

    return ( 
        <>
            <label>Actores</label>
            <Typeahead 
                id="typeahead" 
                onChange={actor => {console.log(actor)}}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
            />
        </>
     );
}


interface typeAheadActoresProps{
    actores: actorPeliculaDTO[];
}
export default TypeAheadActores;