import React, {useState} from 'react';
import "./formContact.css"
import "../../css/typography.css"
import 'react-phone-number-input/style.css'
import PhoneInput, {isPossiblePhoneNumber} from 'react-phone-number-input'
import { Link } from "gatsby"

const FormContact = () => {
    const [value, setValue] = useState();
    const [checked, setChecked] = useState(false);

return (
    <>
    <form
        className="form-contact-antd"
        method="post" 
        action="https://formspree.io/f/mdoyakdq"
    >
        <label>
            Name
            <input required type="text" name="Name" className="form-contact-antd-input form-contact-input-input"/>
        </label>
        <label>
            Email
            <input required type="email" name="_replyto" className="form-contact-antd-input form-contact-input-input"/>
        </label>
        <label>
            Phone number
            <PhoneInput
            international
            className="form-contact-antd-input form-contact-input-input phone-input"
            value={value}
            name='Phone number'
            onChange={setValue}
            error={value ? (isPossiblePhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
            />
            {/* <input type="text" name="phone" className="form-contact-antd-input form-contact-input-input"/> */}
        </label>
        <label>
            Message
            <input required type="text" name="Message" className="form-contact-antd-input text-area-form-contact"/>
        </label>
        <div className="custom-checkbox-div">
            <input type="checkbox" onChange={() => setChecked(!checked)} className="custom-checkbox" /><p>By signing up you agree to our <Link to='/privacy-policy'>terms and privacy policy</Link></p>
        </div>
        <input type="text" name="_gotcha" style={{display: 'none'}} />
        <label>
            <button type="submit"  className="form-contact-antd-button" disabled={!checked}>Submit</button>
        </label>
    </form>
    </>
);
};

export default FormContact