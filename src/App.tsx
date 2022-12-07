import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import AutenticacionContext from './auth/AutenticacionContext'
import { claim } from './auth/auth.model'
import rutas from './Peliculas/router-config'
import Menu from './utils/Menu'
import configurarValidaciones from './validaciones'

configurarValidaciones();

function App() {

  const[claims, setClaims] = useState<claim[]>([
    {nombre: 'email', valor:'emiliano.nvrz@gmail.com'},
    //{nombre: 'role', valor:'admin'}
  ]);

  function actualizar(claims: claim[]){
    setClaims(claims);
  }

  return (
    <>
      <BrowserRouter>

        <AutenticacionContext.Provider value={{claims, actualizar}}>
        <Menu />
        <div className="container">
          <Switch>
            //* Importando rutas, siempre se usara un map 
            {rutas.map(ruta =>
              <Route key={ruta.path} path={ruta.path}
                exact={ruta.exact}><ruta.componente />
              </Route>)}
          </Switch>
        </div>
        </AutenticacionContext.Provider>
      </BrowserRouter>

    </>
  )



}

export default App
