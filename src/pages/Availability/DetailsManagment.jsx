
'use client'
import './DetailsManagment.css';
import OurLocationAvailability from "./components/OurLocationAvailability.jsx";
import OurServices from "./components/OurServices.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Testimonials from './components/Testimonials.jsx'
import ContactUs from "./components/ContactUs.jsx";
import OurProduct from "./components/OurProduct.jsx";
const Availability = () =>{

    return(
        <>
           <OurLocationAvailability/>
           <OurProduct/>
           <AboutUs/>
           <Testimonials/>
           <OurServices/>
           <ContactUs/>
        </>
    )
}
export default Availability;