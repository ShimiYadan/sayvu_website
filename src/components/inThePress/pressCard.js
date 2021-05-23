import React from 'react'
import "./pressCard.css"
import "../../css/typography.css"

function PressCard(props) {
    return (
        <div className="press-card-div">
            <img src={props.image} alt="press-image"/>
            <p>{props.title}</p>
            <p>{props.date}</p>
            <a href={props.link} target="_blank" className='press-card-a'><button className="press-card-button">Read more</button></a>
        </div>
    )
}

export default PressCard
