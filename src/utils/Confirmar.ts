import Swal from 'sweetalert2';

export default function confirmar(
    onConfirm: any, 
    titulo: string = 'Desea borrar el registro?', 
    textoBotonConfirmar: string = 'Borrar'){
        Swal.fire({
            title: titulo,
            confirmButtonText: textoBotonConfirmar,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor: '#d33' 
        }).then(result => {
            if(result.isConfirmed){
                onConfirm();
            }
        })
}