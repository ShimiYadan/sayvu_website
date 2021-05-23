import React from 'react'
import useWindowSize from "../../hooks/useWindowSize"
import styled from "styled-components"
import "../../css/typography.css"
import Weird from "../../images/weird.jpg"
import { Link } from "gatsby"

const DemoDiv = styled.div`
background-image: url(${Weird});
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 6vw;

h2 {
    font-family: 'G Medium';
    color: white; 
    font-size: 3vw;
    width: 50vw;
    text-align: center;
}

@media only screen and (max-width: 480px) {
    background-image: url(${Weird});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 17vw;
    padding-bottom: 17vw;
h2 {
    font-family: 'G Medium';
    color: white; 
    font-size: 5vw;
    width: 80vw;
    text-align: center;
}
}
`

function Apply() {
    const windowSize = useWindowSize();

    return (windowSize > 480) ?  (
        <DemoDiv>
            <h2>Want to see how this would apply to your organization?</h2>
            <Link to='/contact' 
            style={{color: 'white', backgroundColor: '#C4132A', borderRadius: '20px', 
            width: '20vw', fontFamily: 'G Book', display: 'flex', justifyContent: 'center', fontSize: '2vw',
            padding: '.2vw', marginTop: '2vw', marginBottom: '4vw'}}
        >Schedule a demo</Link>
        </DemoDiv>
    ) : (
        <DemoDiv>
            <h2>Want to see how this would apply to your organization?</h2>
            <Link to='/contact' 
            style={{color: 'white', backgroundColor: '#C4132A', borderRadius: '20px', 
            width: '40vw', fontFamily: 'G Light', display: 'flex', justifyContent: 'center', 
            fontSize: '4vw', padding: '1.5vw', marginTop: '10vw', marginBottom: '4vw', alignItems: 'center'}}
        >Schedule a demo</Link>
        </DemoDiv>
    )
}

export default Apply
