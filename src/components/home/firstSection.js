import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import TypewriterDesktop from "./typewriter"
import TypewriterMobile from "./typewriterMobile"
import "./firstSection.css"
import useWindowSize from "../../hooks/useWindowSize";


const DemoButton = styled.button `
    background-color: black;
    color: white;
    border-radius: 20px;
    font-family: "G Light";
    font-size: 2vw;
    padding: 1%;
    width: 20vw;
    border: none;
`

const DemoButtonMobile = styled.button `
    background-color: black;
    color: white;
    border-radius: 20px;
    font-family: "G Light";
    font-size: 4vw;
    padding: 1%;
    width: 40vw;
    border: none;
`

const FirstSection = () =>  {

    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <section className="first-section-home">
            <div className="section1-div1">
                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '17%'}}>
                    <TypewriterDesktop />
                    <p style={{fontFamily: "G Book", fontSize: "3vw"}}>Mobile app for <span style={{fontFamily: "G Medium"}}>distress situations</span></p>
                    <DemoButton>Schedule a demo</DemoButton>
                </div>
            </div>
            <div style={{width: '50vw'}}>
                <div className="iPhone-div">
                    <StaticImage src="../../images/iPhone-landing.png" alt="iPhone" />
                </div>
            </div>
        </section>
    ) : 
    (
        <section className="first-section-home-mobile">
            <div className="section1-div1-mobile">
                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '17%'}}>
                    <TypewriterMobile />
                    <p style={{fontFamily: "G Book", fontSize: "4.5vw", marginTop: '15vw'}}>Mobile app for <span style={{fontFamily: "G Medium"}}>distress situations</span></p>
                    <DemoButtonMobile>Schedule a demo</DemoButtonMobile>
                </div>
            </div>
            <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
                <div className="iPhone-div-mobile">
                    <StaticImage src="../../images/iPhone-landing.png" alt="iPhone" />
                </div>
            </div>
        </section>
    )
}

export default FirstSection
