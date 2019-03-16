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
import Loading from "./components/Loading";

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
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyle />

      <Loading isShowing={isLoading} />
      <Template
        render={() => (
          <Router>
            <Switch>
              <Route exact path="/" component={Exhibition} />
            </Switch>
          </Router>
        )}
      />
    </>
  );
};

export default App;
