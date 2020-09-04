import React from 'react'
import './Accueil.css'
// import image from '../../assets/images/im18.jpg'
// import imas from '../../assets/images/img-sma.jpg'
import imam from '../../assets/images/pic.jpg'
import Apropos from './Apropos'
// import imal from '../../assets/images/img-lar.jpg'
function Accueil() {
    return (
        <>
             <img src={imam} alt=""/>
             <section className="text-container">
                <h1>
                    Décorez la maison de vos rêves
                </h1>
                {/* <h2>décoration en plâtre</h2> */}
                <p>Des nouveaux modèles un plafond de conception moderne qui a été réalisé par  les experts platiers de décoration plafond en plâtre</p>
                <button>Contactez nous</button>
             </section>
             <Apropos></Apropos>
        </>
       
    )
}

export default Accueil