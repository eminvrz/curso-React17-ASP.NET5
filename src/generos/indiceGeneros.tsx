import { urlGeneros } from "../utils/endPoints"
import IndiceEntidad from "../utils/IndiceEntidad"
import { generoDTO } from "./Generos.model"

function IndiceGeneros() {
     return ( 
        <>        
                <IndiceEntidad<generoDTO>
                    url={urlGeneros}
                    urlCreacion="generos/crear"
                    titulo = "Generos"
                    nombreEntidad = "Genero" 
                    >
                        {(generos, botones) => <>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                            </tr>
                         </thead>
                         <tbody>
                            {generos?.map(generos => 
                            <tr key={generos.id}>
                                <td>
                                    {botones(`generos/editar/${generos.id}`, generos.id)}
                                </td>
                                <td>
                                    {generos.nombre}
                                </td>
                            </tr>)}
                         </tbody>

                        </>}
                        
                
                </IndiceEntidad> 
                   
        </>
        
     );
}

export default IndiceGeneros;