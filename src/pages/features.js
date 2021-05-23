import React from 'react'
import Desktop from "../components/features/desktop"
import Mobile from "../components/features/mobile"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useWindowSize from "../hooks/useWindowSize"
import RedArribaDerecha from "../images/redes2/arriba-derecha.png"
import RedAbajoDerecha from "../images/redes2/abajo-derecha.png"
import RedAbajoIzquierda from "../images/redes2/home-izquierda.png"

function Features() {
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <Layout>
        <SEO title="Features" />
            <Desktop />

            <div>
                <img src={RedArribaDerecha} alt="red Arriba" 
                style={{position: 'absolute', width: '18%', top: '90vw', 
                right: '0', zIndex: '0'}}/>
            </div>
            <div>
                <img src={RedAbajoDerecha} alt="red abajo derecha" 
                style={{position: 'absolute', width: '19%', top: '120vw', 
                left: '0', zIndex: '0', transform: 'scaleX(-1)'}}/>
            </div>
            <div>
                <img src={RedAbajoIzquierda} alt="red abajo izq" 
                style={{position: 'absolute', width: '19%', top: '20vw', 
                left: '0', zIndex: '0'}}/>
            </div> 
        </Layout>
    ) : (
        <Layout>
        <SEO title="Features" />
            <Mobile />
            <div>
                <img src={RedArribaDerecha} alt="red Arriba" 
                style={{position: 'absolute', width: '40%', top: '15%', 
                right: '0', zIndex: '0'}}/>
            </div>
            <div>
                <img src={RedAbajoIzquierda} alt="red abajo izq" 
                style={{position: 'absolute', width: '40%', top: '100%', 
                left: '0', zIndex: '0'}}/>
            </div> 
            <div>
                <img src={RedArribaDerecha} alt="red Arriba" 
                style={{position: 'absolute', width: '40%', top: '220%', 
                right: '0', zIndex: '0'}}/>
            </div>
            <div>
                <img src={RedAbajoIzquierda} alt="red abajo izq" 
                style={{position: 'absolute', width: '40%', top: '330%', 
                left: '0', zIndex: '0'}}/>
            </div> 
        </Layout>
    )
}

export default Features
