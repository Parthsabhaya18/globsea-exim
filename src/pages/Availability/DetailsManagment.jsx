
'use client'
import './DetailsManagment.css';
import OurLocationAvailability from "./components/OurLocationAvailability.jsx";
import OurServices from "./components/OurServices.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
const Availability = () =>{

    return(
        <>
           <OurLocationAvailability/>
           <AboutUs/>
           <OurServices/>
           <ContactUs/>
        </>
    )
}
export default Availability;