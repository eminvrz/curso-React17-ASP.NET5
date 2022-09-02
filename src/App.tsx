import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import IndiceGeneros from './generos/indiceGeneros'
import LandingPage from './Peliculas/LandingPage'
import Menu from './utils/Menu'

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Switch>
            <Route exact path="/">
             <LandingPage/>
            </Route>

            <Route path="/generos">
              <IndiceGeneros />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>

    </>
  )



}

export default App
