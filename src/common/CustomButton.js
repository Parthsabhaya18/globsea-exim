import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({
  title,
  onClick,
  type = 'button',
  variant = 'contained',
  style = {},
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      onClick={onClick}
      sx={{
        padding: '8px 20px',
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
        ...style, 
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
