import { Form, Formik, FormikHelpers } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import Button from '../utils/Button'
import FormGroupFecha from "../utils/FormGroupFecha"
import FormGroupimagen from '../utils/FormGroupimagen'
import FormGroupMarkdown from "../utils/FormGroupMarkdown"
import FormGroupText from '../utils/FormGroupText'
import { actorCreacionDTO } from "./actores.model"

function FormularioActores(props: FormularioActoresProps) {
    return ( 
        <Formik
            initialValues = {props.modelo}
            onSubmit = {props.onSubmit} 
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
                fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
            })}>

            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre"/>
                    <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento"/>
                    <FormGroupimagen campo="foto" label="Foto" imagenURL={props.modelo.fotoURL}/>
                    <FormGroupMarkdown campo="biografia" label="Biografia"/>

                    <Button disabled = {formikProps.isSubmitting} type="submit">
                        Salvar
                    </Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            )}

        </Formik>
     );
}

interface FormularioActoresProps{
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>) : void;
}
export default FormularioActores;