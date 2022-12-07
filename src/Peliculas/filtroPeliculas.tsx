import { Field, Form, Formik } from "formik"
import { generoDTO } from '../Generos/Generos.model'
import Button from "../utils/Button"
import { useEffect, useState } from 'react'
import { urlGeneros, urlPeliculas } from "../utils/endPoints"
import axios from "axios"
import { AxiosResponse } from 'axios'
import { peliculaDTO } from './peliculas.model'
import ListadoPeliculas from "./listadoPeliculas"

function FiltroPeliculas() {

    const valorInicial:  filtroPeliculasForm ={
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false,
        pagina: 1,
        recordsPorPagina: 10
    }

    const [generos, setGeneros] = useState<generoDTO[]>([]);
    const [peliculas, setPeliculas] = useState<peliculaDTO[]>([]);

    useEffect(() => {
        axios.get(`${urlGeneros}/todos`)
                .then((respueta: AxiosResponse<generoDTO[]>) => {
                    setGeneros(respueta.data);
                })
    }, [])

    useEffect(() => {
        buscarPeliculas(valorInicial);
    }, [])


    function buscarPeliculas(valores: filtroPeliculasForm){
        axios.get(`${urlPeliculas}/filtrar`, {params: valores})
                .then((respuesta: AxiosResponse<peliculaDTO[]>) => {
                    setPeliculas(respuesta.data);
                })
    }

    return ( 
        <>
            <h3>Filtro Peliculas</h3>

            <Formik initialValues={valorInicial}
                    onSubmit ={valores => buscarPeliculas(valores)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="titulo" className="sr-only">Titulo</label>
                                <input type="text"
                                    className="form-control" id="titulo"
                                    placeholder="Titulo de la pelicula"
                                    {...formikProps.getFieldProps('titulo')}
                                />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <select className="form-control"
                                    {...formikProps.getFieldProps('generoId')}
                                >
                                    <option value="0">--Seleccione un Genero--</option>
                                    {generos.map(genero => 
                                        <option  key={genero.id}value={genero.id}>
                                            {genero.nombre}
                                        </option>)}
                                </select>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="proximosEstrenos"
                                name="proximosEstrenos" type="checkbox"/>  
                                <label className="form-check-label" htmlFor="proximosEstrenos">
                                    Proximos Estrenos
                                </label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="enCines"
                                name="enCines" type="checkbox"/>  
                                <label className="form-check-label" htmlFor="enCines">
                                    enCines
                                </label>
                            </div>
                            <Button className="btn btn-primary mb-2 mx-sm-3" onClick={() => formikProps.submitForm()}>
                                Filtrar
                            </Button>
                            <Button className="btn btn-danger mb-2" 
                                    onClick={() => {
                                        formikProps.setValues(valorInicial);
                                        buscarPeliculas(valorInicial);
                                        }}
                                >Limpiar
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>

            <ListadoPeliculas peliculas={peliculas}/>
        </>
        
     );
}

interface filtroPeliculasForm{
    titulo: string,
    generoId: number,
    proximosEstrenos: boolean,
    enCines: boolean;
    pagina: number;
    recordsPorPagina: number;
}
export default FiltroPeliculas;