import * as React from "react";
import styled from "styled-components";
import { History, Location } from "history";

const Wrapper = styled.header`
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 9999;
  justify-content: space-between;
  padding: 0 40px;

  .logo {
    font-size: 32px;
    font-weight: 700;
    color: #222;

    > .icon {
      font-size: 0.8em;
      margin-right: 4px;
    }
  }

  .logout {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-2px);
    transition: all 0.1s ease-out;
  }

  &:hover {
    .logout {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const Header: React.FC<{ history: History; location: Location }> = props => {
  const logout = () => {
    props.history.push("/auth");
    localStorage.removeItem("slackAccessToken");
    localStorage.removeItem("teamName");
  };

  return (
    <Wrapper>
      <div className="logo">
        <span className="icon">🕑</span>HISTORY
      </div>
      {!location.pathname.includes("/auth") && (
        <button className="logout" onClick={logout}>
          logout
        </button>
      )}
    </Wrapper>
  );
};

export default Header;
