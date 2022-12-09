import FormularioAuth from './FormularioAuth'
import { credencialesUsuario, respuestaAutenticacion } from './auth.model'
import axios from 'axios'
import { urlCuentas } from '../utils/endPoints'
import { useContext, useState } from 'react'
import MostrarErrores from '../utils/MostrarErrores'
import React from 'react'
import { guardarTokenLocalStorage, obtenerClaims } from './manejadorJWT'
import AutenticacionContext from './AutenticacionContext'
import { useHistory } from 'react-router-dom'


export default function Registro() {
    const {actualizar} = useContext(AutenticacionContext);
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([])

    async function registrar(credenciales: credencialesUsuario) {
        try {
            const respuesta = await axios
                .post<respuestaAutenticacion>(`${urlCuentas}/crear`, credenciales);
                guardarTokenLocalStorage(respuesta.data);
                actualizar(obtenerClaims());
                history.push("/");
            console.log(respuesta.data);
        } catch (error) {
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Registro</h3>
            <MostrarErrores errores={errores}/>
            <FormularioAuth modelo={{ email: '', password: '' }}
                onSubmit={async valores => await registrar(valores)}
            />
        </>
    )
}