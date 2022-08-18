function ContenidoDinamico(props: any) {

    //* Ejemplo 1 Operador ternario 
    // return ( 
    //     <div>
    //         {props.mostrarMensajeSecreto ? <span> Mensaje Secreto: 42</span> : null}
    //     </div>
    //  );

    //* Ejemplo 2 IF
    if(props.calificacion>90){
        return(
            <div>
                <h3>{props.nombre}: Excelente Calificacion</h3>
            </div>
        )
    } else if(props.calificacion >= 80 && props.calificacion <= 90 ){
        return (
            <div>
                <h3>{props.nombre}:Muy bien hecho</h3>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{props.nombre}:lol...</h3>
            </div>
        )
    }
}

export default ContenidoDinamico;