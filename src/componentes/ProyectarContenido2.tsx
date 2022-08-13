import { ReactElement } from 'react'
export default function ProyectarContenido2 (
    props: proyectarContenido2Props) {
    return (
        <>
            {props.parteSuperior}
            <hr />
            {props.parteIntermedia}
            <hr />
            {props.parteInferior}
        </>
    )
}

interface proyectarContenido2Props{
    parteSuperior: ReactElement;
    parteIntermedia: ReactElement;
    parteInferior: ReactElement;
}