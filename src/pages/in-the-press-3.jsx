import React from 'react'
import { Link } from "gatsby"
import PressCard from "../components/inThePress/pressCard";
import SuccRed from "../images/inThePress/success-red.png";
import Globes from "../images/inThePress/PR2.jpg";
import "../css/typography.css";
import useWindowSize from "../hooks/useWindowSize";
import styled from "styled-components";
import Layout from "../components/layout";
import ImagePress from "../images/redes2/press.png"

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
                image={Globes}
                title="Startup SayVU shows the Weizmann Institute indoor positioning (Telecom) (HE)"
                date="April 22, 2019"
                link='https://www.telecomnews.co.il/%D7%94%D7%A1%D7%98%D7%90%D7%A8%D7%98%D7%90%D7%A4-SayVU-%D7%9E%D7%A6%D7%99%D7%92-%D7%91%D7%9E%D7%9B%D7%95%D7%9F-%D7%95%D7%99%D7%A6%D7%9E%D7%9F-%D7%9C%D7%9E%D7%93%D7%A2-%D7%90%D7%99%D7%9B%D7%95%D7%9F-%D7%91%D7%AA%D7%95%D7%9A-%D7%9E%D7%91%D7%A0%D7%99%D7%9D-%D7%9C%D7%97%D7%99%D7%9C%D7%95%D7%A5-%D7%91%D7%9E%D7%A6%D7%91%D7%99-%D7%97%D7%99%D7%A8%D7%95%D7%9D.html'
                />
                <PressCard 
                image={SuccRed}
                title="Trying to fight kite terror (Globes) (HE)"
                date="August 10, 2018"
                link="https://13tv.co.il/item/news/starting-the-day/season-01/articles/gsj6h-2053524/?utm_source=share&utm_campaign=reshet_d&utm_medium=C"
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
        </Layout>
    )
}



export default InthePressSecond
