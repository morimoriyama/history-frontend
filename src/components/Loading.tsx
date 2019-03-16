import * as React from "react";
import styled, { css } from "styled-components";

type WrapperProps = {
  isShowing: boolean;
};
const Wrapper = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;

  &,
  * {
    transition: all 1s cubic-bezier(0.78, -0.73, 0.59, 0.99);
  }

  > .inner {
    > .clock {
      position: relative;
      height: 64px;
      width: 64px;
      background-color: #fff;
      border: 8px solid #222;
      border-radius: 9999px;

      .center {
        position: absolute;
        height: 6px;
        width: 6px;
        background-color: #222;
        border-radius: 9999px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }

      &::before {
        content: "";
        height: 44px;
        width: 6px;
        border-radius: 999px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-image: linear-gradient(
          to bottom,
          #222,
          #222 50%,
          transparent 50%,
          transparent
        );
        animation: spin 0.75s linear infinite;
      }

      &::after {
        content: "";
        height: 36px;
        width: 6px;
        border-radius: 999px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        background-image: linear-gradient(
          to bottom,
          #222,
          #222 50%,
          transparent 50%,
          transparent
        );
        animation: spin 8s linear infinite;
      }
    }

    > .loading {
      font-size: 14px;
      color: #222;
      margin-top: 8px;
    }
  }

  ${(props: WrapperProps) =>
    !props.isShowing &&
    css`
      opacity: 0;
      visibility: hidden;
      transform: translateY(-16px);
    `}

  @keyframes spin {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Loading: React.FC<{
  isShowing: boolean;
}> = props => {
  return (
    <Wrapper isShowing={props.isShowing}>
      <div className="inner">
        <div className="clock">
          <div className="center" />
        </div>
        <div className="loading">Loading ..</div>
      </div>
    </Wrapper>
  );
};

export default Loading;
