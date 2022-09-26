import { useFormikContext } from 'formik'
import { ChangeEvent, useState } from 'react'
function FormGroupimagen(props: formGroupImagenProps) {

    const divStyle = {marginTop: '10px'}
    const imgStyle = {width: '450px'}

    const [imagenBase64, setImagenBase64] = useState('');
    const [imagenURL, setImagenURL] = useState(props.imagenURL)
    const {values} = useFormikContext<any>();

    const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.files){
            const archivo = e.currentTarget.files[0];
            aBase64(archivo)
                .then((representacionBase64: string ) => setImagenBase64(representacionBase64))
                .catch(error => console.error(error))

            values[props.campo] = archivo;
            setImagenURL('');
        }
    }

    const aBase64 = (file: File) => {
        // resolve: cuando tenemos exito y reject: cuando tenemos un error
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }
    return ( 
        <div className="form-group">
            <label htmlFor="">{props.label}</label>
            <div>
                <input type="file" accept=".jpg, .jpeg, .png" onChange={ManejarOnChange}/>
            </div>
            {imagenBase64 ?
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imagenBase64} alt="Imagen Seleccionada" />
                </div>
            </div> : null
        }
        {imagenURL ?
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imagenURL} alt="Imagen Seleccionada" />
                </div>
            </div> : null
        }
        </div>
     );
}

interface formGroupImagenProps{
    campo: string;
    label: string;
    imagenURL?: string;
}

FormGroupimagen.defaultProps = {
    imagenURL: ''
}
export default FormGroupimagen;