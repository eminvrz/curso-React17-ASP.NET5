import { Typeahead } from 'react-bootstrap-typeahead'
import { actorPeliculaDTO, actorCreacionDTO } from './actores.model'
import { ReactElement, useState } from 'react'


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

    const seleccion: actorPeliculaDTO[] = []; //seleccion borrara el nombre del actor despues de haberlo seleccionado

    const [elementoArrastrado, setElementoArrastrado] = useState <actorPeliculaDTO | undefined >(undefined)

    function manejarDragStart(actor: actorPeliculaDTO){
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actorPeliculaDTO){
        if(!elementoArrastrado){
            return;
        }
        if(actor.id !== elementoArrastrado.id){
            const elementoArrastradoIndice = 
                props.actores.findIndex(x => x.id === elementoArrastrado.id);
            const actorIndice = 
                props.actores.findIndex(x => x.id === actor.id);

            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
            props.onAdd(actores);
        }
    }

    return ( 
        <>
            <label>Actores</label>
            <Typeahead 
                id="typeahead" 
                onChange={actores => {
                    if(props.actores.findIndex(x => x.id === actores[0].id) === -1){
                        props.onAdd([...props.actores, actores[0]]);
                    }
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={actor => (
                    <>
                        <img 
                            alt='imagen actor' 
                            src={actor.foto} 
                            style={{
                                height:'64px', 
                                marginRight:'10px', 
                                width:'64px'}}
                        />
                        <span>{actor.nombre}</span>
                    </>
                )}
            />

            <ul className='list-group'>
                    {props.actores.map(actor => 
                    <li 
                        onDragStart={() => manejarDragStart(actor)}
                        onDragOver={() => manejarDragOver(actor)}
                        draggable= {true}
                        className='list-group-item list-group-item-action' 
                        key={actor.id} >

                        {props.listadoUI(actor)} 

                        <span className='badge badge-primary badge-pill pointer' 
                              style={{marginLeft:'0.5rem'}}
                              onClick={() => props.onRemove(actor)}>
                            X
                        </span>
                    </li> )}
            </ul>
        </>
     );
}


interface typeAheadActoresProps{
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void; // cuando seleccionemos un actor
    listadoUI(actor: actorPeliculaDTO): ReactElement;
    onRemove(actor: actorPeliculaDTO): void;
}
export default TypeAheadActores;