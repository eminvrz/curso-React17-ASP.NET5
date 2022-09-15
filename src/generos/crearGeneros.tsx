import { Field, Form, Formik } from "formik"
import { Link } from 'react-router-dom'
import Button from "../utils/Button"

function CrearGenero() {

    // UseHistory para poder navegar utilizando codigo de JavaScript
    //const history = useHistory();

    return (  
        <>
        <h3>Crear Genero</h3>

        <Formik initialValues={{
            nombre: 'nombre' // palabra por defecto
        }}
        onSubmit={values => {
            console.log(values)
        }}
        >
            <Form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <Field name="nombre" className="form-control"/>
                </div>

                <Button type="submit">Salvar</Button>
                <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
            </Form>
        </Formik>
        
        </>
        
    );
}

export default CrearGenero;