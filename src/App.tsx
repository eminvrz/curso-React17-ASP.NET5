import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(( ) => {
      setFecha(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  })


  return (
    <div>
      <h3> Ejemplo React</h3>
            <input />
            <div>{fecha.toString()}</div>
    </div>
  );
}

export default App;
