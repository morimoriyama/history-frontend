import * as React from "react";
import styled from "styled-components";
import PostText from "./components/PostText";
import PostImage from "./components/PostImage";

const Wrapper = styled.div`
  width: 768px;
  margin: auto;
`;

const Exhibition: React.FC = props => {
  return (
    <Wrapper>
      <PostText />
      <PostImage />
      <PostText />
      <PostText />
      <PostText />
    </Wrapper>
  );
};

export default Exhibition;
