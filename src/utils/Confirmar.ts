import Swal from 'sweetalert2';

export default function confirmar(
    onConfirm: any, 
    titulo: string = 'Desea borrar el registro?', 
    textoBotonConfirmar: string = 'Borrar'){
        Swal.fire({
            title: titulo,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor: '#d33' ,
            confirmButtonText: textoBotonConfirmar
        }).then(result => {
            if(result.isConfirmed){
                onConfirm();
            }
        })
}