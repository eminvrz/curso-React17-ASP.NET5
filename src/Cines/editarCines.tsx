import FormularioCines from "./FormularioCines"

function editarCines() {
    return ( 
        <>
            <h3>Editar Cines</h3>
            <FormularioCines modelo={{nombre: 'Sambil'}} onSubmit={valores => console.log(valores)}/>
        </>
        
     );
}

export default editarCines;