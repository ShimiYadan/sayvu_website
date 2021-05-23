import React from 'react'
import DesktopCard from "../components/successStories/successCardDesktop"
import MobileCard from "../components/successStories/successCardMobile"
import useWindowSize from "../hooks/useWindowSize"
import styled from "styled-components"
import Safe from "../images/verticals/safe.png"
import Corporate from "../images/verticals/corporate.png"
import Dispatch from "../images/verticals/automated.png"
import "../css/typography.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RedArribaDerecha from "../images/redes2/arriba-derecha.png"
import RedAbajoDerecha from "../images/redes2/abajo-derecha.png"
import ImageVertical from "../images/redes2/verticals.png"
import ImageVerticalMobile from "../images/redes2/verticals-mobile.png"

const MainSuccessDiv = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
`


function SuccessStories() {
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <Layout>
        <SEO title="Solution Verticals" />
        <MainSuccessDiv>
            <h1 style={{fontFamily: 'G Medium', fontSize: '5vw', color: 'black', marginBottom: '5%', marginTop: '5%'}}>Solution <span style={{color: '#C4132A'}}>Verticals</span></h1>
            <DesktopCard 
            image={Safe} 
            case="Safe City" 
            paragraph="Emerging challenges threaten citizen’s safety and security, both in the public domain and in the domestic environment. While those risks increase, cities and municipalities are required to adopt intelligent technology to safeguard their people and property. SayVU offers cities a comprehensive and innovative solution that grants them control over the area of coverage as well as an efficient and timely response to incidents. Citizens gain the ability to connect with the authorities whenever they feel threatened, to re-establish trust."
            link='/safe-city'
            />
            <DesktopCard 
            image={Corporate}
            case="Corporate & Employees Security"
            paragraph="While the awareness of the liability for workers grows, their independence increases and remote work is more prevalent, organizations are encouraged to provide better solutions for their workers’ safety and personal security. With SayVU, employees can report directly from their smartphones while knowing that help is on its way. Features like scheduled alerts and automated alerts that are activated if the mobile’s sensors identify a problem, guarantee the safety of each employee, anytime, anywhere."
            link='/corporate-security'
            />
            <DesktopCard 
            image={Dispatch}
            case="Automated Dispatch"
            paragraph="When every second counts, quick and efficient first responders’ dispatch can make the difference between life and death. With SayVU’s technology, the important information reaches the first responders in the field when they are minutes away from the incident thus reducing response time significantly. Also, our indoor positioning enables an immense advantage while responding to events in corporate offices."
            link='/automated-dispatch'
            />
        </MainSuccessDiv>
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
        <SEO title="Solution Verticals" />
        <MainSuccessDiv>
            <h1 style={{fontFamily: 'G Medium', fontSize: '10vw', color: 'black', marginBottom: '13%', marginTop: '10%'}}>Solution <span style={{color: '#C4132A'}}>Verticals</span></h1>
            <MobileCard 
            image={Safe} 
            case="Safe City"
            paragraph="Emerging challenges threaten citizen’s safety and security, both in the public domain and in the domestic environment. While those risks increase, cities and municipalities are required to adopt intelligent technology to safeguard their people and property. SayVU offers cities a comprehensive and innovative solution that grants them control over the area of coverage as well as an efficient and timely response to incidents. Citizens gain the ability to connect with the authorities whenever they feel threatened, to re-establish trust."
            link='/safe-city'
            />
            <MobileCard
            image={Corporate}
            case="Corporate & Employees Security"
            paragraph="While the awareness of the liability for workers grows, their independence increases and remote work is more prevalent, organizations are encouraged to provide better solutions for their workers’ safety and personal security. With SayVU, employees can report directly from their smartphones while knowing that help is on its way. Features like scheduled alerts and automated alerts that are activated if the mobile’s sensors identify a problem, guarantee the safety of each employee, anytime, anywhere."
            link='/corporate-security'
            />
            <MobileCard
            image={Dispatch}
            case="Automated Dispatch"
            paragraph="When every second counts, quick and efficient first responders’ dispatch can make the difference between life and death. With SayVU’s technology, the important information reaches the first responders in the field when they are minutes away from the incident thus reducing response time significantly. Also, our indoor positioning enables an immense advantage while responding to events in corporate offices."
            link='/automated-dispatch'
            />
        </MainSuccessDiv>
            <div>
                <img src={ImageVertical} alt="red abajo derecha" 
                style={{position: 'absolute', width: '100%', top: '30%', 
                left: '-45%', zIndex: '0'}}/>
            </div>
            <div>
                <img src={ImageVerticalMobile} alt="red abajo derecha" 
                style={{position: 'absolute', width: '40%', top: '130%', 
                right: '0', zIndex: '-1'}}/>
            </div>
            <div>
                <img src={ImageVertical} alt="red abajo derecha" 
                style={{position: 'absolute', width: '100%', top: '220%', 
                left: '-45%', zIndex: '0'}}/>
            </div>
        </Layout>
    )
}

export default SuccessStories
