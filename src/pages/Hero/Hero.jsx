'use client'
import { Box } from '@mui/material';
import '../Hero/Hero.css'
import heroImage from '../../../public/assests/hero-img.png'
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';  
import { translate } from '../../utilies/translate';
const Hero = () =>{
    return(
        <Box sx={{background:'var(--color-secondary)',backgroundImage: `url('/assests/hero-bg.png')`, backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',}}>
        <Navbar/>
        <Box className="hero-main">
            <Box className="hero-text-container">
                <h1>{translate.GLOBSEA_EXIM}</h1>
                <p>{translate.DESCRIPTION} <br /> <br /> {translate.DESCRIPTION2}</p>
            </Box>
            
            <Box className="hero-image-container">
                    <Image
                        src={heroImage} 
                        alt="Hero Image"
                        priority 
                        className="hero-image"
                    />
                </Box>
           
        </Box>
        </Box>
    )
}
export default Hero;