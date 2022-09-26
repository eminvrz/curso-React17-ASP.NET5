import { actorCreacionDTO } from "./actores.model"
import { Form, Formik, FormikHelpers } from 'formik'
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import FormGroupFecha from "../utils/FormGroupFecha"

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