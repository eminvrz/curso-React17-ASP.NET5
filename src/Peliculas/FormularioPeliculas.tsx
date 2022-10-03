import { Formik, Form, FormikHelpers } from 'formik'
import { peliculasCreacionDTO } from './peliculas.model'
import * as Yup from 'yup'
import FormGroupText from '../utils/FormGroupText'
import FormGroupCheckbox from '../utils/FormGroupCheckbox'
import FormGroupFecha from '../utils/FormGroupFecha'
import FormGroupimagen from '../utils/FormGroupimagen'
import Button from '../utils/Button'
import { Link } from 'react-router-dom'
import SelectorMultiple from '../utils/SelectorMultiple'
import { generoDTO, generoCreacionDTO } from '../Generos/Generos.model'
import { useState } from 'react'
import { selectorMultipleModel } from '../utils/SelectorMultiple'
function FormularioPeliculas(props: formularioPeliculasProps) {

    const [generosSeleccionados, setGenerosSeleccionados] = 
    useState(mapear(props.generosSeleccionados));

    const [generosNoSeleccionados, setGenerosNoSeleccionados] = 
    useState(mapear(props.generosNoSeleccionados));

    function mapear( arreglo: {id: number, nombre: string}[]): selectorMultipleModel[]{
        return arreglo.map(valor => {
            return {llave: valor.id, valor: valor.nombre}
        })
    }
    return ( 
        <Formik 
        initialValues={props.modelo} 
        onSubmit={(valores, acciones) => {
            valores.generosIds = generosSeleccionados.map(valor => valor.llave);
            props.onSubmit(valores, acciones);
        }}
        validationSchema={Yup.object({
            titulo: Yup.string().required('Este campo es requerido'). primeraLetraMayuscula()
        })}>
            {formikProps => (
                <Form>
                    <FormGroupText label='Titulo' campo='titulo'/>
                    <FormGroupCheckbox label='En cines' campo='enCines'/>
                    <FormGroupText label='Trailer' campo='trailer'/>
                    <FormGroupFecha label='Fecha Lanzamiento' campo='fechaLanzamiento' />
                    <FormGroupimagen label='Poster' campo='poster' imagenURL={props.modelo.posterURL}/>

                    <div className='form-group'>
                        <label>Generos:</label>
                        <SelectorMultiple 
                            seleccionados={generosSeleccionados} 
                            noSeleccionados={generosNoSeleccionados} 
                            onChange={(seleccionados, noSeleccionados) => { 
                                setGenerosSeleccionados(seleccionados)
                                setGenerosNoSeleccionados(noSeleccionados)}}
                        />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type='submit'>Enviar</Button>
                    <Link className='btn btn-secondary' to='/'>Cancelar</Link>
                </Form>
            )}
        </Formik>
     );
}

interface formularioPeliculasProps{
    modelo: peliculasCreacionDTO;
    onSubmit(valores: peliculasCreacionDTO, acciones: FormikHelpers<peliculasCreacionDTO>): void;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
}
export default FormularioPeliculas;