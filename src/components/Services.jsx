import React from 'react';
import ServiceType from './ServiceType';
import s1 from '../Assest/s1.webp';  // Fixed 'Assest' to 'Assest'
import s2 from '../Assest/s2.jpeg';
import s3 from '../Assest/s3.png';

const Services = () => {
    const text1 = "Book Your Ride";
    const text2 = "Find Available Locations";  // Fixed typo in 'available'
    const text3 = "Your Other Services";

    return (
        <div className="services">
            <ServiceType image={s1} text={text1} btn="Book" />
            <ServiceType image={s2} text={text2} btn="Find" />
            <ServiceType image={s3} text={text3} btn="Services" />
        </div>
    );
};

export default Services;
