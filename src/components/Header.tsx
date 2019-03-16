import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 9999;

  .logo {
    font-size: 32px;
    margin-left: 40px;
    font-weight: 700;
    color: #222;
  }
`;

const Header: React.FC = props => {
  return (
    <Wrapper>
      <div className="logo">HISTORY</div>
    </Wrapper>
  );
};

export default Header;
