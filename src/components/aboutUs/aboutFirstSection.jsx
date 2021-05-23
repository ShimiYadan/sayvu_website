import React from 'react'
import useWindowSize from "../../hooks/useWindowSize"
import styled from "styled-components"
import "./aboutFirstSection.css"
import "../../css/typography.css"
import {Link} from "gatsby"

const AboutButtonMobile = styled.button `
    background-color: black;
    color: white;
    border-radius: 20px;
    font-family: "G Light";
    font-size: 4.5vw;
    padding: 1%;
    width: 45vw;
    border: none;
`

const AboutButton = styled.button `
    background-color: black;
    color: white;
    border-radius: 30px;
    font-family: "G Light";
    font-size: 1.7vw;
    padding: 3%;
    width: 16vw;
    border: none;
    margin-top: 5%;

    @media only screen and (max-width: 1024px) {
    border-radius: 30px;
    font-family: "G Light";
    font-size: 2.5vw;
    padding: 3%;
    width: 25vw;
    border: none;
    margin-top: 5%;
    }
`


function AboutFirstSection() {

    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <section className="about-section-one">
            <div className="ab-section-one-div">
                <h1>About</h1>
                <h1 style={{color: 'white'}}>Us</h1>
                <Link to='/contact'><AboutButton>Schedule a demo</AboutButton></Link>
            </div>
            <div className="ab-section-one-second-div">
                <h4>A matter of life and death</h4>
                <p>When every second counts, the emergency response time can be a matter of life or death. With the development of our cutting-edge technology, saving lives and contributing to the personal and public safety needs to become everyone's top priority.</p>
                <h4>What's going on, while is going on</h4>
                <p>SayVU strives to minimize the response time of emergency services and other authorities, and make sure the user gets relevant and effective assistance as quickly as possible. Our world-leading platform tells the story of what's going on--while it's going on--allowing for faster, more efficient responses to a situation, ultimately saving more lives. We are here to make sure everyone has the power to save lives.</p>
            </div>
        </section>
    ) : (
        <section className="about-section-one-mobile">
            <div className="ab-section-one-div-mobile">
                <h1>About <span style={{color: 'white'}}>Us</span></h1>
                <Link to='/contact'><AboutButtonMobile>Schedule a demo</AboutButtonMobile></Link>
            </div>
            <div className="ab-section-one-second-div-mobile">
                <p>A matter of life and death</p>
                <p>When every second counts, the emergency response time can be a matter of life or death. With the development of our cutting-edge technology, saving lives and contributing to the personal and public safety needs to become everyone's top priority.</p>
            </div>
        </section>
    )
}

export default AboutFirstSection

