'use client';
import Hero from '../pages/Hero/Hero.jsx'
import Availability from '../pages/Availability/DetailsManagment.jsx'
import Footer from '../pages/Footer/Footer.jsx'
import { CssBaseline, ThemeProvider } from '@mui/material';
import Layout from '../pages/Layout/Layout.jsx'
import theme from '../styles/theme.js'
export default function Home() {
  return (
    // <>
    // {/* <Navbar/>    */}
    //   <Hero/>
    //   <Availability/>
    // </>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout >
        <Hero/>
        <Availability/>
      </Layout>
    </ThemeProvider>
     
  );
}
