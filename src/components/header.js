import React, {useState} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"
import "../css/typography.css"
import useWindowSize from "../hooks/useWindowSize";


const DesktopHeader = styled.header`
  background: white;
  height: 8.5vw;
  width: 100vw;
  display: flex;
`
const MobileHeader = styled.header`
  background: white;
  height: 13vh;
  width: 100vw;
  display: flex;
  box-shadow: ${({nav}) => (nav ? "0" : "0 0 5px 0 gray")};
`

const MenuIcon = styled.button`
  display: flex; 
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.8rem; 
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  margin-left: 10%;

div {
  width: 2rem; 
  height: 0.25rem;
  background: black; 
  border-radius: 5px; 
  transform-origin: 1px;
  position: relative;

  :first-child {
    transform: ${({nav}) => (nav ? 'rotate(45deg)' : 'rotate(0)')};
    margin-top: -.3vw;
  };

  :nth-child(2){
    opacity: ${({nav}) => (nav ? "0" : "1")};
  };

  :nth-child(3){
    transform: ${({nav}) => (nav ? 'rotate(-45deg)' : 'rotate(0)')};
    margin-top: ${({nav}) => (nav ? "54%" : "0")};
  }
}
`

const MobileMenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(100%)")};
  margin-top: 0;

  ul {
    padding: 0 0 0 5%;
    margin: 0;
  }

  li {
    list-style: none;
    padding-bottom: 10px;
  }

  a {
  text-decoration: none;
  color: black;
  font-family: "G Medium";
  font-size: 4vw;

  :hover {
    color:  #c4132a;
  }
}
`

const MenuLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2%;
  margin-right: -7%;
  margin-left: 2%;

ul {
  display: flex;
  justify-content: space-between;
  width: 50vw;
}

li {
  display: inline;
}

a {
  text-decoration: none;
  color: black;
  font-family: "G Medium";
  font-size: 1.45vw;
  transition: color 300ms;

  :hover {
    color:  #c4132a;
  }

}
`

const MenuButton = styled.button`
  background-color: #c4132a;
  color: white;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 10.5vw;
  font-family: "G Book";
  font-size: 1.45vw;
  border-radius: 100px;
  border: none;
  margin-bottom: 3%;
  margin-top: 5%;
  margin-right: -15%;
`

const Header = () => {

  const windowSize = useWindowSize();
  const [nav, setNav] = useState(false)

  return (windowSize > 480) ? (
  
  <DesktopHeader className="desktop-header">
    <Link to='/'>
    <div className="header-image-div">
      <StaticImage src="../images/LogoSayvU.png" alt='Logo'/>
    </div>
    </Link>
    <MenuLinks>
      <ul className="menu-list">
        <li>
          <Link to="/about-us">ABOUT</Link>
        </li>
        <li>
          <Link to="/features">FEATURES</Link>
        </li>
        <li>
          <Link to="/solution-verticals">SOLUTION VERTICALS</Link>
        </li>
        <li>
          <Link to="/in-the-press">IN THE PRESS</Link>
        </li>
      </ul>
    </MenuLinks>
    <div className="header-button-div">
      <Link to='/contact'><MenuButton>Contact Us</MenuButton></Link>
    </div>
  </DesktopHeader>
) : (
<>
  <MobileHeader className="mobile-header" nav={nav}>
    <div className="mobile-menu-div">
      <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
    </div>
    <Link to='/'>
    <div className="mobile-menu-image-div">
      <StaticImage src="../images/mobile-logo.png" alt='Logo'/>
    </div>
    </Link>
    <div className="mobile-fill-div">
    </div>
  </MobileHeader>
  {nav ? 
  <MobileMenuLinks nav={nav}>
    <ul>
      <li>
        <Link to='/about-us'>ABOUT</Link>
      </li>
      <li>
        <Link to='/features'>FEATURES</Link>
      </li>
      <li>
        <Link to='/solution-verticals'>SOLUTION VERTICALS</Link>
      </li>
      <li>
        <Link to='/in-the-press'>IN THE PRESS</Link>
      </li>
      <li>
        <Link to='/contact'>CONTACT</Link>
      </li>
    </ul>
  </MobileMenuLinks>
  : null}
  
</>
  );
}



export default Header
