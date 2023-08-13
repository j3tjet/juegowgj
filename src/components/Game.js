import { useEffect, useState } from "react";
import fond from "../imagenes/pruebapng.png";
import prueba from "../imagenes/link.jpg"
import poke from "../imagenes/poke.png"

const Game = () => {
    const tamaño = 40;
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [personaje1, setPersonaje1] = useState(new Image());
    const [sprites, setSprites] = useState([])

    

    const mapa = [[true, false, true, true, true],
    [true, false, true, false, true],
    [true, false, true, false, true],
    [true, true, true, false, true],
    [true, false, false, false, true]]


    const llenarimgs = (px, py) => {
        console.log("hola")
        const objSprite = {
            ruta:{poke},
            py: py,
            px: px,

        }
        setSprites(prevSprites => [...prevSprites, objSprite]);
        //sprites.push( <image x={px} y={py} width="32" height="32" xlinkHref={objSprite.ruta}></image>)
        console.log(sprites)
    }
    useEffect(() => {
        console.log("Sprites actualizados:", sprites);
    }, [sprites]);

    const handleKeyDown = (event) => {
        console.log(sprites)
        let posx = x / tamaño;
        let posy = y / tamaño;
        if (event.key === 'ArrowUp' && y > 0) {
            if (mapa[posy - 1][posx]) {
                setY(y - tamaño);
            }

        } else if (event.key === 'ArrowDown' && y < 160) { // cambiar por tamaño de personaje
            if (mapa[posy + 1][posx]) {
                setY(y + tamaño);
            }
        } else if (event.key === 'ArrowLeft' && x > 0) {
            if (mapa[posy][posx - 1]) {
                setX(x - tamaño);
            }
        } else if (event.key === 'ArrowRight' && x < 160) { // cambiar por tamaño de personaje
            if (mapa[posy][posx + 1]) {
                setX(x + tamaño);
            }
        }

    };
    useEffect(() => {
        const personaje = document.getElementById("personajeImg");
        personaje.setAttribute("x", x);
        personaje.setAttribute("y", y);
        console.log("x " + x + "y " + y)

    }, [x, y]);
    let eti
    useEffect(() => {
        let px=0
        let py=0
        mapa.map((columna) => {
            columna.map ((fila)=>{
                if(!fila){
                    llenarimgs(px,py)
                }
                px=px+40
                })
            px=0
            py=py+40
        }
        )
    },[])


    return (
        <div >
            <p>Esto es el juego</p>
            <img src={fond} alt="Fondo" />
            <svg id='tablero' tabIndex={0} onKeyDown={handleKeyDown} width={"200"} height={"200"} xmlns="http://www.w3.org/2000/svg" >
                <image id="personajeImg" x={x} y={y} width="32" height="32" xlinkHref={prueba}></image>
                {sprites.map((imagen, index) => (
        <image key={index} x={imagen.px} y={imagen.py} width="32" height="32" xlinkHref={poke}></image>
    ))}
            </svg>
            
        </div>
    );
};

export default Game;
