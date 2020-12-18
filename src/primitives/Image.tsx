import React, { ReactElement } from 'react';
import { getAllClassNames } from '../lib/helpers';
import { ImageProps } from '../types';

export const Image = ({ rwStyle, ...props }: ImageProps): ReactElement => {
  return (
    <img
      {...props}
      ref={props.forwardRef}
      data-testid={props.dataTestId}
      className={getAllClassNames(rwStyle)}
    />
  )
};
