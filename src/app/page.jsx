import Navbar from '../pages/Navbar/Navbar.jsx'
import Hero from '../pages/Hero/Hero.jsx'
import { Box } from '@mui/material';
export default function Home() {
  return (
    <Box sx={{background:'var(--color-secondary)',}}>
    {/* <Navbar/>    */}
    <Hero/>
    </Box>
     
  );
}
