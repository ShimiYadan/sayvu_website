import React from 'react'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "../../css/typography.css"
import {Link} from "gatsby"

const Left = styled.div`
    display: flex;
    justify-content: space-between;

    div:nth-child(1){
        width: 33.5vw;
        display: flex;
        justify-content: flex-end;
    }

    div:nth-child(1)>div{
        width: 15.5vw;
    }

    div:nth-child(2){
        width: 63vw;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    div:nth-child(2) > div{
        width: 35vw;
        display: flex;
        flex-direction: column;
    }

    div:nth-child(2) > div > h3{
        font-family: 'G Medium';
        color: #C4132A;
        font-size: 1.7vw;

    }

    div:nth-child(2) > div > p{
        font-family: 'G Book';
        font-size: 1.2vw;
        line-height: 130%;
        width: 31vw;
        margin-top: -1%;
        text-align: left;
    }
`


const Right = styled.div`
    display: flex;
    justify-content: space-between;

    div:nth-child(1){
        width: 50vw;
        display: flex;
        justify-content: flex-end;
    }

    div:nth-child(1)>div{
        width: 15.5vw;
    }

    div:nth-child(2){
        width: 46.5vw;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    div:nth-child(2) > div{
        width: 35vw;
        display: flex;
        flex-direction: column;
    }

    div:nth-child(2) > div > h3{
        font-family: 'G Medium';
        color: #C4132A;
        font-size: 1.7vw;

    }

    div:nth-child(2) > div > p{
        font-family: 'G Book';
        font-size: 1.2vw;
        line-height: 130%;
        width: 33vw;
        margin-top: -1%;
        text-align: left;
    }
`

const FeaturesBullets = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 6%;

div:nth-child(1), div:nth-child(3) {
    border-bottom: 3px solid #c4132a;
    width: 75vw;
} 

div:nth-child(2) {
    display: flex;
    justify-content: center;
}

div:nth-child(2) ul {
    line-height: 170%;
    margin-top: 2%;
    margin-bottom: 1.5%;
}

div:nth-child(2) ul li {
    width: 35vw;
    font-family: "G Book";
    font-size: 1.2vw;
}

div:nth-child(2) ul li::marker {
    color: #c4132a;
    font-size: 2.5vw;
}

div:nth-child(2) ul li span {
    margin-left: -1%;
}
`

const ButtonDiv = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
    padding-top: 6%;


    h1 {
        font-family: "G Medium";
        font-size: 4vw;
        text-align: center;
        width: 45vw;
    }

    button {
        background-color: #c4132a;
        color: white;
        font-family: "G Book";
        font-size: 2vw;
        border: none;
        border-radius: 25px;
        padding: .5vw .4vw .5vw .4vw;
        width: 19vw;
        margin-top: 1%;
    }
`


function Desktop() {
    return (
        <>
        <Left style={{marginTop: "5%"}}>
            <div>
                <div>
                    <StaticImage src="../../images/features/locked-phone.png" alt="locked-phone"/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Reporting from Locked Mobile Phone:</h3>
                    <p>In times of distress, the user does not have the time and the ability to report from an application, so we accessed the report even when the mobile phone is locked, even on iOS. Users can schedule reporting by gesture or dedicated widget.</p>
                </div>
            </div>
        </Left>

        <Right>
            <div>
                <div>
                    <StaticImage src="../../images/features/computing.png" alt="phone"/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Wearable Computing - IOT:</h3>
                    <p>We designed the system so that you, our customers, can connect wearable devices of your choice.</p>
                </div>
            </div>
        </Right>

        <Left style={{marginTop: '4%'}}>
            <div>
                <div>
                    <StaticImage src="../../images/features/command.png" alt="locked-phone"/>
                </div>
            </div>
            <div>
                <div style={{width: "70vw"}}>
                    <h3>Smart Command & Control (C&C)  for Managing Alerts:</h3>
                    <p style={{width: '47vw'}}>The Command & Control manages alerts in their context, including managing users, places, groups, and relationships between themselves.</p>
                    <p style={{width: '47vw'}}>The Command & Control enables full control of the event through smart queue management and quick and intuitive resource allocation. We have added many geographic information management capabilities to a map, using polygons, geophances, tags, and points of interest. Mass messages are given by identifying users and their role, their physical location in real time, and the properties to which they are associated.</p>
                </div>
            </div>
        </Left>

        <Right style={{marginTop: '3%'}}>
            <div>
                <div>
                    <StaticImage src="../../images/features/architecture.png" alt="architecture"/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Flexible System Architecture:</h3>
                    <p>We offer a modular system that gives you the choice either to use in whole or in part: mobile applications for users and first responders, Command & Control software for managing alerts, users, properties and groups. As well as connecting to existing Command & Control systems via API/SDK. - Command & Control and communication with the customer/user (CRM)</p>
                </div>
            </div>
        </Right>

        <Left style={{marginTop: '3%'}}>
            <div>
                <div>
                    <StaticImage src="../../images/features/alert.png" alt="locked-phone"/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Autonomous Alerts:</h3>
                    <p>Scheduling alerts according to predetermined rules such as entering dangerous areas or sending alerts from the device, given abnormal activity measured by the sensors on the device to tell what happened, for the user who cannot tell, for example: Fall, shock, and prowling of the smart phone in a certain way.</p>
                </div>
            </div>
        </Left>

        <Right style={{marginTop: '2%'}}>
            <div>
                <div>
                    <StaticImage src="../../images/features/intel.png" alt="intelligence"/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Real-Time Artificial Intelligence:</h3>
                    <p>In order for the information to be understood in its context, we believe that the processed information must be analyzed for the decision-maker in order to allocate resources efficiently.</p>
                    <p style={{marginTop: '-3.5%'}}>Try our "speech-to-event", speech analysis to determine the type of event.</p>
                </div>
            </div>
        </Right>

        <Left style={{marginTop: '2.5%'}}>
            <div>
                <div>
                    <StaticImage src="../../images/features/position.png" alt="positioning"/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Indoor Positioning:</h3>
                    <p>Our algorithm enables mapping of structures and when needed, placing the user, even in the internal space "indoor". In 2018, we will display indoor positioning capabilities OFFLINE. Based on machine vision for relative and absolute position.</p>
                </div>
            </div>
        </Left>

        <Right style={{marginTop: '1.5%'}}>
            <div>
                <div>
                    <StaticImage src="../../images/features/sens.png" alt="architecture"/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Using Mobile Sensors for Situational Awareness:</h3>
                    <p>We create a timeline of the events that the user undergoes, and highlight unusual findings and/or scheduling of events by the user or automatically by the sensors on the smartphone.</p>
                </div>
            </div>
        </Right>

        <FeaturesBullets>
            <div></div>
            <div>
                <ul>
                    <li><span>Improving personal safety among lone workers</span></li>
                    <li><span>Advanced reporting application for Command & Control</span></li>
                    <li><span>Activation of first responders in minimal time</span></li>
                    <li><span>Improving control and communication</span></li>
                </ul>
                <ul>
                    <li><span>Mass notifications by user location in real time</span></li>
                    <li><span>Management of first responder positions</span></li>
                    <li><span>Manage points of interest, user groups, and assets</span></li>
                    <li><span>Improved communication during the event by advanced chat: Command & Control for first responders-users</span></li>
                </ul>
            </div>
            <div></div>
        </FeaturesBullets>

        <ButtonDiv>
            <h1>Like what you see and want to <span style={{color: '#C4132A'}}>learn more?</span></h1>
            <Link to='/contact'><button>Schedule a demo</button></Link>
        </ButtonDiv>
        
        </>
    )
}

export default Desktop
