import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeaderDiv backgroundColor="blue">
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </StyledHeaderDiv>
  );
};

export default Header;

const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
`;
