import { Box, Card, CardContent, Typography } from "@mui/material";
import TypographyText from "../../common/Text.js";
import LocationAndAvailabilty from '../../utilies/UtilisJson.js'
import './DetailsManagment.css';
import OurLocationAvailability from "./components/OurLocationAvailability.jsx";
import AboutUs from "./components/AboutUs.jsx";
const Availability = () =>{

    return(
        <>
           <OurLocationAvailability/>
           <AboutUs/>
        </>
    )
}
export default Availability;