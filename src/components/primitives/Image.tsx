import React from 'react';
import { getAllClassNames } from '../../lib/helpers';
import { ImageProps } from '../../types';

export const Image = ({
  forwardRef,
  id,
  dataTestId,
  style,
  onClick,
  src,
  alt,
  ...props
}: ImageProps) => {
  return (
    <img
      ref={forwardRef}
      id={id}
      data-testId={dataTestId}
      style={style}
      onClick={onClick}
      src={src} alt={alt} className={getAllClassNames(props)}
    />
  )
};
