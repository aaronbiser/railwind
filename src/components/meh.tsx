import React from 'react';
import styled from 'styled-components';

const StyledMyComponent = styled.div<{ color?: string }>`
  color: ${p => p.color || 'pink'};
`;

interface MehProps {
  text: string;
  color?: string;
}

const Meh: React.FC<MehProps> = ({ text, color }) => (
  <StyledMyComponent color={color}>{text}</StyledMyComponent>
);

export { MehProps, Meh };