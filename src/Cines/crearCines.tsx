import FormularioCines from "./FormularioCines"

function crearCines() {
    return ( 
        <>
            <h3>Crear Cines</h3>
            <FormularioCines modelo={{nombre: ''}} onSubmit={valores => console.log(valores)}/>
        </>
        
     );
}

export default crearCines;