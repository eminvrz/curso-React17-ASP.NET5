import { Field } from 'formik'
function FormGroupCheckbox(props: peliculasCreacionDTO) {
    return ( 
        <div className="formi-group form-check">
            <Field className="form-check-input" 
                    id={props.campo} 
                    name={props.campo}
                    type="checkbox" />
            <label htmlFor={props.campo}>{props.label}</label>

        </div>
     );
}

interface peliculasCreacionDTO{
    label: string;
    campo: string;
}

export default FormGroupCheckbox;