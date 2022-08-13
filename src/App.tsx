import { useState } from 'react'
import './App.css'
import EjemploReloj from './componentes/EjemploReloj'
import MostrarTexto from './componentes/MostrarTexto'
import ProyectarContenido2 from './componentes/ProyectarContenido2'

function App() {

  const imagenURL= "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg";


  const manejarClick = () => console.log('click');
  
  const [texto, setTexto] = useState('Valor por defecto');

  const [checked, setChecked] = useState(false);

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setTexto(e.currentTarget.value);

  }

    const parteIntermedia = <EjemploReloj/>

    const estilo = {
      backgroundColor: 'red', width: '50px', height: '50px', marginLeft: '1rem'
    }

    const parteInferior = <div style={estilo }></div>

  return(
    <div>
      <h1 className='rojo'>Hola mundo!</h1>

      <ProyectarContenido2
          parteSuperior={<h3>Esta es la parte de arriba</h3>}
          parteIntermedia={parteIntermedia}
          parteInferior = {parteInferior}
        />


      {/* Importamos el componente Proyc... Para visualizarlo en su propio componente, es decir estamos enviando contenido como parametro a nuestro componente */}
      {/* <ProyectarContenido> */}
        <>
        {/* <span> Hola proyectando contenido </span> */}
        {/* <img src={imagenURL} alt="logo react" /> */}
        </>
      {/* </ProyectarContenido> */}

      <button 

      onMouseEnter={() => console.log('entrando')}
      onClick={() => console.log('click desde el boton')}>Clickeame</button>
<br />
      <input type="text" 
        onKeyUp={(e) => manejarKeyUp(e)}
      />

      {/* traer funciones fuera de de este componente */}
      <MostrarTexto texto= {texto}/>

<br />
      {/* <img src={imagenURL} alt="logo react" /> */}
      <div>
        <input type="checkbox" 
        onChange={(e) => setChecked(e.currentTarget.checked)}
        checked= {checked} /> Este es un checkbox
      </div>
    </div>
  );


  
}

export default App;
