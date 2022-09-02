import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import rutas from './Peliculas/router-config'
import Menu from './utils/Menu'

function App() {

  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>

    </>
  )



}

export default App
