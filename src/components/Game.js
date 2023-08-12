import { useEffect, useState } from "react";
import fond from "../imagenes/pruebapng.png"


const Game=()=>{
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const [personaje1,setPersonaje1]=useState()
    let contextoFondo;
    //const [contextoFondo,setContextoFondo]=useState();
    
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowUp') {
          setY(y - 10);
        } else if (event.key === 'ArrowDown') {
          setY(y + 10);
        } else if (event.key === 'ArrowLeft') {
          setX(x - 10);
        } else if (event.key === 'ArrowRight') {
          setX(x + 10);
        }
      };

    useEffect(()=>{
        const canvas=document.getElementById("fondo");
        contextoFondo=canvas.getContext("2d");
        contextoFondo.clearRect(0, 0, canvas.width, canvas.height);

        const image1 = new Image();
        image1.src = "../imagenes/pruebapng.png";
        setPersonaje1(image1)

        contextoFondo.drawImage(image1,0,0,32,32)
        console.log(image1)
    },[])
    
    useEffect(()=>{
        const canvas=document.getElementById("fondo");
        contextoFondo=canvas.getContext("2d");
       // contextoFondo.clearRect(0,0,400,400)

        const image1 = new Image();
        image1.src = "../imagenes/pruebapng.png";
        setPersonaje1(image1)
        contextoFondo.drawImage(image1,0,0,32,32)

    },[x,y])

    return (
        <div>
            <p>esto es el game</p>
            <img src={fond} />
            <canvas id="fondo" width={400} height={400} Style="border:1px solid #000000;" onKeyDown={handleKeyDown}></canvas>
            
        </div>
    )
}
export default Game;