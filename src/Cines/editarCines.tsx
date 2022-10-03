import FormularioCines from "./FormularioCines"

function editarCines() {
    return ( 
        <> 
            <h3>Editar Cines</h3>
            <FormularioCines 
            modelo={{nombre: 'Sambil', latitud:29.101301, longitud:-110.977276}} 
            onSubmit={valores => console.log(valores)}/>
        </>
        
     );
}

export default editarCines;