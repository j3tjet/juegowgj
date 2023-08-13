import { useEffect, useState } from "react";
import fond from "../imagenes/pruebapng.png";
import prueba from "../imagenes/link.jpg"

const Game = () => {
    const tamaño=40;
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [personaje1, setPersonaje1] = useState(new Image());

    const mapa=[[true,false,true,true,true],
                [true,false,true,false,true],
                [true,false,true,false,true],
                [true,true,true,false,true],
                [true,false,false,false,true]]

    const verificarChoque=()=>{
    
    }

    const handleKeyDown = (event) => {
        let posx=x/tamaño;
        let posy=y/tamaño;
        if (event.key === 'ArrowUp' && y>0  ) {
            if(mapa[posy-1][posx]){
                setY(y - tamaño);
            }
            
        } else if (event.key === 'ArrowDown' && y<160) { // cambiar por tamaño de personaje
            if(mapa[posy+1][posx]){
                setY(y + tamaño);
            }
        } else if (event.key === 'ArrowLeft' && x>0) {
            if(mapa[posy][posx-1]){
                setX(x - tamaño);
            }
        } else if (event.key === 'ArrowRight'&& x<160) { // cambiar por tamaño de personaje
            if(mapa[posy][posx+1]){
                setX(x + tamaño);
            }
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
            <svg tabIndex={0} onKeyDown={handleKeyDown} width={"200"} height={"200"} xmlns="http://www.w3.org/2000/svg" >
                <image id="personajeImg" x={x} y={y} width="32" height="32" xlinkHref={prueba}></image>
                
            </svg>
        </div>
    );
};

export default Game;
