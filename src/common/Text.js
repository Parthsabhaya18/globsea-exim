// TypographyText.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const TypographyText = ({
  children,
  variant = 'body1',
  color = 'var(--color-text)',
  fontWeight = 'normal',
  sx,
}) => {
  return (
    <Box sx={{ position: 'relative', textAlign: 'center', display: 'inline-block', mb: 4 }}>
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: '25%',
          left: '49%',
          transform: 'translate(-50%, -50%)',
          fontSize: '3.8rem',
          fontWeight: 'bold',
          opacity: 0.05,
          whiteSpace: 'nowrap',
          zIndex: 0,
          userSelect: 'none',
        }}
      >
        {children}
      </Typography>
    <Typography
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      sx={{...sx,position:'relative',zIndex:1}}
    >
      {children}
      <Box sx={ {width:'50px',height:'3px',position:'absolute',left:'0',right:'0',background:'var(--color-primary)',margin: '8px auto 0',}}></Box>
    </Typography>
    </Box>
  );
};

export default TypographyText;
