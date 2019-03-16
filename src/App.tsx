import "ress";
import * as React from "react";
import { createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Exhibition from "./Exhibition";
import Template from "./Template";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  body {
      font-family: "Avenir next", 'Noto Sans JP', sans-serif;
      color: #444;
      font-size: 16px;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Template
        render={() => (
          <>
            <Header />
            <Router>
              <Switch>
                <Route exact path="/" component={Exhibition} />
              </Switch>
            </Router>
          </>
        )}
      />
    </>
  );
};

export default App;
