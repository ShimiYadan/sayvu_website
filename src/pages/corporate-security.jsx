import React from 'react'
import "../css/typography.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useWindowSize from "../hooks/useWindowSize"
import General from "../components/safeCity/generalTitle"
import MainFeatures from "../components/safeCity/mainFeatures"
import Success from "../components/safeCity/successStories"
import Management from "../images/verticalsCircles/management.png"
import Indoor from "../images/verticalsCircles/indoor.png"
import Wearable from "../images/verticalsCircles/wearable.png"
import Locked from "../images/verticalsCircles/locked.png"
import Sensors from "../images/verticalsCircles/sensors.png"
import Arti from "../images/verticalsCircles/ai.png"
import Alerts from "../images/verticalsCircles/alerts.png"
import Ministry from "../images/verticalsMobile/ministry.png"
import Sixt from "../images/verticalsMobile/sixt.png"
import Weizmann from "../images/verticalsMobile/weizmann.png"
import Sparta from "../images/verticalsMobile/sparta.png"
import RedArribaDerecha from "../images/redes2/arriba-derecha.png"
import AbajoIzq from "../images/redes2/abajo-izq1.png"
import AbajoDer from "../images/redes2/abajo-derecha.png"
import Apply from "../components/safeCity/apply"
import RedAbajoDerecha from "../images/redes2/abajo-derecha.png"


function Corporate() {
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <Layout>
        <SEO title="Safe City" />
        <General 
        title='Corporate & Employees Security'
        paragraph="While the awareness of the liability for workers grows, their independence increases and remote work is more prevalent, organizations are encouraged to provide better solutions for their workers’ safety and personal security. With SayVU, employees can report directly from their smartphones while knowing that help is on its way. Features like scheduled alerts and automated alerts that are activated if the mobile’s sensors identify a problem, guarantee the safety of each employee, anytime, anywhere."
        /> 
        <MainFeatures 
        image1={Locked}
        image2={Wearable}
        image3={Management}
        image4={Arti}
        image5={Indoor}
        image6={Sensors}
        image7={Alerts}
        />
        <Success 
        client1="Ministry of Labor, Social Affairs and Social Services (Israel)"
        client2="Weizmann Institute of Science (Israel)"
        client3="Sparta Security (Israel)"
        client4="Sixt (Germany)"
        success1={Ministry}
        success2={Weizmann}
        success3={Sparta}
        success4={Sixt}
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
        title='Corporate & Employees Security'
        paragraph="While the awareness of the liability for workers grows, their independence increases and remote work is more prevalent, organizations are encouraged to provide better solutions for their workers’ safety and personal security. With SayVU, employees can report directly from their smartphones while knowing that help is on its way. Features like scheduled alerts and automated alerts that are activated if the mobile’s sensors identify a problem, guarantee the safety of each employee, anytime, anywhere."
        /> 
        <MainFeatures 
        image1={Locked}
        image2={Wearable}
        image3={Management}
        image4={Arti}
        image5={Indoor}
        image6={Sensors}
        image7={Alerts}
        />
        <Success 
        client1="Ministry of Labor, Social Affairs and Social Services (Israel)"
        client2="Weizmann Institute of Science (Israel)"
        client3="Sparta Security (Israel)"
        client4="Sixt (Germany)"
        success1={Ministry}
        success2={Weizmann}
        success3={Sparta} 
        success4={Sixt}
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

export default Corporate
