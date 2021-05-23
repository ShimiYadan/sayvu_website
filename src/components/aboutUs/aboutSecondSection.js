import React from 'react'
import styled from "styled-components"
import "../../css/typography.css"
import useWindowSize from "../../hooks/useWindowSize";
import "./aboutSecondSection.css"
import LineDesktop from "../../images/aboutUs/final-desktop-line.png"
import LineMobile from "../../images/aboutUs/lineas-mobile.png"
import AboutSmartCity from "../../images/aboutUs/smart360.png"
import Att from "../../images/aboutUs/at&t.png"
import Amdocs from "../../images/aboutUs/amdocs.png"
import Defense from "../../images/aboutUs/defense.png"
import Firefighters from "../../images/aboutUs/firefighters.png"
import WeizmannLogo from "../../images/aboutUs/weizmann-logo.jpeg"
import CuricoLogo from "../../images/aboutUs/curico-logo.png"
import Casablanca from "../../images/aboutUs/casablanca.png"
import Statkraft from "../../images/aboutUs/statkraft.png"
import Sparta from "../../images/aboutUs/sparta.png"
import Google from "../../images/aboutUs/google-logo.png"
import Homeland from "../../images/aboutUs/homeland.png"
import Rio from "../../images/aboutUs/rio2016.png"
import Menorah from "../../images/aboutUs/menorah.png"
import CTTSC3 from "../../images/aboutUs/cttsc3.png"
import OrangeLogo from "../../images/aboutUs/orange.png"
import Sixt from "../../images/aboutUs/sixt.png"
import Ministry from "../../images/aboutUs/ministry.png"


const AboutDivider = styled.div`
    border-left: 5px solid #c4132a;
    padding-left: 3%;

    p:nth-child(1) {
        font-family: "G Medium"; 
        margin-bottom: -.01%;
        font-size: 4.5vw;
    }

    p:nth-child(2) {
        font-family: "G Book";
        font-size: 4.5vw;
        line-height: 120%;
    }
`



function AboutSecondSection() {
    const windowSize = useWindowSize(); 

    return (windowSize > 480) ? (
        <>
        <div className="about-our-growth-div-desktop">
            <h2>Our <span style={{color: "#c4132a"}}>Growth</span></h2>
            <p style={{fontFamily: "G Book"}}>Making history to <span style={{fontFamily: "G Medium"}}>change the future</span></p>
        </div>

        <section className="about-second-section-section">
            <div className="second-section-logos-div">
                <div className="about-images-first-div">
                    <img src={Google} alt="google-logo" className="about-google-logo"/>
                    <img src={AboutSmartCity} alt="smart-city" className="about-smart-logo"/>
                </div>
                <div className="about-images-second-div">
                    <img src={Homeland} alt="homeland-logo" className="about-homeland-logo"/>
                    <img src={Menorah} alt="blue-logo" className="about-blue-menorah-logo"/>
                    <img src={Rio} alt="rio-logo" className="about-rio-logo"/>
                </div>
                <div className="about-images-third-div">
                    <img src={Att} alt="att-logo" className="about-att-logo"/>
                    <img src={Amdocs} alt="amdocs-city" className="about-amdocs-logo"/>
                </div>
                <div className="about-images-fourth-div">
                    <img src={CTTSC3} alt="cttsc3-city" className="about-cttsc3-logo"/>
                    <img src={CuricoLogo} alt="curico" className="about-curico-logo"/>
                </div>
                <div className="about-images-fifth-div">
                    <img src={Casablanca} alt="casablanca-logo" className="about-casablanca-logo"/>
                    <img src={Defense} alt="defense-logo" className="about-defense-logo"/>
                    <img src={WeizmannLogo} alt="weizmann-logo" className="about-weizmann-logo"/>
                    <img src={Firefighters} alt="firefighters-logo" className="about-firefighters-logo"/>
                </div>
                <div className="about-images-sixth-div">
                    <img src={Statkraft} alt="statkraft-logo" className="about-statkraft-logo"/>
                    <img src={OrangeLogo} alt="orange-logo" className="about-orange-logo"/>
                    <img src={Sixt} alt="sixt-logo" className="about-sixt-logo"/>
                </div>
                <div className="about-images-seventh-div">
                    <img src={Sparta} alt="sparta-logo" className="about-sparta-logo"/>
                    <img src={Ministry} alt="ministry"/>
                </div>
            </div>

            <div className="about-line-section">
                <img src={LineDesktop} alt="linea-about" className="about-linea-desktop"/>
            </div>


            <div className="growth-info-div">
                <div className="about-growth-info-first-div about-logos-info-divs">
                    <h3>2015</h3>
                    <p>1st place Google innovation award; Hac Smart City Accelerator Alumni.</p>
                </div>
                <div className="about-growth-info-second-div about-logos-info-divs">
                    <h3>2016</h3>
                    <p>Pilot with ISDS to protect Rio Olympics, Brazil $2M BIRD project with OKSI, Sponsored Dept. Homeland Security (DHS) & Israel Ministry of Public Safety.</p>
                </div>
                <div className="about-growth-info-third-div about-logos-info-divs">
                    <h3>2017</h3>
                    <p>US pilot with telco operators & corporate safety.</p>
                </div>
                <div className="about-growth-info-fourth-div about-logos-info-divs">
                    <h3>2018</h3>
                    <p>Fast growth In Latin America. Finalist CTTSC3 selected from 200 companies, supported by US Department of Defense identifying breakthrough technology for combating terrorism.</p>
                </div>
                <div className="about-growth-info-fifth-div about-logos-info-divs">
                    <h3>2019</h3>
                    <p>Military and Fire Fighters Deployments Weizmann Institute - Indoor Location Small cities deployment</p>
                </div>
                <div className="about-growth-info-sixth-div about-logos-info-divs">
                    <h3>2020</h3>
                    <p>Multi-national corporates</p>
                    <p>Large Cities</p>
                    <p>Video / Audio Integration</p>
                    <p>Indoor positioning enhanced solution</p>
                    <p>COVID tests</p>
                    <p>New Partners in Latin America.</p>
                    <p>US market readiness</p>
                </div>
                <div className="about-growth-info-seventh-div about-logos-info-divs">
                    <h3>2021-Q1</h3>
                    <p>Sparta Security</p>
                    <p>Ministry of Labor, Social Affairs and Social Services</p>
                </div>

            </div>
        </section>
        </>
    ) : (
        <section style={{paddingBottom: '10%'}}>
            <div className="whats-going-on-div">
                <AboutDivider>
                    <p>Whats going on, while is going on</p>
                    <p>SayVU strives to minimize the response time of emergency services and other authorities, and make sure the user gets relevant and effective assistance as quickly as possible. Our world-leading platform tells the story of what’s going on--while it’s going on--allowing for faster, more efficient responses to a situation, ultimately, saving more lives. We are here to make sure everyone has the power to save lives.</p>
                </AboutDivider>
            </div>
            <div className="about-our-growth-div-mobile">
                <h2>Our <span style={{color: "#c4132a"}}>Growth</span></h2>
                <p style={{fontFamily: "G Book"}}>Making history to <span style={{fontFamily: "G Medium"}}>change the future</span></p>
            </div>

            <div className="about-second-section-section-mobile">
                <div className="about-line-section-mobile">
                    <img src={LineMobile} alt="linea-about-mobile" className="about-linea-mobile"/>
                </div>

                <div className="growth-info-div-mobile">
                    <div>
                        <h3>2015</h3>
                        <p>1st place Google innovation award; Hac Smart City Accelerator Alumni.</p>
                        <div className="about-images-first-div-mobile">
                            <img src={Google} alt="google-logo" className="about-google-logo-mobile"/>
                            <img src={AboutSmartCity} alt="smart-city" className="about-smart-logo-mobile"/>
                        </div>
                    </div>

                    <div className="about-growth-info-second-div-mobile">
                        <h3>2016</h3>
                        <p>Pilot with ISDS to protect of Rio Olympics, Brazil</p>
                        <p>$2M BIRD project with OKSI, Sponsored Dept.</p>
                        <div className="about-images-second-div-mobile">
                            <img src={Homeland} alt="homeland-logo-mobile" className="about-homeland-logo-mobile"/>
                            <img src={Menorah} alt="blue-logo-mobile" className="about-blue-messusah-logo-mobile"/>
                            <img src={Rio} alt="rio-logo-mobile" className="about-rio-logo-mobile"/>
                        </div>
                    </div>

                    <div className="about-growth-info-third-div-mobile">
                        <h3>2017</h3>
                        <p>US pilot with telco operators & corporate safety</p>
                        <div className="about-images-third-div-mobile">
                            <img src={Att} alt="att-logo-mobile" className="about-att-logo-mobile"/>
                            <img src={Amdocs} alt="amdocs-city-mobile" className="about-amdocs-logo-mobile"/>
                        </div>
                    </div>

                    <div className="about-growth-info-fourth-div-mobile">
                        <h3>2018</h3>
                        <p>Fast growth In Latin America. Finalist CTTSC3 selected from 200 companies, supported by US Department of Defense identifying breakthrough technology for combating terrorism.</p>
                        <div className="about-images-fourth-div-mobile">
                            <img src={CTTSC3} alt="cttsc3-city-mobile" className="about-cttsc3-logo-mobile"/>
                            <img src={CuricoLogo} alt="curico-logo-mobile" className="curico-logo-mobile"/>
                        </div>
                    </div>

                    <div className="about-growth-info-fifth-div-mobile">
                        <h3>2019</h3>
                        <p>Military and Fire Fighters Deployments</p>
                        <p>Weizmann Institute - Indoor Location</p>
                        <p>Small cities deployment</p>
                        <div className="about-images-fifth-div-mobile">
                            <img src={Casablanca} alt="casablanca-mobile" className="casablanca-mobile"/>
                            <img src={Defense} alt="defense-logo-mobile" className="defense-logo-mobile"/>
                            <img src={WeizmannLogo} alt="weizmann-logo-mobile" className="about-weizmann-logo-mobile"/>
                            <img src={Firefighters} alt="firefighters-logo-mobile" className="about-firefighters-logo-mobile"/>
                        </div>
                    </div>

                    <div className="about-growth-info-sixth-div-mobile">
                        <h3>2020</h3>
                        <p>Multi-national corporates</p>
                        <p>Large Cities</p>
                        <p>Video / Audio Integration</p>
                        <p>Indoor positioning enhanced solution</p>
                        <p>COVID tests</p>
                        <p>New Partners in Latin America</p>
                        <p>US market readiness</p>
                        <div className="about-images-sixth-div-mobile">
                            <img src={Statkraft} alt="statkraft-mobile" className="statkraft-mobile"/>
                            <img src={OrangeLogo} alt="orange-logo-mobile" className="orange-logo-mobile"/>
                            <img src={Sixt} alt="sixt-logo-mobile" className="sixt-logo-mobile"/>
                        </div>
                    </div>

                    <div className="about-growth-info-seventh-div-mobile">
                        <h3>2021-Q1</h3>
                        <p>Sparta Security</p>
                        <p>Ministry of Labor, Social Affairs and Social Services</p>
                        <div className="about-images-seventh-div-mobile">
                            <img src={Sparta} alt="sparta-logo-mobile" className="sparta-mobile"/>
                            <img src={Ministry} alt="ministry" className='ministry-mobile'/>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default AboutSecondSection
