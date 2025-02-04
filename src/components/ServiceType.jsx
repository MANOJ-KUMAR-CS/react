import React from 'react';
import '../style/Service.css'
const ServiceType = ({ image, text, btn }) => {
    const handleOnclick = () => {
        alert(`You clicked ${text} `)
    }
    return (
        <div className="s">
            <img src={image} alt="services" />
            <h3>{text}</h3>
            <button onClick={handleOnclick}>{btn}</button>
        </div>
    );
};

export default ServiceType;
