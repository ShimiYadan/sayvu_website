import React, {useState} from 'react'
import { Link } from "gatsby"
import PressCard from "../components/inThePress/pressCard";
import Amotz from "../images/inThePress/amotz.png";
import NoCamels from "../images/inThePress/NoCamels.png";
import SuccRio from "../images/inThePress/success-rio.png";
import SuccRed from "../images/inThePress/success-red.png";
import "../css/typography.css";
import useWindowSize from "../hooks/useWindowSize";
import styled from "styled-components";
import Layout from "../components/layout";
import ImagePress from "../images/redes2/press.png"
import ImagePress2 from "../images/redes2/press2.png"
import PressMobile from "../images/redes2/press-mobile.png"


const MobileDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;

    >* {
        margin-bottom: 5%;
    }
`

const Pagination = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
    margin-bottom: 5%;

    div {
        display: flex;
        justify-content: space-between; 
        width: 23vw;
        color: black;
        font-family: 'G Book';
        font-size: 6vw;
    }
`


function InthePressSecond() {
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <Layout>

        </Layout>
    ) : (
        <Layout>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '-5%', marginTop: '7%'}}>
            <h1 style={{fontFamily: 'G Medium', fontSize: '7.5vw', color: 'black'}}>In the <span style={{color: '#c4132a'}}>Press</span></h1>
        </div>
        <MobileDiv>
                <PressCard
                image={NoCamels}
                title="Israeli Rescue Tech Saves Lives With Just A Tap (NoCamels) (EN)"
                date="July 10, 2019"
                link="https://nocamels.com/2019/07/israeli-rescue-tech-saves-lives-cellphone/"
                />
                <PressCard 
                image={SuccRed}
                title="Start-ups Take Part In Counter-Terrorism Contest In Israel (themedialine) (EN)"
                date="June 19, 2018"
                link="https://themedialine.org/news/start-ups-take-part-in-counter-terrorism-contest-in-israel/"
                />
                <PressCard 
                image={Amotz}
                title="One startup per week: meet SayVU (StartIsrael) (HE)"
                date="May 16, 2017"
                link="https://www.startisrael.co.il/article/1566"
                />
                <PressCard 
                image={SuccRio}
                title="Israeli Panic-button App Deployed at Rio Olympics (Haaretz) (EN)"
                date="August 11, 2016"
                link="https://www.haaretz.com/israel-news/business/tech-in-brief-israeli-panic-button-app-deployed-at-rio-olympics-1.5423542"
                />
        </MobileDiv>

        <Pagination>
            <div>
                <Link to='/in-the-press' style={{color: 'black'}}>1</Link>
                <Link to="/in-the-press-2" style={{color: 'black'}}>2</Link >
                <Link to="/in-the-press-3" style={{color: 'black'}}>3</Link>
            </div>
        </Pagination>

            <div>
                <img src={ImagePress} alt="red Arriba" 
                style={{position: 'absolute', width: '90%', top: '15%', 
                left: '-45%', zIndex: '-1'}}/>
            </div>
            <div>
                <img src={PressMobile} alt="red Arriba" 
                style={{position: 'absolute', width: '45%', top: '130%', 
                right: '0', zIndex: '-1', }}/>
            </div>
        </Layout>
    )
}



export default InthePressSecond
