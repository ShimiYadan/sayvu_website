import React from 'react'
import styled from "styled-components"
import useWindowSize from "../hooks/useWindowSize"
import "../css/typography.css"
import Layout from "../components/layout"

const PrivacyDiv = styled.div`
    margin: 2vw 5vw 0 5vw;
    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'G Medium';
        color: black;
        font-size: 3vw;
    }
    p {
        font-size: 1vw;
    }
    h2 {
        font-size: 1.5vw;
        color: black;
        font-family: 'G Medium'
    }

    @media only screen and (max-width: 480px) {
        margin: 10vw 5vw 10vw 5vw;
        display: flex;
        flex-direction: column;
    h1 {
        font-family: 'G Medium';
        color: black;
        font-size: 8vw;
    }
    p {
        font-size: 5vw;
    }
    h2 {
        font-size: 7vw;
        color: black;
        font-family: 'G Medium'
    }
    }
`

function Contact() {
    const windowSize = useWindowSize();

return (windowSize > 480) ?  (
        <Layout>
        <div style={{marginBottom: '5vw'}}>
            <PrivacyDiv>
                <h1>Privacy Policy</h1>
                <p>We collect the following data for the purpose of improving and providing services to you. Your data is not used for any other purposes or shared with third parties.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>What personal data we collect</h2>
                <p>When you submit a form on our website, we receive, collect and store certain personally identifiable information that can be used to contact or identify you, this may include: your first and last name, phone number, email, time and hour for scheduling and any information you entered under the “message” field. In addition, we collect the IP address used to connect your computer to the Internet.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>Where do we store the data?</h2>
                <p>Our company is hosted on the Google Cloud platform. Google Cloud provides us with the online platform that allows us to present our services to you. Your data may be stored through Google Cloud’s data storage, databases and the general Google Cloud’s applications. They store your data on secure servers behind a firewall.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>Statistics</h2>
                <p>The website uses a minimal build of Google Analytics, a service which transmits website traffic data to Google servers in the United States and allows us to notice trends to improve the user experience on our website. This minimal build processes personal data such as: the unique User ID set by Google Analytics, the date and time, the title of the page being viewed, the URL of the page being viewed, the URL of the page that was viewed prior to the current page, the screen resolution, the time in local timezone, the files that were clicked on and downloaded, the links clicked on to an outside domain, the type of device, and the country, region, and city.</p>
                <p>You may opt out of this tracking at any time by activating the “Do Not Track” setting in your browser.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>Embedded content or links to other websites</h2>
                <p>Articles on the Website may include embedded content (e.g. videos, charts, etc.). Embedded content from other websites behaves in the exact same way as if the visitor had visited the other website. The Website contains links to other websites that are not operated by us. If you click on a third party link, You will be directed to that third party's site. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>Changes to this Privacy Policy</h2>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>Contact Us</h2>
                <p>If you would like to: access, correct, amend or delete any personal information we have about you, you are invited to contact us at contact@sayvu.com or call us to: +972-3-9477177.</p>
            </PrivacyDiv>
        </div>    
        </Layout>
    ) : (
        <Layout>
            <div style={{marginBottom: '5vw'}}>
            <PrivacyDiv>
                <h1>Privacy Policy</h1>
                <p>We collect the following data for the purpose of improving and providing services to you. Your data is not used for any other purposes or shared with third parties.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>What personal data we collect</h2>
                <p>When you submit a form on our website, we receive, collect and store certain personally identifiable information that can be used to contact or identify you, this may include: your first and last name, phone number, email, time and hour for scheduling and any information you entered under the “message” field. In addition, we collect the IP address used to connect your computer to the Internet.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>Where do we store the data?</h2>
                <p>Our company is hosted on the Google Cloud platform. Google Cloud provides us with the online platform that allows us to present our services to you. Your data may be stored through Google Cloud’s data storage, databases and the general Google Cloud’s applications. They store your data on secure servers behind a firewall.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>Statistics</h2>
                <p>The website uses a minimal build of Google Analytics, a service which transmits website traffic data to Google servers in the United States and allows us to notice trends to improve the user experience on our website. This minimal build processes personal data such as: the unique User ID set by Google Analytics, the date and time, the title of the page being viewed, the URL of the page being viewed, the URL of the page that was viewed prior to the current page, the screen resolution, the time in local timezone, the files that were clicked on and downloaded, the links clicked on to an outside domain, the type of device, and the country, region, and city.</p>
                <p>You may opt out of this tracking at any time by activating the “Do Not Track” setting in your browser.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>Embedded content or links to other websites</h2>
                <p>Articles on the Website may include embedded content (e.g. videos, charts, etc.). Embedded content from other websites behaves in the exact same way as if the visitor had visited the other website. The Website contains links to other websites that are not operated by us. If you click on a third party link, You will be directed to that third party's site. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>Changes to this Privacy Policy</h2>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
            </PrivacyDiv>
            <PrivacyDiv>
                <h2>Contact Us</h2>
                <p>If you would like to: access, correct, amend or delete any personal information we have about you, you are invited to contact us at contact@sayvu.com or call us to: +972-3-9477177.</p>
            </PrivacyDiv>
        </div>  
        </Layout>
    )
}

export default Contact
