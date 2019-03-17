import * as React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { Post } from "../types/Post";

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
    width: calc(100% - 56px);

    .item-header {
      margin-bottom: 4px;

      .user-name {
        font-weight: 600;
        padding-right: 12px;
      }

      a {
        color: ${(props: WrapperProps) =>
          props.color === "white" ? "#fff" : "#bbb"};

        time {
          font-size: 14px;
        }

        .media {
          font-size: 14px;

          &::before {
            content: "·";
            padding: 0 4px;
          }
        }
      }
    }
  }
`;

const PostContent: React.FC<{
  post: Post;
  color?: Colors;
  className?: string;
}> = props => {
  const { post, color = "default", className } = props;

  return (
    <Wrapper color={color} className={className}>
      <img className="user-icon" src={post.userIcon} />
      <div className="item-content">
        <div className="item-header">
          <span className="user-name">{post.userName}</span>
          <a href={post.sourceUrl} target="_blank">
            <time>{dayjs(post.postedAt).format("YYYY/MM/DD HH:mm")}</time>
            <span className="media">from {post.media}</span>
          </a>
        </div>
        <div className="text">{post.text}</div>
      </div>
    </Wrapper>
  );
};

export default PostContent;
