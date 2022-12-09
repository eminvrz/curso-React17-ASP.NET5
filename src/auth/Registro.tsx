import FormularioAuth from './FormularioAuth'
import { credencialesUsuario, respuestaAutenticacion } from './auth.model'
import axios from 'axios'
import { urlCuentas } from '../utils/endPoints'
import { useState } from 'react'
import MostrarErrores from '../utils/MostrarErrores'
import React from 'react'


export default function Registro() {
    const [errores, setErrores] = useState<string[]>([])

    async function registrar(credenciales: credencialesUsuario) {
        try {
            const respuesta = await axios
                .post<respuestaAutenticacion>(`${urlCuentas}/crear`, credenciales)
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