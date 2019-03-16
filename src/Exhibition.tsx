import * as React from "react";
import styled from "styled-components";
import PostText from "./components/PostText";
import PostImage from "./components/PostImage";

const Wrapper = styled.div`
  padding: 100px 0;
  height: 100%;

  overflow: auto;
  -webkit-overflow-scrolling: touch;

  h1 {
    margin-left: 10vw;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 20px;
    color: #222;
    font-weight: 600;
  }

  > .paaaaage {
    height: calc(100% - 60px);
    display: flex;

    > * {
      &:first-child {
        margin-left: 10vw;
      }

      /* &:last-child {
        margin-right: 10vw;
      } */
    }
  }
`;

const Exhibition: React.FC = props => {
  return (
    <Wrapper>
      <h1>もりもりやまのヒストリー</h1>
      <div className="paaaaage">
        <PostText />
        <PostImage />
        <PostText />
        <PostText />
        <PostImage />
        <PostText />
        <PostText />
        <PostImage />
        <PostText />
        <PostText />
        <PostText />
      </div>
    </Wrapper>
  );
};

export default Exhibition;
