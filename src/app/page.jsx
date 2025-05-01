'use client';
import Hero from '../pages/Hero/Hero.jsx'
import Availability from '../pages/Availability/DetailsManagment.jsx'
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '../styles/theme.js'
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Hero/>
        <Availability/>
    </ThemeProvider>
     
  );
}
