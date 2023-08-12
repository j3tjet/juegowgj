import { useEffect, useState } from "react";
import fond from "../imagenes/pruebapng.png";
import prueba from "../imagenes/link.jpg"

const MimiGame1 = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [personaje1, setPersonaje1] = useState(new Image());

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp' && y>0) {
            setY(y - 10);
        } else if (event.key === 'ArrowDown' && y<390) { // cambiar por tamaño de personaje
            setY(y + 10);
        } else if (event.key === 'ArrowLeft' && x>0) {
            setX(x - 10);
        } else if (event.key === 'ArrowRight'&& x<390) { // cambiar por tamaño de personaje
            setX(x + 10);
        }
        
    };
    useEffect(() => {
        const personaje=document.getElementById("personajeImg");
        personaje.setAttribute("x",x);
        personaje.setAttribute("y", y);
        console.log("x "+x+"y " +y)
        
    }, [x, y]);

    
    return (
        <div >
            <p>Esto es el juego</p>
            <img src={fond} alt="Fondo" />
            <svg tabIndex={0} onKeyDown={handleKeyDown} width={"400"} height={"400"} xmlns="http://www.w3.org/2000/svg" >
                <image id="personajeImg" x={x} y={y} width="32" height="32" xlinkHref={prueba}></image>
            </svg>
            <svg tabIndex={0} onKeyDown={handleKeyDown} width={"400"} height={"400"} xmlns="http://www.w3.org/2000/svg" >
                <image id="personajeImg" x={x} y={y} width="32" height="32" xlinkHref={prueba}></image>
            </svg>
        </div>
    );
};

export default MiniGame1;
