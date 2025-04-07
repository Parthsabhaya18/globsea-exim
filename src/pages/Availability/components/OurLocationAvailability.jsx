'use client'
import { Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import TypographyText from "../../../common/Text";
import LocationAndAvailabilty from '../../../utilies/UtilisJson.js'
import '../DetailsManagment.css'
import { useState } from "react";
import { translate } from "@/utilies/translate";
const OurLocationAvailability = () =>{
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
    return(
        <>
            <Box className="main">
                <TypographyText variant="h1" >
                        {translate.OurLocationAvailability}
                </TypographyText>   
               <Box className="card-main">
               {
                    LocationAndAvailabilty.map((item,index)=>{
                       return(
                        <Card key={index} className={`Card-box ${activeIndex === index ? 'active' : ''}`} onClick={() => handleCardClick(index)}
                        >
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