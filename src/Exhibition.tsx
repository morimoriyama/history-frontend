import * as React from "react";
import styled from "styled-components";
import RGL, { WidthProvider } from "react-grid-layout";
import PostText from "./components/PostText";
import PostImage from "./components/PostImage";

const ReactGridLayout = WidthProvider(RGL);

const Wrapper = styled.div`
  width: 768px;
  margin: auto;
`;

const Exhibition: React.FC = props => {
  const generateLayout = () => {
    return [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ].map((item, i) => {
      const y = Math.ceil(Math.random() * 2) + 1;
      console.log({
        x: i % 6,
        y: Math.floor(i / 6) * y,
        w: y,
        h: 1,
        i: i.toString()
      });
      return {
        x: i % 6,
        y: Math.floor(i / 6) * y,
        w: y,
        h: 1,
        i: i.toString()
      };
    });
  };
  const layout = generateLayout();
  // [
  //   { i: "1", x: 3, y: 0, w: 3, h: 1 },
  //   { i: "2", x: 0, y: 0, w: 3, h: 2 }
  // ];
  return (
    <Wrapper>
      <ReactGridLayout
        className="layout"
        cols={6}
        width={1200}
        layout={layout}
        isDraggable={false}
      >
        {layout.map((i, k) => (
          <div key={i.i} style={{ backgroundColor: "tomato" }}>
            {k}
          </div>
        ))}
        {/* <PostText
          key={1}
          // data-grid={{ x: 3, y: 0, w: 3, h: 1 }}
        />
        <PostText
          key={4}
          // data-grid={{ x: 0, y: 0, w: 3, h: 2 }}
        /> */}
        {/* <PostImage
          key={2}
          data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}
        />
        <PostText
          key={3}
          data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}
        />
        <PostText
          key={4}
          data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}
        />
        <PostText
          key={5}
          data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}
        /> */}
      </ReactGridLayout>
    </Wrapper>
  );
};

export default Exhibition;
