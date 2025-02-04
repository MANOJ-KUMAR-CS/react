import React from 'react';
import '../style/ContactUs.css';

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted');
    };

    return (
        <div className="container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Your Name</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Your Email</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Your Message</label>
                    <textarea required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
