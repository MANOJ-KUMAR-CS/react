import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'; // Correct import
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import '../style/Nav.css'
const Nav = () => {
    return (
        <BrowserRouter>
            <nav>
                <h2>UBER</h2>
                <ul>
                    <li><Link to="/" className='nav-link'>Home</Link></li>
                    <li><Link to="/about" className='nav-link'>AboutUs</Link></li>
                    <li><Link to="/contact" className='nav-link'>ContactUs</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Nav;
