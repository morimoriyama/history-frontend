import * as React from "react";
import styled from "styled-components";
import PostContent from "./PostContent";
import { Post } from "../types/Post";

const Wrapper = styled.div`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  padding: 24px;
  border-radius: 4px;
  transition: all 0.2s ease-out;
  width: 100%;
  height: 100%;
  background-color: #fff;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.01) translateY(-8px);
  }
`;

const PostText: React.FC<{
  post: Post;
}> = props => {
  return (
    <Wrapper>
      <PostContent post={props.post} />
    </Wrapper>
  );
};

export default PostText;
