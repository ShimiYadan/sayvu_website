import React from 'react'
import "../css/typography.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useWindowSize from "../hooks/useWindowSize"
import General from "../components/safeCity/generalTitle"
import MainFeatures from "../components/lastVertical/lastVerticalMain"
import Success from "../components/lastVertical/lastSuccess"
import Management from "../images/verticalsCircles/management.png"
import Architecture from "../images/verticalsCircles/architecture.png"
import Indoor from "../images/verticalsCircles/indoor.png"
import Sensors from "../images/verticalsCircles/sensors.png"
import Alerts from "../images/verticalsCircles/alerts.png"
import Dispatching from "../images/verticalsCircles/dispatching.png"
import Fire from "../images/verticalsLogos/fire.png"
import Rio from "../images/verticalsLogos/rio.png"
import Apply from "../components/safeCity/apply"
import RedArribaDerecha from "../images/redes2/arriba-derecha.png"
import AbajoIzq from "../images/redes2/abajo-izq1.png"
import AbajoDer from "../images/redes2/abajo-derecha.png"
import RedAbajoDerecha from "../images/redes2/abajo-derecha.png"

function Automated() {

    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <Layout>
        <SEO title="Safe City" />
        <General 
        title='Automated Dispatch'
        paragraph='When every second counts, quick and efficient first responders’ dispatch can make the difference between life and death. With SayVU’s technology, the important information reaches the first responders in the field when they are minutes away from the incident thus reducing response time significantly. Also, our indoor positioning enables an immense advantage while responding to events in corporate offices.'
        /> 
        <MainFeatures 
        image1={Management}
        image2={Dispatching}
        image3={Architecture}
        image4={Indoor}
        image5={Sensors}
        image6={Alerts}
        />
        <Success 
        client1="Olympic Games Rio 2016 (Brasil)"
        client2="Israel Fire and Rescue Services (Israel)"
        success1={Rio}
        success2={Fire}
        />       
        <Apply />
            <div>
                <img src={RedArribaDerecha} alt="red Arriba" 
                style={{position: 'absolute', width: '18%', top: '20%', 
                left: '0', zIndex: '0', transform: 'scaleX(-1)'}}/>
            </div>
            <div>
                <img src={RedAbajoDerecha} alt="red abajo derecha" 
                style={{position: 'absolute', width: '19%', top: '30%', 
                right: '0', zIndex: '0'}}/>
            </div>
        </Layout>
    ) : (
        <Layout>
        <SEO title="Safe City" />
        <General 
        title='Automated Dispatch'
        paragraph='When every second counts, quick and efficient first responders’ dispatch can make the difference between life and death. With SayVU’s technology, the important information reaches the first responders in the field when they are minutes away from the incident thus reducing response time significantly. Also, our indoor positioning enables an immense advantage while responding to events in corporate offices.'
        /> 
        <MainFeatures 
        image1={Management}
        image2={Dispatching}
        image3={Architecture}
        image4={Indoor}
        image5={Sensors}
        image6={Alerts}
        />
        <Success 
        client1="Olympic Games Rio 2016 (Brasil)"
        client2="Israel Fire and Rescue Services (Israel)"
        success1={Rio}
        success2={Fire}
        />       
        <Apply />
        <img src={RedArribaDerecha} alt="red"
        style={{width: '40vw', position: 'absolute', top: '40vw', left: '60vw'}}
        />    
        <img src={AbajoIzq} alt="red"
        style={{width: '40vw', position: 'absolute', top: '85%', left: '-13vw'}}
        />   
        <img src={AbajoDer} alt="red"
        style={{width: '40vw', position: 'absolute', top: '180%', left: '60vw'}}
        />     
        </Layout> 
    )
}

export default Automated
