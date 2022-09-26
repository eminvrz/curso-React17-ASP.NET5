function MostrarErrorCampo(props: mostrarErrorCampoProps) {
    return ( 
        <div className="text-danger">{props.mensaje}</div>
     );
}

interface mostrarErrorCampoProps{
    mensaje: string;
    
}
export default MostrarErrorCampo;