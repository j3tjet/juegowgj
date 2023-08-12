import React, { useState ,useEffect} from 'react';
import { Stage, Layer, Image } from 'react-konva';

function CanvasWithImage() {
  const [image, setImage] = useState(new window.Image());
  
  // Manejador de carga de la imagen
  const handleImageLoad = () => {
    // La imagen se ha cargado, ahora podemos dibujarla en el canvas
  };

  useEffect(() => {
    image.src = 'http://localhost:3000/personaje.png'; // Asegúrate de proporcionar la ruta correcta
    image.onload = handleImageLoad;
  }, []);

  return (
    <Stage width={400} height={300}>
      <Layer>
        <Image image={image} x={20} y={20} width={150} height={100} draggable />
      </Layer>
    </Stage>
  );
}

export default CanvasWithImage;
