'use client'
import { Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import TypographyText from "../../../common/Text";
import LocationAndAvailabilty from '../../../utilies/UtilisJson.js'
import '../DetailsManagment.css'
import { useState } from "react";
const OurLocationAvailability = () =>{
    const [clickedCardIndex, setClickedCardIndex] = useState(null);
    const isMobile = useMediaQuery('(max-width:768px)');
    const handleCardClick = (index) => {
        if (isMobile) {
            setClickedCardIndex(clickedCardIndex === index ? null : index); // toggle
        }
    };
    return(
        <>
            <Box className="location-main">
                <TypographyText variant="h1" sx={{fontSize:'32px',fontWeight:'bold', textAlign: 'center'}} >
                        Our Location & Availability
                </TypographyText>   
               <Box className="card-main">
               {
                    LocationAndAvailabilty.map((item,index)=>{
                       return(
                        <Card key={index} className={`Card-box ${isMobile && clickedCardIndex === index ? "clicked" : ""}`}
                        onClick={() => handleCardClick(index)}>
                        <CardContent className="Card-Contained">
                            <Typography className="card-title"  variant="h1"  sx={{color:'var(--color-text)',fontWeight:"600",fontSize:'var(--font-medium)', textAlign: 'center'}}>{item.TITLE}</Typography>
                            <Typography  variant="h3"  sx={{color:'var(--color-brown)',fontWeight:"600",fontSize:'var( --font-lg-small)', textAlign: 'center'}}>{item.DES}</Typography>
                        </CardContent>

                    </Card>
                       )
                    })
                }
               </Box>
            </Box>
        </>
    )
}
export default OurLocationAvailability;