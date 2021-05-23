import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstSection from "../components/home/firstSection"
import SecondSection from "../components/home/secondSection"
import CarouselHome from "../components/home/carouselHome"
import { useCountUp } from 'react-countup';
import styled from "styled-components"
import CountCountries from "../components/home/countCountries"
import CountDeployments from "../components/home/countDeployments"
import CountPeople from "../components/home/countPeople"
import SuccessCard from "../components/home/successCard"
import WeizmannCard from "../components/home/weizmannCard"
import ChileCard from "../components/home/successCardChile"
import RedArribaDerecha from "../images/redes2/arriba-derecha.png"
import RedAbajoDerechaDesk from "../images/redes2/abajo-derecha-desk.png"
import RedAbajoIzquierda from "../images/redes2/home-izquierda.png"
import "../css/home.css"
import "../css/typography.css"
import useWindowSize from "../hooks/useWindowSize";

const CounterDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50vw;
    color: #c4132a;
    align-items: center;
    margin-left: 8%;
`


function Home() {

    const { countUp, start, reset } = useCountUp({ end: 17, start: 0, delay: 0, duration: 10 });
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <Layout>

        <SEO title="Home" />
            <FirstSection />
            <SecondSection />

            <div style={{height: '18vw', display: 'flex', justifyContent: 'center'}}>
                <CounterDiv>
                    <CountCountries />
                    <span style={{fontSize:"10vw", marginTop: '-10%'}}>&#183;</span>
                    <CountDeployments />
                    <span style={{fontSize:"10vw", marginTop: '-10%'}}>&#183;</span>
                    <CountPeople />
                </CounterDiv>
            </div>

            <CarouselHome />

            <section className="last-home-section">
                <div>
                    <h2><span style={{color: '#c4132a'}}>Solution </span>verticals</h2>
                </div>
                <div className="success-cards-div">
                    <SuccessCard title="Safe City" paragraph="Emerging challenges threaten citizen’s safety and security, both in the public domain and in the domestic environment." read="Read more"/>
                    <ChileCard title="Corporate & Employees Security" paragraph="While the awareness of the liability for workers grows, their independence increases and remote work is more prevalent." read="Read more"/>
                    <WeizmannCard title="Automated Dispatch" paragraph='When every second counts, quick and efficient first responders’ dispatch can make the difference between life and death.' read="Read more" />
                </div>
                <div>
                    <p className="copyright-p">COPYRIGHT RESERVED TO SAYVU - 2021 ©</p>
                </div>
            </section>
            
                <div>
                    <img src={RedArribaDerecha} alt="red Arriba" 
                    style={{position: 'absolute', width: '27%', top: '10vw', 
                    right: '0', zIndex: '0'}}/>
                </div>
                <div>
                    <img src={RedAbajoDerechaDesk} alt="red abajo derecha" 
                    style={{position: 'absolute', width: '27%', top: '150vw', 
                    right: '0', zIndex: '0'}}/>
                </div>
                <div>
                    <img src={RedAbajoIzquierda} alt="red abajo izq" 
                    style={{position: 'absolute', width: '27%', top: '100vw', 
                    left: '0', zIndex: '0'}}/>
                </div> 

        </Layout>
    ) : (
        <Layout>
        <SEO title="Home" />
            <FirstSection />
            <SecondSection />

            <div style={{height: '25vh', display: 'flex', justifyContent: 'center'}}>
                <CounterDiv>
                    <CountCountries />
                    <span style={{fontSize:"20vw", marginTop: '-30%'}}>&#183;</span>
                    <CountDeployments />
                    <span style={{fontSize:"20vw", marginTop: '-30%'}}>&#183;</span>
                    <CountPeople />
                </CounterDiv>
            </div>

            <CarouselHome />

            <section className="last-home-section-mobile">
                <div>
                    <h2><span style={{color: '#c4132a'}}>Solution </span>verticals</h2>
                </div>
                <div className="success-cards-div-mobile">
                    <SuccessCard title="Safe City" paragraph="Emerging challenges threaten citizen’s safety and security, both in the public domain and in the domestic environment." read="Read more"/>
                    <ChileCard title="Corporate & Employees Security" paragraph="While the awareness of the liability for workers grows, their independence increases and remote work is more prevalent." read="Read more"/>
                    <WeizmannCard WeizmannCard title="Automated Dispatch" paragraph='When every second counts, quick and efficient first responders’ dispatch can make the difference between life and death.' read="Read more"/>
                </div>
                <div>
                    <p className="copyright-p-mobile">COPYRIGHT RESERVED TO SAYVU - 2017 ©</p>
                </div>
            </section>

        
            <div>
                <img src={RedArribaDerecha} alt="red Arriba" style={{position: 'absolute', width: '43%', top: '45%', right: '0', zIndex: '0'}}/>
            </div>
            <div>
                <img src={RedAbajoIzquierda} alt="red abajo izq" style={{position: 'absolute', width: '50%', top: '110%', left: '0', zIndex: '-5'}}/>
            </div> 
    
            
            
        </Layout>
    )
}

export default Home
