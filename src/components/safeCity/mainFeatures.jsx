import React from 'react'
import useWindowSize from "../../hooks/useWindowSize"
import styled from "styled-components"
import "../../css/typography.css"

const FeaturesDiv = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;

    h2 {
        font-family: 'G Medium';
        font-size: 3vw;
        color: black;
        margin-top: 5vw;
    }
    div {
        width: 50vw;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    img {
        width: 11vw;
        margin-bottom: 2vw;
    }

    @media only screen and (max-width: 480px) {
        display: flex;
        flex-direction: column; 
        align-items: center;
    h2 {
        font-family: 'G Medium';
        font-size: 9vw;
        color: black;
        margin-top: 10vw;
        margin-bottom: 5vw;
    }
    div {
        width: 80vw;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    img {
        width: 35vw;
        margin-bottom: 5vw;
        z-index: 5;
    }
    img:nth-child(7) {
        margin-left: 22.5vw;
    }
    }
`

function MainFeatures(props) {
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <FeaturesDiv>
            <h2>Main Features</h2>
            <div>
                <img src={props.image1} alt="main-feature-image"/>
                <img src={props.image2} alt="main-feature-image"/>
                <img src={props.image3} alt="main-feature-image"/>
                <img src={props.image4} alt="main-feature-image"/>
                <img src={props.image5} alt="main-feature-image"/>
                <img src={props.image6} alt="main-feature-image"/>
                <img src={props.image7} alt="main-feature-image"/>
            </div>
        </FeaturesDiv>
    ) : (
        <FeaturesDiv>
            <h2>Main Features</h2>
            <div>
                <img src={props.image1} alt="main-feature-image"/>
                <img src={props.image2} alt="main-feature-image"/>
                <img src={props.image3} alt="main-feature-image"/>
                <img src={props.image4} alt="main-feature-image"/>
                <img src={props.image5} alt="main-feature-image"/>
                <img src={props.image6} alt="main-feature-image"/>
                <img src={props.image7} alt="main-feature-image"/>
            </div>
        </FeaturesDiv>
    )
}

export default MainFeatures
