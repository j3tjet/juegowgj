import { useEffect, useState } from "react";
import fond from "../imagenes/pruebapng.png";
import prueba from "../imagenes/link.jpg"
import poke from "../imagenes/poke.png"
import npc from "../imagenes/npc.jpeg"
import casa from "../imagenes/magic_house/sprite_00.png"
import arbol from "../imagenes/magic_house/sprite_01.png"
import arbol2 from "../imagenes/magic_house/sprite_02.png"
import arbol3 from "../imagenes/magic_house/sprite_03.png"
import arbol4 from "../imagenes/magic_house/sprite_04.png"
import montaña from "../imagenes/magic_house/sprite_05.png"
import casa2 from "../imagenes/magic_house/sprite_06.png"
import camino from "../imagenes/magic_house/sprite_08.png"
import './Game.css'

const Game = () => {
    const tamaño = 40;
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [personaje1, setPersonaje1] = useState(new Image());
    const [sprites, setSprites] = useState([])
    const [npcs,setNpcs]=useState([{x:160,y:80,ruta:npc},
                                    {x:160,y:160,ruta:npc}
                                     ])
    

    const mapa = [[true,true,true,],
                [true, false, true, false, true],
                [true, false, true, false, true],
                [true, true, true, false, true],
                [true, false, false, false, true]]

    const mapaAsets=[[0, 1, 0, 0, 0],
    [0, 1, 0, 2, 0],
    [0, 1, 0, 2, 0],
    [0, 0, 0, 2, 0],
    [0, 2, 2, 2, 0]]

    const llenarimgs = (px, py,ruta) => {
        console.log("hola")
        const objSprite = {
            ruta:ruta,
            py: py,
            px: px,

        }
        setSprites(prevSprites => [...prevSprites, objSprite]);
        console.log(sprites)
    }

    const interaccion=()=>{
        npcs.map((npc)=>{
            if(npc.x==x && npc.y==y){
                npc.ruta=brillo
            }
        })
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
        interaccion();
        console.log("x " + x + "y " + y)
        console.log(npcs)

    }, [x, y]);

    useEffect(() => {
        let px=0
        let py=0
        mapaAsets.map((columna) => {
            columna.map ((fila)=>{
                if(fila==0){
                    llenarimgs(px,py,camino)
                }
                if(fila==1){
                    llenarimgs(px,py,casa)
                }
                if(fila==2){
                    llenarimgs(px,py,arbol)
                }
                px=px+40
                })
            px=0
            py=py+40
        }
        )
    },[])



    return (
        <div id='game'>
           
            <svg id='tablero' tabIndex={0} onKeyDown={handleKeyDown} width={"200"} height={"200"} xmlns="http://www.w3.org/2000/svg" >
                
                {sprites.map((imagen, index) => (
                     <image key={index} x={imagen.px} y={imagen.py} width="32" height="32" xlinkHref={imagen.ruta}></image>  
                ))}
                {npcs.map((image,index)=>(
                    <image key={index} x={image.x} y={image.y} width="32" height="32" xlinkHref={image.ruta} Style={"filter: invert(100%);"}></image> 
                ))}
                <image id='personajeImg' x={x} y={y} width="32" height="32" xlinkHref={prueba}></image>
            </svg>
        </div>
    );
};

export default Game;
