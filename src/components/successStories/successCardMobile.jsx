import React from 'react'
import styled from "styled-components"
import "../../css/typography.css"
import {Link} from 'gatsby'

const BorderedMobDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-bottom: 7px solid 	#D0D0D0;
border-right: 7px solid 	#D0D0D0;
width: 80vw;
margin-bottom: 10vw;

img {
    width: 65vw;
    margin-bottom: 2%;
}

h4 {
    font-family: 'G Book';
    font-size: 4.3vw;
}

span {
    font-family: 'G Medium';
}

p {
    font-family: 'G Book'; 
    font-size: 4vw;
    width: 68vw;
}

button {
    background-color: #C4132A;
    color: white;
    font-family: 'G Light';
    font-size: 4vw;
    border: none;
    border-radius: 25px;
    padding: 1.5% 1.5% 1.5% 1.5%;
    width: 33vw;
    margin-top: 5%;
    margin-bottom: 8%;
}
`

function SuccessCardMobile(props) {
    return (
        <BorderedMobDiv>
            <img src={props.image} alt="isuccess-image" />
            <h4 style={{marginBottom: '2vw'}}> <span>{props.case}</span></h4>
            <p>{props.paragraph}</p>
            <Link to={props.link}><button>Read more</button></Link>
        </BorderedMobDiv>
    )
}

export default SuccessCardMobile
