import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./calendar.css"
import { Modal } from 'antd';
import "../../css/typography.css"

function CustomCalendar() {

    const [value, onChange] = useState(new Date());
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
    setIsModalVisible(true);
    };

    const handleOk = () => {
    setIsModalVisible(false);
    };

    const handleCancel = () => {
    setIsModalVisible(false);
    };

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            calendarType="US"
            showNeighboringMonth={false}
            onClickDay={showModal}
            />

            <Modal title="Schedule a Demo" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className="calendar-modal">
                <p style={{fontFamily: 'G Book'}}>We'll contact you to schedule a demo near the chosen date:</p>
                <p style={{fontFamily: 'G Book'}}>{value.toString()}</p>
                <form method="post" action="https://formspree.io/f/mdoyakdq" style={{display: 'flex', flexDirection: 'column'}}>
                    <label className='demo-label'>Name</label>
                    <input type="text" name="Name" className='demo-input'/>
                    <label className='demo-label'>Email</label>
                    <input type="email" name="_replyto" className='demo-input'/>
                    <input type="hidden" name='Demo date' value={`${value.toString()}`}/>
                    <input type="submit" value="Schedule" className='demo-schedule-btn' onClick={() => {
                        setIsModalVisible(false);
                    }}/>
                </form>
            </Modal>
        </div>
    );
}

export default CustomCalendar