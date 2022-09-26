import { Form, Formik } from "formik"
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import Button from "../utils/Button"
import FormGroupText from "../utils/FormGroupText"

function CrearGenero() {

    // UseHistory para poder navegar utilizando codigo de JavaScript
    //const history = useHistory();

    return (
        <>
            <h3>Crear Genero</h3>

            <Formik initialValues={{
                nombre: '' // palabra por defecto
            }}
                onSubmit={async values => {
                    await new Promise(r => setTimeout(r, 300));
                    console.log(values)
                }}

                validationSchema={Yup.object({
                    nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
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

        </>

    )
}

export default CrearGenero