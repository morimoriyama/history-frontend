import * as React from "react";
import { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import PostText from "./components/PostText";
import PostImage from "./components/PostImage";
import api from "./Api";
import { Post } from "./types/Post";
import Loading from "./components/Loading";
import Layout, { Area, Padding } from "./components/GridLayout";

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
  }
`;

const Exhibition: React.FC<RouteComponentProps> = props => {
  const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   api
  //     .listPosts()
  //     .then(posts => {
  //       setPosts(
  //         posts.filter(post => {
  //           if (
  //             ["png", "jpg", "mp4", "text"].includes(post.type.toLowerCase())
  //           ) {
  //             return true;
  //           }
  //         })
  //       );
  //     })
  //     .catch(err => {
  //       if (err.status === 401) {
  //         props.history.push("/auth");
  //         localStorage.removeItem("slackAccessToken");
  //       }
  //     });
  // }, []);

  return (
    <>
      {/* <Loading isShowing={!posts.length} /> */}

      <Wrapper>
        <h1>もりもりやまのヒストリー</h1>
        <div className="paaaaage">
          <Layout>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6].map((n, i) => {
              return <Area key={i + 1} gridArea={`g${i + 1}`} />;
            })}
            {[1, 2].map((n, i) => {
              return <Padding key={i + 1} gridArea={`p${i + 1}`} />;
            })}
          </Layout>

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
