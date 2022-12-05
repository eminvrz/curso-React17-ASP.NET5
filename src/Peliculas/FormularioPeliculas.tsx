import { Form, Formik, FormikHelpers } from 'formik'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import TypeAheadActores from '../Actores/TypeAheadActores'
import { cineDTO } from '../Cines/cines.model'
import { generoDTO } from '../Generos/Generos.model'
import Button from '../utils/Button'
import FormGroupCheckbox from '../utils/FormGroupCheckbox'
import FormGroupFecha from '../utils/FormGroupFecha'
import FormGroupimagen from '../utils/FormGroupimagen'
import FormGroupText from '../utils/FormGroupText'
import SelectorMultiple, { selectorMultipleModel } from '../utils/SelectorMultiple'
import { peliculasCreacionDTO } from './peliculas.model'
import { actorPeliculaDTO } from '../Actores/actores.model'
import FormGroupMarkdown from '../utils/FormGroupMarkdown'

function FormularioPeliculas(props: formularioPeliculasProps) {

    const [generosSeleccionados, setGenerosSeleccionados] = 
    useState(mapear(props.generosSeleccionados));

    const [generosNoSeleccionados, setGenerosNoSeleccionados] = 
    useState(mapear(props.generosNoSeleccionados));

    const [cinesSeleccionados, setCinesSeleccionados] = 
    useState(mapear(props.cinesSeleccionados));

    const [cinesNoSeleccionados, setCinesNoSeleccionados] = 
    useState(mapear(props.cinesNoSeleccionados));

    const [actoresSeleccionados, setActoresSeleccionados] = 
        useState<actorPeliculaDTO[]>(props.actoresSeleccionados)

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
            valores.cinesIds = cinesSeleccionados.map(valor => valor.llave);
            valores.actores = actoresSeleccionados;
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
                    <FormGroupMarkdown campo="resumen" label="Resumen" />

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

                    <div className='form-group'>
                        <label>Cines:</label>
                        <SelectorMultiple 
                            seleccionados={cinesSeleccionados} 
                            noSeleccionados={cinesNoSeleccionados} 
                            onChange={(seleccionados, noSeleccionados) => { 
                                setCinesSeleccionados(seleccionados)
                                setCinesNoSeleccionados(noSeleccionados)}}
                        />
                    </div>

                    <div className='form-group'>
                            <TypeAheadActores 
                                onAdd={actores => {
                                    setActoresSeleccionados(actores);
                                }}
                                onRemove={actor => {
                                    const actores = actoresSeleccionados.filter(x => x !== actor);
                                    setActoresSeleccionados(actores);
                                }}
                                actores={actoresSeleccionados} // arreglo vacio
                                listadoUI={
                                    (actor: actorPeliculaDTO) => <>
                                        {actor.nombre} / 
                                        <input placeholder='Personaje' 
                                               type="text" 
                                               value={actor.personaje} 
                                               onChange={e => {
                                                    const indice = actoresSeleccionados.findIndex(x => x.id === actor.id);
                                                    const actores = [...actoresSeleccionados];
                                                    actores[indice].personaje = e.currentTarget.value;
                                                    setActoresSeleccionados(actores);
                                            }}
                                        />
                                    </> 
                                }
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
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
    actoresSeleccionados: actorPeliculaDTO[];
}
export default FormularioPeliculas;