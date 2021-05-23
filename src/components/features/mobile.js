import React from 'react'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../css/typography.css"
import {Link} from "gatsby"

const CenterDiv = styled.div `
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-top: 7vw;

    div {
        width: 32vw;
    }

    h3 {
        font-family: "G Medium";
        color: #C4132A;
        font-size: 4.1vw;
        margin-top: 3%;
        margin-bottom: -.05vw;
        text-align: center;
    }

    p {
        font-family: "G Book"; 
        font-size: 4.1vw;
        padding: 1% 10% 0 10%;
    }
`

const FeaturesMobileBullets = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15%;

    div:nth-child(1), div:nth-child(3) {
        border-bottom: 3px solid #c4132a;
        width: 80vw;
    } 

    ul {
        width: 90vw;
        margin-left: 2%;
        padding-top: 10%;
        padding-bottom: 3%;
    }

    ul li {
        font-family: 'G Book';
        font-size: 4.1vw;
        width: 70vw;
        margin-bottom: 2.5%;
        line-height: 120%;
    }

    ul li::marker {
        color: #c4132a;
        font-size: 6vw;
    }
`

const ButtonDivMobile = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    padding-bottom: 18%;
    padding-top: 13%;


    h1 {
        font-family: "G Medium";
        font-size: 7vw;
        text-align: center;
        width: 80vw;
    }

    button {
        background-color: #c4132a;
        color: white;
        font-family: "G Light";
        font-size: 4vw;
        border: none;
        border-radius: 25px;
        padding: 1vw .4vw 1vw .4vw;
        width: 40vw;
        margin-top: 4%;
    }
`

function Mobile() {
    return (
        <>
        <CenterDiv>
            <div>
                <StaticImage src="../../images/features/locked-phone.png" alt="locked-phone"/>
            </div>
            <h3>Reporting from Locked Mobile Phone:</h3>
            <p>In times of distress, the user does not have the time and the ability to report from an application, so we accessed the report even when the mobile phone is locked, even on iOS. Users can schedule reporting by gesture or dedicated widget.</p>
        </CenterDiv>

        <CenterDiv>
            <div>
                <StaticImage src="../../images/features/computing.png" alt="computing"/>
            </div>
            <h3>Wearable Computing - IOT:</h3>
            <p>We designed the system so that you, our customers, can connect wearable devices of your choice.</p>
        </CenterDiv>

        <CenterDiv>
            <div>
                <StaticImage src="../../images/features/computing.png" alt="computing"/>
            </div>
            <h3 style={{width: '70vw'}}>Smart Command & Control (C&C)  for Managing Alerts:</h3>
            <p>The Command & Control manages alerts in their context, including managing users, places, groups, and relationships between themselves.</p>
            <p>The Command & Control enables full control of the event through smart queue management and quick and intuitive resource allocation. We have added many geographic information management capabilities to a map, using polygons, geophances, tags, and points of interest. Mass messages are given by identifying users and their role, their physical location in real time, and the properties to which they are associated.</p>
        </CenterDiv>

        <CenterDiv>
            <div>
                <StaticImage src="../../images/features/architecture.png" alt="architecture"/>
            </div>
            <h3>Flexible System Architecture:</h3>
            <p>We offer a modular system that gives you the choice either to use in whole or in part: mobile applications for users and first responders, Command & Control software for managing alerts, users, properties and groups. As well as connecting to existing Command & Control systems via API/SDK. - Command & Control and communication with the customer/user (CRM)</p>
        </CenterDiv>

        <CenterDiv>
            <div>
                <StaticImage src="../../images/features/alert.png" alt="alerts"/>
            </div>
            <h3>Autonomous Alerts:</h3>
            <p>Scheduling alerts according to predetermined rules such as entering dangerous areas or sending alerts from the device, given abnormal activity measured by the sensors on the device to tell what happened, for the user who cannot tell, for example: Fall, shock, and prowling of the smart phone in a certain way.</p>
        </CenterDiv>

        <CenterDiv>
            <div>
                <StaticImage src="../../images/features/intel.png" alt="intelligence"/>
            </div>
            <h3>Real-Time Artificial Intelligence:</h3>
            <p>In order for the information to be understood in its context, we believe that the processed information must be analyzed for the decision-maker in order to allocate resources efficiently. Try our "speech-to-event", speech analysis to determine the type of event.</p>
        </CenterDiv>

        <CenterDiv>
            <div>
                <StaticImage src="../../images/features/position.png" alt="positioning"/>
            </div>
            <h3>Indoor Positioning:</h3>
            <p>Our algorithm enables mapping of structures and when needed, placing the user, even in the internal space "indoor". In 2018, we will display indoor positioning capabilities OFFLINE. Based on machine vision for relative and absolute position.</p>
        </CenterDiv>

        <CenterDiv>
            <div>
                <StaticImage src="../../images/features/sens.png" alt="sensors"/>
            </div>
            <h3 style={{width: '60vw'}}>Using Mobile Sensors for Situational Awareness:</h3>
            <p>We create a timeline of the events that the user undergoes, and highlight unusual findings and/or scheduling of events by the user or automatically by the sensors on the smartphone.</p>
        </CenterDiv>

        <FeaturesMobileBullets>
            <div></div>
            <div>
                <ul>
                    <li><span>Improving personal safety among lone workers</span></li>
                    <li><span>Advanced reporting application for Command & Control</span></li>
                    <li><span>Activation of first responders in minimal time</span></li>
                    <li><span>Improving control and communication</span></li>
                    <li><span>Mass notifications by user location in real time</span></li>
                    <li><span>Management of first responder positions</span></li>
                    <li><span>Manage points of interest, user groups, and assets</span></li>
                    <li><span>Improved communication during the event by advanced chat: Command & Control for first responders-users</span></li>
                </ul>
            </div>
            <div></div>
        </FeaturesMobileBullets>

        <ButtonDivMobile>
            <h1>Like what you see and want to <span style={{color: '#C4132A'}}>learn more?</span></h1>
            <Link to='/contact'><button>Schedule a demo</button></Link>
        </ButtonDivMobile>

        

        
        </>
    )
}

export default Mobile
