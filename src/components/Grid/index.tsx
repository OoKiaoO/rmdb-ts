import React from 'react';
// Syles
import { Wrapper, Content  } from './Grid.styles';
// Types
type Props = {
  header: string,
}

const Grid: React.FC<Props> = ({ header, children }) => (  // no need ot specify 'children' in props cause is a type built into React
  <Wrapper >
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
)

export default Grid;
