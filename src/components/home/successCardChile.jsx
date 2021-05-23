import React from 'react'
import "./successCardChile.css"
import "../../css/typography.css"
import useWindowSize from "../../hooks/useWindowSize"
import { Link } from "gatsby"

function SuccessCard(props) {

    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <div className="success-card-chile">
        <div className="content-success-card-chile">
            <div className="content-success-div-chile">
                <h3>{props.title}</h3>
                <p>{props.paragraph}</p>
                <Link to='/solution-verticals' className='corporate-link'>{props.read}</Link>
            </div>
        </div>
    </div>
    ) : (
        <div className="success-card-chile-mobile">
        <div className="content-success-card-chile-mobile">
            <div className="content-success-div-chile-mobile">
                <h3>{props.title}</h3>
                <Link to='/solution-verticals' className="mobile-read-more-chile-link">{props.read}</Link>
            </div>
        </div>
    </div>
    )
}

export default SuccessCard


