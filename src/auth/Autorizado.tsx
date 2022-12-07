import { ReactElement, useState, useContext, useEffect } from 'react'
import AutenticacionContext from './AutenticacionContext'
function Autorizado(props: autorizadoProps) {

    const [estaAutorizado, setEstaAutorizado] = useState(false);
    const {claims} = useContext(AutenticacionContext);

    useEffect(() => {
        if(props.role){
            const indice = claims.findIndex(claim => 
                claim.nombre === 'role' && claim.valor === props.role)
            setEstaAutorizado(indice > -1);
        } else {
            setEstaAutorizado(claims.length > 0);
        }
    }, [claims, props.role])

    return (  
        <>
            {estaAutorizado ? props.autorizado : props.noAutorizado}
        </>
    );
}

interface autorizadoProps{
    autorizado: ReactElement;
    noAutorizado?: ReactElement;
    role?: string;

}

export default Autorizado;