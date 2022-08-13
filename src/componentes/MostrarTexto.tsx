export default function MostrarTexto(props: mostrarTextoProps){
    return (
        <div>
          {props.texto}
        </div>
    )
}

interface mostrarTextoProps{
    texto: string;
}