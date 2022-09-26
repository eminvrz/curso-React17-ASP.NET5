import * as Yup from 'yup'

function configurarValidaciones() {
    Yup.addMethod(Yup.string, 'primeraLetraMayuscula', function (){
        return this.test('primera-letra-mayuscula', 'La primera letra debe ser Mayuscula', 
        function(valor){
            if(valor && valor.length > 0){
                const primerLetra = valor.substring(0,1);
                return primerLetra === primerLetra.toUpperCase();
            }
            return true;
        })
    })
}

export default configurarValidaciones;