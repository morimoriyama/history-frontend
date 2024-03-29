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
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 20px;
    color: #222;
    font-weight: 600;
  }

  > .paaaaage {
    height: calc(100% - 68px);
    display: flex;
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
          localStorage.removeItem("teamName");
        }
      });
  }, []);

  const getAreas = () => [
    { id: 1, h: 2, w: 5, type: "img" },
    { id: 2, h: 1, w: 2, type: "text" },
    { id: 3, h: 1, w: 2, type: "text" },
    { id: 4, h: 2, w: 3, type: "img" },
    { id: 5, h: 1, w: 3, type: "text" },
    { id: 6, h: 3, w: 3, type: "img" },
    { id: 7, h: 1, w: 3, type: "text" },
    { id: 8, h: 1, w: 3, type: "text" },
    { id: 9, h: 2, w: 3, type: "img" },
    { id: 10, h: 4, w: 2, type: "img" },
    { id: 11, h: 2, w: 2, type: "img" },
    { id: 12, h: 2, w: 2, type: "text" },
    { id: 13, h: 1, w: 4, type: "img" },
    { id: 14, h: 1, w: 4, type: "text" },
    { id: 15, h: 2, w: 3, type: "img" },
    { id: 16, h: 2, w: 3, type: "text" }
  ];
  const areasArr: ReturnType<typeof getAreas>[] = Array(
    Math.floor(posts.length / 16)
  ).fill(getAreas());

  const _posts = ([] as Post[]).concat(posts);

  // textを含む投稿を抽出する
  const textPosts = _posts
    .filter((_post: Post) => {
      return _post.type.toLowerCase() === "text";
    })
    .sort((_post1, _post2) => {
      if ((_post1.text || "").length < (_post2.text || "").length) return 1;
      if ((_post1.text || "").length > (_post2.text || "").length) return -1;
      return 0;
    })
    .filter((_post: Post, index: number) => {
      return index < areasArr.length * 8;
    });

  // text以外のimg投稿を抽出する
  const imgPosts = _posts
    .filter((_post: Post) => {
      return ["png", "jpg", "mp4"].includes(_post.type.toLowerCase());
    })
    .filter((_post: Post, index: number) => {
      return index < areasArr.length * 8;
    });

  const areaNodes = areasArr.map(areas => {
    return areas.map(area => {
      if (area.type === "text") {
        const extent = area.h * area.w;
        if (extent > 3) {
          // 面積が大きいものは文字列が多い方を利用する
          const _textPost = textPosts.splice(0, 1)[0];
          return { ...area, ..._textPost };
        } else if (extent < 3) {
          // 面積が小さいものは文字列が少な方を利用する
          return { ...area, ...textPosts.splice(textPosts.length - 1, 1)[0] };
        } else {
          // それ以外のものは配列の真ん中を利用する
          return {
            ...area,
            ...textPosts.splice(Math.floor((textPosts.length - 1) / 2), 1)[0]
          };
        }
      } else {
        return { ...area, ...imgPosts.splice(0, 1)[0] };
      }
    });
  });

  const teamName = localStorage.getItem("teamName");

  return (
    <>
      <Loading isShowing={!posts.length} />

      <Wrapper>
        <h1>{teamName}'s HISTORY</h1>
        <div className="paaaaage">
          {areaNodes.map((posts, i) => {
            return (
              <Layout
                key={i}
                paddingLeft={i === 0}
                paddingRight={i === areaNodes.length - 1}
              >
                <Padding key={1} gridArea="p1" />
                <Padding key={2} gridArea="p2" />

                {posts.map((post, i) => {
                  if (post.type === "text") {
                    return (
                      <Area key={i + 1} gridArea={`g${i + 1}`}>
                        <PostText key={post.postId} post={post} />
                      </Area>
                    );
                  } else if (post.type === "png" || post.type === "jpg") {
                    return (
                      <Area key={i + 1} gridArea={`g${i + 1}`}>
                        <PostImage key={post.postId} post={post} />
                      </Area>
                    );
                  }
                })}
              </Layout>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default withRouter(Exhibition);
