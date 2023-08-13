import './History.css'
import imagenportada from './nombre3.png'
import imagenportada2 from './stars.png'
import abuela from '../imagenes/fotosLibro/abuela.png'
import mundoOscuro from '../imagenes/fotosLibro/mundo.oscuro.png'
import nacimiento from '../imagenes/fotosLibro/nacimiento.png'
import ventana from '../imagenes/fotosLibro/ventana.png'
import viaje from '../imagenes/fotosLibro/viaje.png'

const History=()=>{
    return (
        <div id='otro' className="otroBody">
        <div className="stars"></div>
    <div className="twinkling">
    <div className="contenedor">
    <img className="nombre" src={imagenportada} alt="Nombre del proyecto"/>
    </div>
    <div className="book">
        <input type="radio" name="page" id="page-1" defaultChecked  />
        <label className="page cover" htmlFor="page-3"><div className="content">
            <img className="casita" src={imagenportada2} alt="icono del proyecto"/>
        </div></label>
        <label className="page cover" htmlFor="page-1"></label>
        <input type="radio" name="page" id="page-3" />
        <label className="page" htmlFor="page-5">
            <h2>Capitulo 1.</h2>
            <p>En un mundo sumido en la oscuridad, nació Lucian, un niño con un destello especial en sus ojos. ... </p>
            <img className="mundoOscuro" src={mundoOscuro} alt="icono del proyecto"/>
         
        </label>
        <label className="page" htmlFor="page-3">
            <p> Su nacimiento fue acompañado por la aparición de una luz mágica que llenó la habitación....</p><br/>
            <img className="nacimiento" src={nacimiento} alt="icono del proyecto"/>
        </label>
        <input type="radio" name="page" id="page-5" />
        <label className="page" htmlFor="page-7">
            <p>Los aldeanos vieron esto como una señal de esperanza en medio de la desolación....</p><br/><br/>
            <img className="ventana" src={ventana} alt="icono del proyecto"/>
        </label>
        <label className="page" htmlFor="page-5">
            <p>Lucian creció bajo el cuidado de su abuela, una anciana sabia y bondadosa. ella vio el potencial en sus ojos y le enseñó sobre la magia de cambiar perspectivas, revelando la belleza oculta en el mundo. Le contó historias sobre cómo la esperanza puede ser como una chispa en la oscuridad....</p>
            <img className="abuela" src={abuela} alt="icono del proyecto"/>        
        </label>
        <input type="radio" name="page" id="page-7" />
        <label className="page" htmlFor="page-9">
            <p>Con los años, Lucian decidió emprender un viaje para compartir la magia de la esperanza con aquellos que habían perdido la fe. Viajó por tierras sombrías, cambiando perspectivas y devolviendo la belleza a cada lugar que tocaba.A medida que cambiaba perspectivas, también tocaba los corazones de las personas....</p>
            <img className="viaje" src={viaje} alt="icono del proyecto"/>
        </label>
        <label className="page" htmlFor="page-7">
            <p>Con las ensenanzas de la abuela ayuda a Lucian a que pueda revelar la belleza oculta de cada persona</p>
            <p></p>
        </label>
        <input type="radio" name="page" id="page-9" />
        <label className="page cover1" htmlFor="page-11">
            <button id='jugar' onClick={()=>{const otroBody=document.getElementById("otro")
                                    otroBody.style.display='none'
        }}>JUGAR</button>
        </label>

    </div>
</div>
</div>
    )
}
export default History;