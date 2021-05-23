import React from 'react'
import useWindowSize from "../../hooks/useWindowSize"
import styled from "styled-components"
import "../../css/typography.css"

const TitleDiv = styled.div `
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vw;
    h1 {
        font-family: 'G Medium';
        color: black;
        font-size: 5vw;
    }
    h2 {
        font-family: 'G Book';
        font-size: 2vw;
        margin-bottom: 2.2vw;
    }
    p {
        width: 53vw;
        text-align: center;
        font-family: 'G Book';
        font-size: 1.5vw;
        line-height: 125%;
    }

    @media only screen and (max-width: 480px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-family: 'G Medium';
        color: black;
        font-size: 8vw;
        margin-bottom: 5vw;
        margin-top: 10vw;
    }
    h2 {
        font-family: 'G Book';
        font-size: 7vw;
        margin-bottom: 10vw;
        width: 90vw;
        text-align: center;
    }
    p {
        width: 87vw;
        text-align: start;
        font-family: 'G Book';
        font-size: 5vw;
        line-height: 125%;
    }
    }
`

function GeneralTitle(props) {
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <TitleDiv>
            <h1>Solution <span style={{color: '#C4132A'}}>Vertical</span></h1>
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
        </TitleDiv>
    ) : (
        <TitleDiv>
            <h1>Solution <span style={{color: '#C4132A'}}>Vertical</span></h1>
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
        </TitleDiv>
    )
}

export default GeneralTitle
