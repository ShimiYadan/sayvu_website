import React from 'react'
import useWindowSize from "../hooks/useWindowSize"
import "../css/typography.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import General from "../components/safeCity/generalTitle"
import MainFeatures from "../components/safeCity/mainFeatures"
import Success from "../components/safeCity/successStories"
import Management from "../images/verticalsCircles/management.png"
import Architecture from "../images/verticalsCircles/architecture.png"
import Indoor from "../images/verticalsCircles/indoor.png"
import Video from "../images/verticalsCircles/video.png"
import Wearable from "../images/verticalsCircles/wearable.png"
import Locked from "../images/verticalsCircles/locked.png"
import Sensors from "../images/verticalsCircles/sensors.png"
import Casablanca from "../images/verticalsLogos/casablanca.png"
import Curico from "../images/verticalsLogos/curico.png"
import Kfar from "../images/verticalsLogos/kfar.png"
import Ofakim from "../images/verticalsLogos/ofakim.png"
import RedArribaDerecha from "../images/redes2/arriba-derecha.png"
import AbajoIzq from "../images/redes2/abajo-izq1.png"
import AbajoDer from "../images/redes2/abajo-derecha.png"
import Apply from "../components/safeCity/apply"
import RedAbajoDerecha from "../images/redes2/abajo-derecha.png"

function SafeCity() {
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <Layout>
        <SEO title="Safe City" />
        <General 
        title='Safe City'
        paragraph='Emerging challenges threaten citizen’s safety and security, both in the public domain and in the domestic environment. While those risks increase, cities and municipalities are required to adopt intelligent technology to safeguard their people and property. SayVU offers cities a comprehensive and innovative solution that grants them control over the area of coverage as well as an efficient and timely response to incidents. Citizens gain the ability to connect with the authorities whenever they feel threatened, to re-establish trust.'
        /> 
        <MainFeatures 
        image1={Management}
        image2={Architecture}
        image3={Indoor}
        image4={Video}
        image5={Wearable}
        image6={Locked}
        image7={Sensors}
        />
        <Success 
        client1="Curico Municipality (Chile)"
        client2="Kfar Saba City (Israel)"
        client3="Casablanca City (Chile)"
        client4="Ofakim City (Israel)"
        success1={Curico}
        success2={Kfar}
        success3={Casablanca}
        success4={Ofakim}
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
        title='Safe City'
        paragraph='Emerging challenges threaten citizen’s safety and security, both in the public domain and in the domestic environment. While those risks increase, cities and municipalities are required to adopt intelligent technology to safeguard their people and property. SayVU offers cities a comprehensive and innovative solution that grants them control over the area of coverage as well as an efficient and timely response to incidents. Citizens gain the ability to connect with the authorities whenever they feel threatened, to re-establish trust.'
        /> 
        <MainFeatures 
        image1={Management}
        image2={Architecture}
        image3={Indoor}
        image4={Video}
        image5={Wearable}
        image6={Locked}
        image7={Sensors}
        />
        <Success 
        client1="Curico Municipality (Chile)"
        client2="Kfar Saba City (Israel)"
        client3="Casablanca City (Chile)"
        client4="Ofakim City (Israel)"
        success1={Curico}
        success2={Kfar}
        success3={Casablanca}
        success4={Ofakim}
        />
        <img src={RedArribaDerecha} alt="red"
        style={{width: '40vw', position: 'absolute', top: '40vw', left: '60vw'}}
        />    
        <img src={AbajoIzq} alt="red"
        style={{width: '40vw', position: 'absolute', top: '85%', left: '-13vw'}}
        />   
        <img src={AbajoDer} alt="red"
        style={{width: '40vw', position: 'absolute', top: '180%', left: '60vw'}}
        />    
        <Apply />
        </Layout>
    )
}

export default SafeCity
