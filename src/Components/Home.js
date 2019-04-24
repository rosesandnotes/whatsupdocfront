import React from 'react';
import pharmacydir from '../img/pharmacydir.jpg';
import generalhealth from '../img/generalhealth.jpg';
import physiciandir from '../img/physiciandir.jpg';

const Home = () => {
    return <div className="container d-flex h-100 align-items-center mt-5">
        <div className="mx-auto text-center mt-5 pt-5">
            <h1 className="mx-auto my-0" id="headertext">What's Up, Doc?</h1>
            <h2 className="mx-auto mt-2 mb-5 text-secondary" id="subheadertext">Medical information you can trust.</h2>

        <div id="homeMenu">
            <a className="homeOptions" href="#"><img src={pharmacydir} alt="pharmacy-dictionary" /> </a> 
            <a className="homeOptions" href=""><img src={generalhealth} alt="general-health" /></a>
            <a className="homeOptions" href=""><img src={physiciandir} alt="physician-directory" /></a>
        </div>
        </div>
    </div> 
}

export {Home};

        