import * as React from "react";
import styled from "styled-components";

type Colors = "default" | "white";

type WrapperProps = {
  color: Colors;
};
const Wrapper = styled.div`
  display: flex;
  color: ${(props: WrapperProps) =>
    props.color === "white" ? "#fff" : "inherit"};

  .user-icon {
    height: 56px;
    width: 56px;
    border-radius: 999px;
    margin-right: 16px;
  }

  .item-content {
    .item-header {
      margin-bottom: 4px;

      .user-name {
        font-weight: 600;
        padding-right: 12px;
      }

      time {
        font-size: 14px;
        color: ${(props: WrapperProps) =>
          props.color === "white" ? "#fff" : "#bbb"};
      }

      .media {
        font-size: 14px;
        color: ${(props: WrapperProps) =>
          props.color === "white" ? "#fff" : "#bbb"};

        &::before {
          content: "·";
          padding: 0 4px;
        }
      }
    }
  }
`;

const PostContent: React.FC<{
  color?: Colors;
  className?: string;
}> = props => {
  const { color = "default", className } = props;

  return (
    <Wrapper color={color} className={className}>
      <img className="user-icon" src={require("../assets/usericon.jpg")} />
      <div className="item-content">
        <div className="item-header">
          <span className="user-name">moriyama-k</span>
          <a href="#">
            <time>2019/02/19 13:01</time>
            <span className="media">from Slack</span>
          </a>
        </div>
        <div className="text">
          いやコンバージョンするかもしれないからコンテンツ周りは話したほうがいいのでは？？
        </div>
      </div>
    </Wrapper>
  );
};

export default PostContent;
