import React, {useState} from 'react'
import { Link } from "gatsby"
import PressCard from "../components/inThePress/pressCard";
import ThreeLined from "../components/inThePress/threeLinedCard";
import Amotz from "../images/inThePress/amotz.png";
import Network13 from "../images/inThePress/network13.png";
import JewishB from "../images/inThePress/jewish-b.png";
import NoCamels from "../images/inThePress/NoCamels.png";
import Vivimos from "../images/inThePress/vivimos-la.png";
import SuccRio from "../images/inThePress/success-rio.png";
import SuccRed from "../images/inThePress/success-red.png";
import Globes from "../images/inThePress/PR2.jpg";
import "../css/typography.css";
import useWindowSize from "../hooks/useWindowSize";
import scrollTo from 'gatsby-plugin-smoothscroll';
import {StaticImage} from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/layout";
import ImageVertical from "../images/redes2/verticals.png";
import RedArribaDerecha from "../images/redes2/arriba-derecha.png"
import RedAbajoDerecha from "../images/redes2/abajo-derecha.png"
import RedAbajoIzquierda from "../images/redes2/home-izquierda.png"
import ImagePress from "../images/redes2/press.png"
import ImagePress2 from "../images/redes2/press2.png"
import PressMobile from "../images/redes2/press-mobile.png"
import Arrow from "../images/inThePress/arrow.png"


const PressButton = styled.button`
    background-color: #c4132a;
    color: white;
    font-family: "G Light";
    font-size: 2.3vw;
    border: none;
    border-radius: 35px;
    padding: .9vw .4vw .6vw .4vw;
    width: 22vw;
    margin-top: 1%;
`

const MobileDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    width: 100vw;

    >* {
        margin-bottom: 5%;
    }
`

const Pagination = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
    margin-bottom: 5%;

    div {
        display: flex;
        justify-content: space-between; 
        width: 23vw;
        color: black;
        font-family: 'G Book';
        font-size: 6vw;
    }
`


function InthePress() {
    const windowSize = useWindowSize();
    const [more, setMore] = useState(false);
    const [moreDiv, setMoreDiv] = useState(true)

    return (windowSize > 480) ? (
        <Layout>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3%', marginTop: '5%'}}>
            <h1 style={{fontFamily: 'G Medium', fontSize: '4.5vw', color: 'black'}}>In the <span style={{color: '#c4132a'}}>Press</span></h1>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '85vw'}}>
                <PressCard 
                image={Network13}
                title="Get to know the apps that can save lives (Network 13) (HE)"
                date="September 3, 2020"
                link="https://13tv.co.il/item/news/starting-the-day/season-01/articles/gsj6h-2053524/?utm_source=share&utm_campaign=reshet_d&utm_medium=C"
                />
                <ThreeLined 
                image={SuccRed}
                title="Municipality of Curicó implemented 'Panic Button' (Radiortl) (ES)"
                date="January 10, 2020"
                link="https://radiortl.cl/2020/01/10/mas-seguridad-para-usuarios-y-funcionarios-municipalidad-de-curico-implemento-boton-de-panico-en-centros-de-salud-de-la-comuna/?__cf_chl_jschl_tk__=a29d6368435a4e9a5ef1881f76247556390b7f8d-1616556186-0-AYxKYKjh-aU_3u7SVM6dQA50K3g7lxQKq-kUu3B1jkG3ypar3F09KqWe5p-ZXIrc7K1wW-RNoozhkhJLRXUWJ1vLectrM9jMzNdiLgLAsKGMjQO6_Nx0A-ttoegxR83gGpz1KesrlrciZCP4UkoEi9whdqwCOg6di2NCHm4ozyIj5u_mKlpoySo3r0q6Kd45Q-37KLOGHqmdIRkoTHQzSssvmDsh9A2jqMQaoR88OHpMzhUzE-MYOoyCRdWfB5ynpbtEHxkFZDNjvOxgUdbWHCF6RYBF5O1W79QPP7nHFuIiObEq0dOT_oul3Aff2CXdHhc5J9SjAzZEtgsnv3HAPGGOFqtiNQOfBGeDRyMgvepMmHtt0ial6ekqYLDMVblbMsYdGvKASxPG6DdlEO0Z99RLZ7yYTmAJHqeK0xzl815eePJ8MbFpM4mEonoeXj614fLGEWKlA6peuD8qDR8PYEBsFNYfb7xgoESOJ8tqfXTfy6-T2OHMvDpFWmxDU9B8BA"
                />
                <ThreeLined 
                image={Vivimos}
                title="Woman obtains arrest using panic button (Vivimos La Noticia) (ES)"
                date="September 24, 2019"
                link="https://vivimoslanoticia.cl/noticias/policial/2019/09/24/mujer-logro-detencion-violencia-ex-pareja-usando-boton-panico/"
                />
                {/* NO TENGO FOTO: */}
                <ThreeLined 
                image={JewishB}
                title="Israeli Startup’s Revolutionary Tech (Jewish Business News) (EN)"
                date="July 15, 2019"
                link="https://jewishbusinessnews.com/2019/07/15/israeli-startups-revolutionary-tech-sends-emergency-rescue-signal-even-when-cellular-system-unavailable/"
                />
            </div>
        </div>


        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '5%'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '3%', flexWrap: 'wrap', width: '85vw'}}>
                <ThreeLined 
                image={NoCamels}
                title="Israeli Rescue Tech Saves Lives With Just A Tap (NoCamels) (EN)"
                date="July 10, 2019"
                link="https://nocamels.com/2019/07/israeli-rescue-tech-saves-lives-cellphone/"
                />
                {/* NO HAY FOTO (VIDEO): */}
                <ThreeLined 
                image={SuccRed}
                title="Start-ups Take Part In Counter-Terrorism Contest In Israel (themedialine) (EN)"
                date="June 19, 2018"
                link="https://themedialine.org/news/start-ups-take-part-in-counter-terrorism-contest-in-israel/"
                />
                <PressCard 
                image={Amotz}
                title="One startup per week: meet SayVU (StartIsrael) (HE)"
                date="May 16, 2017"
                link="https://www.startisrael.co.il/article/1566"
                />
                <ThreeLined 
                image={SuccRio}
                title="Israeli Panic-button App Deployed at Rio Olympics (Haaretz) (EN)"
                date="August 11, 2016"
                link="https://www.haaretz.com/israel-news/business/tech-in-brief-israeli-panic-button-app-deployed-at-rio-olympics-1.5423542"
                />
            </div>
        </div>

        <div id="morediv" ></div>

        { moreDiv ? 
        <div more={more} moreDiv={moreDiv} style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '10%'}}>
            <h2 style={{fontFamily: 'G Medium', fontSize: '3.2vw', color: 'black', marginBottom: '0'}}>View more</h2>
            <div style={{width: '100%', marginBottom: '3%', display: 'flex', justifyContent: 'center'}} more={more} moreDiv={moreDiv} onClick={async () => {
                await setMore(true);
                scrollTo('#morediv');
                setMoreDiv(false);
                }}>
                    <img src={Arrow} alt="arrow" style={{width: '3vw', cursor: 'pointer', marginTop: '1%'}}/>
                </div>
            <p style={{fontFamily: 'G Book', fontSize: '2.5vw', marginBottom: '-.5%', color: '#c4132a'}}>Personal & Public Safety</p>
            <p style={{fontFamily: 'G Bold', fontSize: '3vw', marginBottom: '-.3', color: '#c4132a'}}>Anytime, anywhere</p>
            <Link to='/contact'><PressButton>Shcedule a demo</PressButton></Link>
        </div>
        : null }
        

        { more ? 
        // style={{height: '3vw', marginBottom: '5%'}}
        <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', width: '85vw'}}>
                <ThreeLined 
                image={Globes}
                title="Startup SayVU shows the Weizmann Institute indoor positioning (Telecom) (HE)"
                date="April 22, 2019"
                link='https://www.telecomnews.co.il/%D7%94%D7%A1%D7%98%D7%90%D7%A8%D7%98%D7%90%D7%A4-SayVU-%D7%9E%D7%A6%D7%99%D7%92-%D7%91%D7%9E%D7%9B%D7%95%D7%9F-%D7%95%D7%99%D7%A6%D7%9E%D7%9F-%D7%9C%D7%9E%D7%93%D7%A2-%D7%90%D7%99%D7%9B%D7%95%D7%9F-%D7%91%D7%AA%D7%95%D7%9A-%D7%9E%D7%91%D7%A0%D7%99%D7%9D-%D7%9C%D7%97%D7%99%D7%9C%D7%95%D7%A5-%D7%91%D7%9E%D7%A6%D7%91%D7%99-%D7%97%D7%99%D7%A8%D7%95%D7%9D.html'
                />
                <PressCard 
                image={SuccRed}
                title="Trying to fight kite terror (Globes) (HE)"
                date="August 10, 2018"
                link="https://13tv.co.il/item/news/starting-the-day/season-01/articles/gsj6h-2053524/?utm_source=share&utm_campaign=reshet_d&utm_medium=C"
                />
            </div>
        </div>

        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '5%', marginBottom: '10%'}}>
            <p style={{fontFamily: 'G Book', fontSize: '2.5vw', marginBottom: '-.5%', color: '#c4132a'}}>Personal & Public Safety</p>
            <p style={{fontFamily: 'G Bold', fontSize: '3vw', marginBottom: '-.3', color: '#c4132a'}}>Anytime, anywhere</p>
            <Link to='/contact'><PressButton>Shcedule a demo</PressButton></Link>        
        </div>
        </>
    : null }

            <div>
                <img src={RedArribaDerecha} alt="red Arriba" 
                style={{position: 'absolute', width: '27%', top: '15%', 
                right: '0', zIndex: '-1', transform: 'scaleY(-1)'}}/>
            </div>
            <div>
                <img src={RedAbajoIzquierda} alt="red abajo izq" 
                style={{position: 'absolute', width: '23%', top: '50%', 
                left: '0', zIndex: '-1'}}/>
            </div> 

        </Layout>
    ) : (
        <Layout>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '-5%', marginTop: '7%'}}>
            <h1 style={{fontFamily: 'G Medium', fontSize: '7.5vw', color: 'black'}}>In the <span style={{color: '#c4132a'}}>Press</span></h1>
        </div>
        <MobileDiv>
                <PressCard 
                image={Network13}
                title="Get to know the apps that can save lives (Network 13) (HE)"
                date="September 3, 2020"
                link="https://13tv.co.il/item/news/starting-the-day/season-01/articles/gsj6h-2053524/?utm_source=share&utm_campaign=reshet_d&utm_medium=C"
                />
                <PressCard
                image={SuccRed}
                title="Municipality of Curicó implemented 'Panic Button' (Radiortl) (ES)"
                date="January 10, 2020"
                link="https://radiortl.cl/2020/01/10/mas-seguridad-para-usuarios-y-funcionarios-municipalidad-de-curico-implemento-boton-de-panico-en-centros-de-salud-de-la-comuna/?__cf_chl_jschl_tk__=a29d6368435a4e9a5ef1881f76247556390b7f8d-1616556186-0-AYxKYKjh-aU_3u7SVM6dQA50K3g7lxQKq-kUu3B1jkG3ypar3F09KqWe5p-ZXIrc7K1wW-RNoozhkhJLRXUWJ1vLectrM9jMzNdiLgLAsKGMjQO6_Nx0A-ttoegxR83gGpz1KesrlrciZCP4UkoEi9whdqwCOg6di2NCHm4ozyIj5u_mKlpoySo3r0q6Kd45Q-37KLOGHqmdIRkoTHQzSssvmDsh9A2jqMQaoR88OHpMzhUzE-MYOoyCRdWfB5ynpbtEHxkFZDNjvOxgUdbWHCF6RYBF5O1W79QPP7nHFuIiObEq0dOT_oul3Aff2CXdHhc5J9SjAzZEtgsnv3HAPGGOFqtiNQOfBGeDRyMgvepMmHtt0ial6ekqYLDMVblbMsYdGvKASxPG6DdlEO0Z99RLZ7yYTmAJHqeK0xzl815eePJ8MbFpM4mEonoeXj614fLGEWKlA6peuD8qDR8PYEBsFNYfb7xgoESOJ8tqfXTfy6-T2OHMvDpFWmxDU9B8BA"
                />
                <PressCard
                image={Vivimos}
                title="Woman obtains arrest using panic button (Vivimos La Noticia) (ES)"
                date="September 24, 2019"
                link="https://vivimoslanoticia.cl/noticias/policial/2019/09/24/mujer-logro-detencion-violencia-ex-pareja-usando-boton-panico/"
                />
                <PressCard
                image={JewishB}
                title="Israeli Startup’s Revolutionary Tech (Jewish Business News) (EN)"
                date="July 15, 2019"
                link="https://jewishbusinessnews.com/2019/07/15/israeli-startups-revolutionary-tech-sends-emergency-rescue-signal-even-when-cellular-system-unavailable/"
                />

                <img src={ImagePress} alt="red Arriba" 
                style={{position: 'absolute', width: '90%', top: '15%', 
                left: '-45%', zIndex: '-1'}}/>
            
                <img src={PressMobile} alt="red Arriba" 
                style={{position: 'absolute', width: '45%', top: '130%', 
                right: '0', zIndex: '-1', }}/>
        </MobileDiv>

        <Pagination>
            <div>
                <Link to='/in-the-press' style={{color: 'black'}}>1</Link>
                <Link to="/in-the-press-2" style={{color: 'black'}}>2</Link >
                <Link to="/in-the-press-3" style={{color: 'black'}}>3</Link>
            </div>
        </Pagination>
        </Layout>
    )
}



export default InthePress
