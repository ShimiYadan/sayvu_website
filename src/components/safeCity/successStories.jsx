import React from 'react'
import useWindowSize from "../../hooks/useWindowSize"
import styled from "styled-components"
import "../../css/typography.css"

const SuccessDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 55vw;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 12vw;
    }
    p{
        font-family: 'G Book';
        color: black; 
        font-size: 1vw;
        width: 13vw;
        text-align: center;
    }
    @media only screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        width: 100vw;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 40vw;
    }
    p{
        font-family: 'G Book';
        color: black; 
        font-size: 5vw;
        width: 90vw;
        text-align: center;
    }
    }
`

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5vw;
    margin-top: 5vw;

    h2 {
        font-family: 'G Medium';
        font-size: 3vw;
        color: black;
        margin-top: 3vw;
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
        margin-bottom: 0;
    }
    }
`

function SuccessStories(props) {
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <MainDiv>
        <h2>Success Cases</h2>
        <SuccessDiv>
            <div>
                <img src={props.success1} alt="success-logo"/>
                <p>{props.client1}</p>
            </div>
            <div>
                <img src={props.success2} alt="success-logo"/>
                <p>{props.client2}</p>
            </div>
            <div>
                <img src={props.success3} alt="success-logo"/>
                <p>{props.client3}</p>
            </div>
            <div>
                <img src={props.success4} alt="success-logo"/>
                <p>{props.client4}</p>
            </div>
        </SuccessDiv>
        </MainDiv>
    ) : (
        <MainDiv>
            <h2>Success Stories</h2>
        <SuccessDiv>
            <div>
                <img src={props.success1} alt="success-logo"/>
                <p>{props.client1}</p>
            </div>
            <div>
                <img src={props.success2} alt="success-logo"/>
                <p>{props.client2}</p>
            </div>
            <div>
                <img src={props.success3} alt="success-logo"/>
                <p>{props.client3}</p>
            </div>
            <div>
                <img src={props.success4} alt="success-logo"/>
                <p>{props.client4}</p>
            </div>
        </SuccessDiv>
        </MainDiv>
    )
}

export default SuccessStories
