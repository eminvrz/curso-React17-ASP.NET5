import FormularioPeliculas from './FormularioPeliculas'

function editarPeliculas() {
    return ( 
        <>
            <h3>Editar Peliculas</h3>

            <FormularioPeliculas 
            modelo={{titulo: 'SpiderMan', enCines:true, trailer:'url', fechaLanzamiento: new Date('2019-01-01T00:00:00')}}
            onSubmit={valores => console.log(valores)} />
        </>
        
     );
}

export default editarPeliculas;