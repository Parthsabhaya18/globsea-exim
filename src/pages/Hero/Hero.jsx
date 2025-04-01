import { Box } from '@mui/material';
import '../Hero/Hero.css'
import heroImage from '../../../public/assests/hero-img.png'
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';  
const Hero = () =>{
    return(
        <Box sx={{backgroundImage: `url('/assests/hero-bg.png')`, backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
        <Navbar/>
        <Box className="hero-main">
            <Box className="hero-text-container">
                <h1>GLOBSEA-EXIM Export</h1>
                <p>Welcome to JV & Sons Export, your trusted partner for all your export needs. With extensive experience and a commitment to quality, we offer unmatched solutions for global businesses. Benefit from our vast network, strategic partnerships, and comprehensive services, making us your top choice for international exports. Explore our range of export services and let us help you achieve your export goals.</p>
            </Box>
            
            <Image
                src={heroImage} 
                alt="Could Not a load image"
               
                style={{ height:375,
                    width:500, borderRadius:8,objectFit:'contain'}}
            />
           
        </Box>
        </Box>
    )
}
export default Hero;