import React, { ReactElement } from "react"

interface ErrorBoundaryProps {
    errorUI?: ReactElement
    children: React.ReactNode
}
 
interface ErrorBoundaryState {
    hayError : boolean;
    mensaje : string;
}
 
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps){
        super(props);
        this.state = {hayError: false, mensaje: ''}
    }

//* Funcion que se va a ejecutar si hay un error en el componente
    componentDidCatch(error: any, errorInfo: any ){
        console.log(error);
        console.log(errorInfo);
        
    }

//* Funcion que va a cambiar el estado en caso de que haya un error
    static getDerivedStateFromError(error: any){
        return {hayError: true, mensaje: error}
    }

//* Esto determina lo que se va a renderizar
    render(){
        if( this.state.hayError){
            if(this.props.errorUI){
                return this.props.errorUI
            } else {
                return <h3>{this.state.mensaje}</h3>
            }
        }
        //* children se refiere al contenido interno del componente
        return this.props.children
    }
}
 
export default ErrorBoundary;