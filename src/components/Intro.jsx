import React from 'react'
import Image from '../Assest/Driving.jpg'
import '../style/Intro.css'
const Intro = () => {
    return (
        <>
            <div className="landing">
                <div className="content">
                    <h1>Uber</h1>
                    <h2> RideNow Your Fast & Reliable Taxi Service</h2>
                    <h3>Get a Ride in Minutes, Anytime, Anywhere!</h3>
                    <p>Need a ride? With RideNow, you can book a taxi in just a few taps. Whether it’s a quick city trip, an airport transfer, or a late-night ride home, we’ve got you covered.</p>
                </div>
                <img src={Image} alt="Taxi" />
            </div>
        </>
  )
}

export default Intro