import { useEffect, useState } from 'react'

function EjemploUseEffect() {

    //* ReactHook UseState
    const [clicks, setClicks] = useState(0)
    const [fecha, setFecha] = useState(new Date())

    //* ReactHook UseEffecthh

    useEffect(() => {
        console.log('useEffect del click');
        document.title = `${clicks} veces`


        // cada vez que se renderize o se actualize se ejecutara este return
        return () => {
            // Se ejecuta al destruir el componente

            console.log('el componente se va a destruir')
        }
       // Estado de dependencia
       // este UseEffect se va a ejecutar solamente si la variable clicks a cambiado 
    }, [clicks])

    // una vez por segunda se ejecutan los 2 useEffect
    useEffect(() => {
        console.log('useEffect del Interval');
        const intervalId = setInterval(() => {
            setFecha(new Date())
        }, 1000)

        return () => clearInterval(intervalId);
    })

    //* Este effect se ejecutara una sola vez, esto se debe por su estado de dependencia [] vacio
    useEffect(() => {
        console.log('voy a ejecutarme una sola vez')
    }, [])


    return (  
        <>
            <button onClick={() => setClicks( clicks + 1 )}>
                Me has clickeado {clicks} veces</button>

                <div>
                    {fecha.toString()}
                </div>
        </>
    );
}

export default EjemploUseEffect;