import React from 'react'
import { useCountUp } from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import "../../css/typography.css"
import useWindowSize from "../../hooks/useWindowSize";

function CountPeople() {

    const { countUp, start, reset } = useCountUp({ end: 12, start: 0, delay: 0, duration: 10 });
    const windowSize = useWindowSize();

    return (windowSize > 480) ? (
        <ScrollTrigger onEnter={start} onExit={reset}>
            <div style={{display: "flex", flexDirection: "column", marginTop: '18%', marginLeft: '-17%'}}>
                <span style={{alignSelf: 'center', fontFamily: 'G Medium', fontSize: '6vw', marginLeft: '-17%'}}>{countUp}</span>
                <p style={{textAlign: 'center', width: '15vw', fontFamily: 'G Book', color: 'black', fontSize: '1.5vw'}}>Million protected people</p>
            </div>
        </ScrollTrigger>
    ) : (
        <ScrollTrigger onEnter={start} onExit={reset}>
            <div style={{display: "flex", flexDirection: "column", marginTop: '50%'}}>
                <span style={{alignSelf: 'center', fontFamily: 'G Medium', fontSize: '11vw'}}>{countUp}</span>
                <p style={{textAlign: 'center', width: '25vw', fontFamily: 'G Book', color: 'black', fontSize: '4vw'}}>Million protected people</p>
            </div>
        </ScrollTrigger>
    )
}

export default CountPeople
