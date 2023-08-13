import './History.css'
import imagenportada from './nombre3.png'
import imagenportada2 from './stars.png'
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
            <p>En un mundo sumido en la oscuridad, nació Lurian, un niño con un destello especial en sus ojos. ... </p>
         
        </label>
        <label className="page" htmlFor="page-3">
            <p> Su nacimiento fue acompañado por la aparición de una luz mágica que llenó la habitación....</p>
        </label>
        <input type="radio" name="page" id="page-5" />
        <label className="page" htmlFor="page-7">
            <p>Los aldeanos vieron esto como una señal de esperanza en medio de la desolación....</p>
        </label>
        <label className="page" htmlFor="page-5">
            <p>Lurian creció bajo el cuidado de su abuela, una anciana sabia y bondadosa. ella vio el potencial en sus ojos y le enseñó sobre la magia de cambiar perspectivas, revelando la belleza oculta en el mundo. Le contó historias sobre cómo la esperanza puede ser como una chispa en la oscuridad....</p>
        </label>
        <input type="radio" name="page" id="page-7" />
        <label className="page" htmlFor="page-9">
            <p>Con los años, Lurian decidió emprender un viaje para compartir la magia de la esperanza con aquellos que habían perdido la fe. Viajó por tierras sombrías, cambiando perspectivas y devolviendo la belleza a cada lugar que tocaba.A medida que cambiaba perspectivas, también tocaba los corazones de las personas....</p>
        </label>
        <label className="page" htmlFor="page-7">
            <p>And ultimately, betrayal.</p>
            <p>The end.</p>
        </label>
        <input type="radio" name="page" id="page-9" />
        <label className="page cover1" htmlFor="page-11">
            <button onClick={()=>{const otroBody=document.getElementById("otro")
                                    otroBody.style.display='none'
        }}>play</button>
        </label>

    </div>
</div>
</div>
    )
}
export default History;