
'use client'
import './DetailsManagment.css';
import OurLocationAvailability from "./components/OurLocationAvailability.jsx";
import OurServices from "./components/OurServices.jsx";
import AboutUs from "./components/AboutUs.jsx";
const Availability = () =>{

    return(
        <>
           <OurLocationAvailability/>
           <AboutUs/>
           <OurServices/>
        </>
    )
}
export default Availability;