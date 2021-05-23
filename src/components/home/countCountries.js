import React from 'react'
import { useCountUp } from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import "../../css/typography.css"
import useWindowSize from "../../hooks/useWindowSize";

function CountCountries() {

    const { countUp, start, reset } = useCountUp({ end: 17, start: 0, delay: 0, duration: 10 });
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <ScrollTrigger onEnter={start} onExit={reset}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <span style={{alignSelf: 'center', fontFamily: 'G Medium', fontSize: '6vw'}}>{countUp}</span>
                <p style={{textAlign: 'center', fontFamily: 'G Book', color: 'black', fontSize: '1.5vw'}}>Countries</p>
            </div>
        </ScrollTrigger>
    ) : (
        <ScrollTrigger onEnter={start} onExit={reset}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <span style={{alignSelf: 'center', fontFamily: 'G Medium', fontSize: '11vw'}}>{countUp}</span>
                <p style={{textAlign: 'center', fontFamily: 'G Book', color: 'black', fontSize: '4vw'}}>Countries</p>
            </div>
        </ScrollTrigger>
    )
}

export default CountCountries
