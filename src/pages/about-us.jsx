import React from 'react'
import useWindowSize from "../hooks/useWindowSize";
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutFirstSection from "../components/aboutUs/aboutFirstSection"
import AboutSecondSection from "../components/aboutUs/aboutSecondSection"
import RedArribaDerecha from "../images/redes2/arriba-derecha.png"
import RedAbajoDerecha from "../images/redes2/abajo-derecha.png"
import RedAbajoIzquierda from "../images/redes2/home-izquierda.png"

function AboutUs() {

    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <Layout>
        <SEO title="Home" />
            <AboutFirstSection />
            <AboutSecondSection />

            <div>
                <img src={RedAbajoDerecha} alt="red abajo derecha" 
                style={{position: 'absolute', width: '23%', top: '85%', 
                right: '0', zIndex: '0'}}/>
            </div>
            <div>
                <img src={RedAbajoIzquierda} alt="red abajo izq" 
                style={{position: 'absolute', width: '27%', top: '60%', 
                left: '0', zIndex: '0'}}/>
            </div> 

        </Layout>
    ) : (
        <Layout>
        <SEO title="Home" />
            <AboutFirstSection />
            <AboutSecondSection />

            <div>
                <img src={RedArribaDerecha} alt="red Arriba" 
                style={{position: 'absolute', width: '43%', 
                top: '110%', right: '0', zIndex: '0'}}/>
            </div>
            <div>
                <img src={RedAbajoIzquierda} alt="red abajo izq" 
                style={{position: 'absolute', width: '57%', top: '210%', 
                left: '0', zIndex: '0'}}/>
            </div> 

        </Layout>
    )
}

export default AboutUs
