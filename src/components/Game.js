import { useEffect, useState } from "react";
import enemigo from "../imagenes/enemigo/nombre0.png"
import mago from "../imagenes/mago/sprite_magician0.png"
import npc1 from "../imagenes/2npc/sprite_00.png"
import npc1luz from "../imagenes/2npc/sprite_04.png"

import npc2 from "../imagenes/2npc/sprite_08.png"
import npc2luz from "../imagenes/2npc/sprite_12.png"
import npc3 from "../imagenes/pintor/sprite_gabriel_el_pintor0.png"
import npc3luz from "../imagenes/pintor/sprite_gabriel_el_pintor4.png"
import arbol from "../imagenes/magic_house/sprite_01.png"
import montaña from "../imagenes/magic_house/sprite_05.png"
import casa from "../imagenes/magic_house/sprite_06.png"
import casa2 from "../imagenes/magic_house/sprite_07.png"
import agua from "../imagenes/magic_house/sprite_11.png"
import muro from "../imagenes/magic_house/sprite_12.png"
import camino from "../imagenes/magic_house/sprite_08.png"
import './Game.css'
import { Howl } from "howler";
import sound from "../sound/nocturnal.mp3"

const Game = () => {
    const [vida,setvida]=useState(3)
    const tamaño = 40;
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [personaje1, setPersonaje1] = useState(new Image());
    const [sprites, setSprites] = useState([])
    const [npcs, setNpcs] = useState([{ x: 760, y: 0, ruta: npc1 },
    { x: 760, y: 400, ruta: npc3 },
    { x: 40, y:560, ruta: npc2}
    ])
    const [enemigos,setEnemigos]=useState([
    { ruta: enemigo ,camino:[[80,240],[120,240],[160,240],[200,240],[240,240],[280,240],[320,240],[360,240],[400,240],[440,240],[480,240],[520,240],[560,240],[600,240],[640,240],[680,240],[720,240],[760,240]], indice:0},
    { ruta: enemigo ,camino:[[0,320],[40,320],[80,320],[80,360],[80,400],[40,400],[0,400],[0,360]], indice:0},
    { ruta: enemigo ,camino:[[520,0],[520,40],[520,80],[520,120],[520,160],[520,200],[520,160],[520,120],[520,80],[520,40]], indice:0}
])

    const mapa = [[true, true, true, false, false, false, false, false, false, true, true, true, true, true, true, false, false, false, false, false],
    [false, false, true, false, false, false, false, false, false, true, true, true, true, true, true, false, false, false, false, false],
    [false, false, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true],
    [false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, true, true, true, true, true],
    [false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false],
    [false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, false],
    [false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, false, false, false, false, true, true, false, false, false, true, true, true, false, false, false, false, false],
    [true, false, true, false, false, false, false, true, true, false, false, false, true, true, true, false, false, false, false, false],
    [true, true, true, false, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true],
    [false, false, true, false, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true],
    [true, true, true, false, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true],
    [true, true, true, false, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true],
    [true, true, true, false, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true],
    ]

    const mapa2 = [[true, true, true, false, true, true, true, false, true, true, true, false, false, false, true, false, true, true, true, true],
    [false, false, true, false, true, false, true, false, true, false, true, true, true, true, true, false, false, false, true, false],
    [false, true, true, true, true, false, true, false, true, false, true, false, false, false, true, false, true, true, true, true],
    [false, true, false, false, false, false, false, false, true, false, true, false, true, false, true, false, true, false, false, false],
    [false, true, false, true, true, true, false, true, true, false, true, true, true, false, false, false, true, false, true, true],
    [false, true, false, true, false, false, false, false, false, false, true, false, true, false, true, true, true, false, true, false],
    [false, true, false, true, true, true, true, true, true, true, true, false, true, false, true, false, true, false, true, false],
    [false, true, false, false, false, true, false, false, false, false, true, false, true, false, true, false, true, false, true, false],
    [false, true, true, true, true, true, false, true, true, true, true, false, true, false, true, false, true, false, true, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, true, false, true, true],
    [false, true, false, true, false, true, false, true, true, true, true, true, true, true, true, false, true, false, true, true],
    [false, true, true, true, true, true, false, false, false, false, false, true, false, false, true, false, true, false, true, false],
    [false, true, false, false, false, true, false, true, true, true, true, true, true, false, true, false, true, false, true, false],
    [false, true, true, true, false, true, false, true, false, false, false, false, false, false, true, false, true, false, true, false],
    [false, true, false, false, false, true, true, true, false, true, true, true, true, true, true, false, true, true, true, true],
    ]


    const mapaAsets = [[0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2],
    [0, 2, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    const mapaAsets2 = [[0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 3, 3, 0, 3, 0, 0, 0, 0],
    [3, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 3, 3, 3, 0, 3],
    [1, 0, 0, 0, 0, 3, 0, 2, 0, 1, 0, 3, 3, 2, 0, 3, 0, 0, 0, 0],
    [1, 0, 3, 3, 3, 3, 2, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 3],
    [2, 0, 3, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 3, 1, 3, 0, 3, 0, 0],
    [2, 0, 3, 0, 3, 3, 3, 2, 3, 3, 0, 3, 0, 1, 0, 0, 0, 1, 0, 1],
    [3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 0, 3, 0, 3],
    [3, 0, 3, 3, 3, 0, 3, 1, 3, 2, 0, 3, 0, 3, 0, 3, 0, 2, 0, 3],
    [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 3, 0, 2, 0, 3, 0, 3],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 0, 2, 0, 2, 0, 0],
    [2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0],
    [3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 3, 3, 0, 3, 0, 3, 0, 3],
    [2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 3, 0, 3],
    [3, 0, 0, 0, 3, 0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 0, 3],
    [3, 0, 4, 4, 4, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    ]

    const llenarimgs = (px, py, ruta) => {
        console.log("hola")
        const objSprite = {
            ruta: ruta,
            py: py,
            px: px,

        }
        setSprites(prevSprites => [...prevSprites, objSprite]);
        console.log(sprites)
    }

    const interaccion = () => {
        npcs.map((npc) => {
            if (npc.x == x && npc.y == y) {
                if(npc.ruta==npc1){
                npc.ruta = npc1luz
                }
                if(npc.ruta==npc2){
                    npc.ruta = npc2luz
                    }
                    if(npc.ruta==npc3){
                        npc.ruta = npc3luz
                        }
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
            if (mapa2[posy - 1][posx]) {
                setY(y - tamaño);
            }

        } else if (event.key === 'ArrowDown' && y < 560) { // cambiar por tamaño de personaje
            if (mapa2[posy + 1][posx]) {
                setY(y + tamaño);
            }
        } else if (event.key === 'ArrowLeft' && x > 0) {
            if (mapa2[posy][posx - 1]) {
                setX(x - tamaño);
            }
        } else if (event.key === 'ArrowRight' && x < 760) { // cambiar por tamaño de personaje
            if (mapa2[posy][posx + 1]) {
                setX(x + tamaño);
            }
        }

    };
    useEffect(() => {
        const personaje = document.getElementById("personajeImg");
        personaje.setAttribute("x", x);
        personaje.setAttribute("y", y);
        interaccion();

    }, [x, y]);

    useEffect(() => {
        let px = 0
        let py = 0
        mapaAsets2.map((columna) => {
            columna.map((fila) => {
                if (fila == 0) {
                    llenarimgs(px, py, camino)
                }
                if (fila == 1) {
                    llenarimgs(px, py, casa)
                }
                if (fila == 2) {
                    llenarimgs(px, py, casa2)
                }
                if (fila == 3) {
                    llenarimgs(px, py, arbol)
                }
                if (fila == 4) {
                    llenarimgs(px, py, agua)
                }
                if (fila == 5) {
                    llenarimgs(px, py, muro)
                }
                px = px + 40
            })
            px = 0
            py = py + 40
        }
        )
        const audio = new Howl({
            src: [sound],
            volume: 1,
            html5: true,
            autoplay: true
        })

        audio.play()

        
    },[])


    useEffect(()=>{
        enemigos.map((enemigo)=>{
            if(enemigo.indice!=enemigo.camino.length-1){
            enemigo.indice=enemigo.indice+1
        }
        else{
            enemigo.indice=0
        }
        console.log(enemigo.camino[enemigo.indice][0]-40+"  " +x)
        if(x==enemigo.camino[enemigo.indice][0]-40 && y==enemigo.camino[enemigo.indice][1] ){
            setvida(vida-1)
        }
                  
        })
        
        console.log(enemigos[0])
        
    })

    return (
        <div id='game'>
            <p id="vidas">Vidas: {vida}</p>

            <svg id='tablero' tabIndex={0} onKeyDown={handleKeyDown} width={"800"} height={"600"} xmlns="http://www.w3.org/2000/svg" >

                {sprites.map((imagen, index) => (
                    <image key={index} x={imagen.px} y={imagen.py} width="40" height="40" xlinkHref={imagen.ruta}></image>
                ))}
                {npcs.map((image, index) => (
                    <image key={index} x={image.x} y={image.y} width="40" height="40" xlinkHref={image.ruta} Style={"filter: invert(100%);"}></image>
                ))}
                 {enemigos.map((enemigo, index) => {
                const [enemigoX, enemigoY] = enemigo.camino[enemigo.indice];
                return (
                    <image
                        key={index}
                        x={enemigoX }
                        y={enemigoY  }
                        width="40"
                        height="40"
                        xlinkHref={enemigo.ruta}
                    ></image>
                );
            })}
                <image id='personajeImg' x={x} y={y} width="40" height="40" xlinkHref={mago}></image>
            </svg>
        </div>
    );
};

export default Game;
