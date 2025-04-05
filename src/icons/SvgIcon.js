import React from 'react';

const SvgIcon = ({ id, ...props}) => (
    <svg
      {...props}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );

export default SvgIcon;

