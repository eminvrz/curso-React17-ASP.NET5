import './App.css'
import { pelicula } from './Peliculas/peliculas.model'
import PeliculaIndividual from './Peliculas/peliculaIndividual'

function App() {

  const peliculaPrueba: pelicula = {
    id: 1, titulo: 'Spider-Man: Far from Home',
    poster: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2019/01/qDz9iemTMUENJnhakF1KPwLO2dl.jpg?itok=BJE8MyqO'
  }

  return(
    <>
      <PeliculaIndividual pelicula ={peliculaPrueba}/>
    </>
  );


  
}

export default App;
