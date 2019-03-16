import * as React from "react";
import styled from "styled-components";
import PostContent from "./PostContent";

// type WrapperProps = {};
const Wrapper = styled.div`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  padding: 24px;
  border-radius: 4px;
`;

const PostText: React.FC = props => {
  return (
    <Wrapper>
      <PostContent />
    </Wrapper>
  );
};

export default PostText;
