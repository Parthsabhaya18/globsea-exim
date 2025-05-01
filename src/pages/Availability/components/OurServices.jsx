'use client';
import TypographyText from "@/common/Text";
import { OurServicesJson } from "@/utilies/UtilisJson";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const OurServices = () =>{
    
    return(
        <Box className='main' id='ourServices'>
            <TypographyText>
            OUR SERVICES
            </TypographyText>
            <Box className="services-container">
                {
                    OurServicesJson.map((item,index)=>{
                        return(
                            <Card key={index} className={`service-card `}>
                                <Box className="service-image-wrapper">
                                    <Image
                                    src={item.image}
                                    alt="Could' not load Image"
                                    priority
                                    className="service-image"
                                    />
                                </Box>
                                    <CardContent className="service-text">
                                    <Typography className="service-title"  variant="h1"  sx={{color:'var(--color-text)',fontWeight:"bold",fontSize:'var(--font-medium)', }}>
                                        {item.name}
                                    </Typography>
                                    <Typography  className="service-desc" variant="p" sx={{color:'var(--color-default)',fontSize:'16.5px',}}>
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </Box>
        </Box>
    )
}
export default OurServices;