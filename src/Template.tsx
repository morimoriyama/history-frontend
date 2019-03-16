import * as React from "react";
import styled from "styled-components";
import Header from "./components/Header";

const Wrapper = styled.div`
  height: 100vh;
`;

const Template: React.FC<{
  render(): React.ReactNode;
}> = props => {
  return (
    <Wrapper>
      <Header />
      {props.render()}
    </Wrapper>
  );
};

export default Template;
