import * as React from "react";
import { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import api from "./Api";
import { getSearchObj } from "./utils";

const Wrapper = styled.div`
  padding: 100px 0;
  height: 100%;
  text-align: center;

  > .inner {
    border: 1px solid #ccc;
    border-radius: 2px;
    width: 400px;
    margin: auto;
    padding: 40px 0 48px;

    > h1 {
      font-size: 40px;
    }

    > .open-your-history {
      font-size: 14px;
      margin-bottom: 24px;
      margin-top: -2px;
    }

    > a {
      > img {
        width: 200px;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

const Login: React.FC<RouteComponentProps> = props => {
  useEffect(() => {
    const code: string = getSearchObj(window.location.search).code;

    if (code == null) return;

    api.auth({ code }).then(res => {
      localStorage.setItem("slackAccessToken", res.access_token);
      localStorage.setItem("teamName", res.team_name);
      props.history.push("/");
    });
  }, []);

  return (
    <Wrapper>
      <div className="inner">
        <h1>Log In</h1>
        <div className="open-your-history">Open Your History</div>
        <a href="https://slack.com/oauth/authorize?scope=users:read,channels:history,channels:read&client_id=2595056677.576579488432">
          <img src="https://api.slack.com/img/sign_in_with_slack@2x.png" />
        </a>
      </div>
    </Wrapper>
  );
};

export default withRouter(Login);
