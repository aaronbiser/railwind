import React, { ReactElement } from 'react';
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
  rwStyle
}: ImageProps): ReactElement => {
  return (
    <img
      src={src}
      alt={alt}
      ref={forwardRef}
      id={id}
      data-testId={dataTestId}
      style={style}
      onClick={onClick}
      className={getAllClassNames(rwStyle)}
    />
  )
};
