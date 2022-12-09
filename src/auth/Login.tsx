import axios from 'axios'
import { useState, useContext } from 'react'
import { urlCuentas } from '../utils/endPoints'
import MostrarErrores from '../utils/MostrarErrores'
import { credencialesUsuario, respuestaAutenticacion } from './auth.model'
import FormularioAuth from './FormularioAuth'
import { guardarTokenLocalStorage, obtenerClaims } from './manejadorJWT'
import AutenticacionContext from './AutenticacionContext'
import { useHistory } from 'react-router-dom'
function Login() {

    const {actualizar} = useContext(AutenticacionContext);
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([])

    async function login(credenciales: credencialesUsuario) {
        try {
            const respuesta = await
                axios.post<respuestaAutenticacion>(`${urlCuentas}/login`, credenciales);
                guardarTokenLocalStorage(respuesta.data);
                actualizar(obtenerClaims());
                history.push("/");
            console.log(respuesta);
        } catch (error) {
            setErrores(error.response.data)
        }
    }

    return (
        <>
            <h3>Login</h3>
            <MostrarErrores errores={errores} />
            <FormularioAuth
                modelo={{ email: '', password: '' }}
                onSubmit={async valores => await login(valores)}
            />
        </>

    )
}

export default Login