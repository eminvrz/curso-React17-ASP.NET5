import { Form, Formik, FormikHelpers } from "formik"
import React from "react";
import { Link } from "react-router-dom"
import * as Yup from 'yup'
import Button from "../utils/Button"
import FormGroupText from "../utils/FormGroupText"
import { generoCreacionDTO } from './Generos.model'

function FormularioGeneros(props: FormularioGeneroProps) {
    return ( 
        
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido')
                .max(50, 'La longitud maxima es de 50 caracteres')
                .primeraLetraMayuscula()
            })}
        >

            {(formikProps) => (
                <Form>
                <FormGroupText campo="nombre" label="Nombre" placeholder="Nombre del genero"/>

                <Button disabled={formikProps.isSubmitting} 
                type="submit">Salvar</Button>
                <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
            </Form>
            )}
            
        </Formik>

     );
}

interface FormularioGeneroProps{
    modelo: generoCreacionDTO;
    //Metodo que va a recibir valores y acciones
    onSubmit(values: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>) : void;
}
export default FormularioGeneros;