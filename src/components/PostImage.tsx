import * as React from "react";
import styled from "styled-components";
import PostContent from "./PostContent";

const Wrapper = styled.div`
  position: relative;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-width: 60%;
  height: auto;

  * {
    transition: all 0.2s ease-out;
  }

  > .post-image {
    max-height: 100%;
    max-width: 100%;
  }

  > .content-layer {
    padding: 24px;
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
    .content-layer {
      background-color: rgba(0, 0, 0, 0.5);

      .post-content {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

const PostImage: React.FC = props => {
  return (
    <Wrapper>
      <img className="post-image" src={require("../assets/image.jpg")} />
      <div className="content-layer">
        <PostContent color="white" className="post-content" />
      </div>
    </Wrapper>
  );
};

export default PostImage;
