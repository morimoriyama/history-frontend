import * as React from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Header from "./components/Header";

const Wrapper = styled.div`
  height: 100vh;

  > footer {
    font-size: 14px;
    color: #888;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

const Template: React.FC<
  RouteComponentProps & {
    render(): React.ReactNode;
  }
> = props => {
  return (
    <Wrapper>
      <Header history={props.history} location={props.location} />
      {props.render()}
      <footer>©️ {new Date().getFullYear()} historyapp</footer>
    </Wrapper>
  );
};

export default withRouter(Template);
