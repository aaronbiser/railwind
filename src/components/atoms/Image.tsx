import React from 'react';

export interface ImageProps {
  src: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ src, className = '' }) => {
  return (
    <img src={src} className={className} />
  )
};
