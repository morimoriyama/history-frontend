import * as React from "react";
import styled from "styled-components";
import PostContent from "./PostContent";
import { Post } from "../types/Post";

const Wrapper = styled.div`
  position: relative;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  &,
  * {
    transition: all 0.2s ease-out;
  }

  > .post-image {
    height: 100%;
  }

  > .content-layer {
    padding: 24px;
    border-radius: 4px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-end;

    > .post-content {
      opacity: 0;
      transform: translateY(-8px);
    }
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);

    .content-layer {
      background-color: rgba(0, 0, 0, 0.5);

      .post-content {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

const PostImage: React.FC<{
  post: Post;
}> = props => {
  const { post } = props;

  return (
    <Wrapper>
      <img className="post-image" src={post.attachedSourceUrls[0]} />
      <div className="content-layer">
        <PostContent post={post} color="white" className="post-content" />
      </div>
    </Wrapper>
  );
};

export default PostImage;
