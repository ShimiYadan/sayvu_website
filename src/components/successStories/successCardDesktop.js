import React from 'react'
import styled from "styled-components"
import "../../css/typography.css"
import {Link} from 'gatsby'

const BorderedDiv = styled.div`
border-bottom: 7px solid 	#D0D0D0;
border-right: 7px solid 	#D0D0D0;
display: flex;
width: 58.5vw;
height: 25vw;
margin-bottom: 5%;
overflow: hidden;

img {
    width: 16vw;
    box-shadow: 7px 7px 0 #D0D0D0;
}

div:nth-child(2) {
    padding: 4% 3% 5% 3%;
}

h4 {
    font-family: 'G Book';
    font-size: 1.4vw;
}

span {
    font-family: 'G Medium';
}

p {
    font-family: "G Book";
    font-size: .95vw;
    text-align: left;
}

button {
    background-color: #C4132A;
    color: white;
    font-family: 'G Light';
    font-size: 1vw;
    border: none;
    border-radius: 25px;
    padding: 1% 1% 1% 1%;
    width: 8vw;
    position: relative;
    top: 3%;
}
`

function SuccessCardDesktop(props) {
    return (
        <BorderedDiv>
            <div>
                <img src={props.image} alt="success-card-image"/>
            </div>
            <div>
                <h4 style={{marginBottom: '.5vw'}}><span>{props.case}</span></h4>
                <p>{props.paragraph}</p>
                <Link to={props.link}><button>Read more</button></Link>
            </div>
        </BorderedDiv>
    )
}

export default SuccessCardDesktop
