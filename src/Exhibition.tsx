import * as React from "react";
import { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import PostText from "./components/PostText";
import PostImage from "./components/PostImage";
import api from "./Api";
import { Post } from "./types/Post";
import Loading from "./components/Loading";

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

const Exhibition: React.FC<RouteComponentProps> = props => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api
      .listPosts()
      .then(posts => {
        setPosts(
          posts.filter(post => {
            if (
              ["png", "jpg", "mp4", "text"].includes(post.type.toLowerCase())
            ) {
              return true;
            }
          })
        );
      })
      .catch(err => {
        if (err.status === 401) {
          props.history.push("/auth");
          localStorage.removeItem("slackAccessToken");
        }
      });
  }, []);

  return (
    <>
      <Loading isShowing={!posts.length} />

      <Wrapper>
        <h1>もりもりやまのヒストリー</h1>
        <div className="paaaaage">
          {posts.map(post => {
            if (post.type === "text") {
              return <PostText key={post.postId} post={post} />;
            } else if (post.type === "png" || post.type === "jpg") {
              return <PostImage key={post.postId} post={post} />;
            }
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default withRouter(Exhibition);
