import FormularioPeliculas from "./FormularioPeliculas"

function crearPeliculas() {
    return ( 
        <>
            <h3>Crear Peliculas</h3>

            <FormularioPeliculas modelo={{titulo: '', enCines:false, trailer:''}}
            onSubmit={valores => console.log(valores)} />
        </>
        
     );
}

export default crearPeliculas;