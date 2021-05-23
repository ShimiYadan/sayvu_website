import React from 'react'
import Calendar from "../components/contact/calendar"
import useWindowSize from "../hooks/useWindowSize"
import ContactForm from "../components/contact/formContact"
import "../css/typography.css"
import Layout from "../components/layout"
import RedAbajoDerecha from "../images/redes2/abajo-derecha-desk.png"
import RedAbajoIzquierda from "../images/redes2/contact-izq.png"
import ContactImage from "../images/redes2/contact.png"
import Contact2Image from "../images/redes2/contact2.png"



function Contact() {
    const windowSize = useWindowSize();

return (windowSize > 480) ?  (
        <Layout>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{fontFamily: 'G Medium', color: '#C4132A', marginTop: '5vw', fontSize: '5vw'}}>Contact Us</h1>
            <p style={{fontFamily: 'G Book', width: '43vw', textAlign: 'center', fontSize: '1.7vw'}}>If you would like more information about our work, <span style={{fontFamily: 'G Bold'}}>please contact us here</span></p>
        <ContactForm />
            <h1 style={{fontFamily: 'G Medium', color: '#C4132A', marginTop: '5vw', fontSize: '5vw', marginBottom: '2vw'}}>Schedule a Demo</h1>
        <Calendar />
        </div>

            <div>
                <img src={RedAbajoDerecha} alt="red abajo derecha" 
                style={{position: 'absolute', width: '20vw', top: '100vw', 
                right: '0', zIndex: '0'}}/>
            </div>
            <div>
                <img src={RedAbajoIzquierda} alt="red abajo izq" 
                style={{position: 'absolute', width: '23vw', top: '93vw', 
                left: '0', zIndex: '0'}}/>
            </div> 
        </Layout>
    ) : (
        <Layout>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{fontFamily: 'G Medium', color: '#C4132A', marginTop: '5vw', fontSize: '10vw'}}>Contact Us</h1>
            <p style={{fontFamily: 'G Book', width: '60vw', textAlign: 'center', fontSize: '4vw'}}>If you would like more information about our work, <span style={{fontFamily: 'G Bold'}}>please contact us here</span></p>
        <ContactForm />
            <h1 style={{fontFamily: 'G Medium', color: '#C4132A', marginTop: '5vw', fontSize: '10vw', marginBottom: '5vw'}}>Schedule a Demo</h1>
        <Calendar />
        </div>
        <div>
            <img src={ContactImage} alt="red abajo izq" 
            style={{position: 'absolute', width: '40%', top: '85%', 
            right: '0', zIndex: '-1'}}/>
        </div> 
        <div>
            <img src={Contact2Image} alt="red abajo izq" 
            style={{position: 'absolute', width: '40%', top: '30%', 
            left: '0', zIndex: '-1'}}/>
        </div> 
        </Layout>
    )
}

export default Contact
