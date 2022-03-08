import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";

import Header from "./header";
import Footer from "./footer";

import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

import "./styles/normalize.css";
import "./styles/global.css";
import "./styles/prism-dark.css";

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  transition: all 0.5s ease-out;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: inherit;
    text-decoration: underline dotted dodgerblue;

    transition: all 0.3s ease-out;
    &:hover {
      color: ${(props) => props.theme.colors.blueLight};
    }
  }
  font-size: 1rem;

  :is(h1, h2, h3, h4, h5, h6) {
    margin-top: 2rem;
  }

  blockquote:not(.twitter-tweet) {
    margin-inline-start: 10px;

    border-left: 2px solid ${(props) => props.theme.colors.pink};
    padding: 0rem 1rem;
    font-style: italic;
    font-size: 14px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
`;

const Page = styled.div`
  margin: 3rem auto;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 48rem;
  }
`;

const Layout = ({ noHeader = false, noFooter = false, children }) => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <ThemeProvider theme={themeContext.isDark ? darkTheme : lightTheme}>
      <Container className={themeContext.isDark ? "dark" : "light"}>
        <Page>
          {!noHeader && (
            <Header
              isDark={themeContext.isDark}
              toggleTheme={themeContext.toggleDark}
            />
          )}
          <main>{children}</main>
          {!noFooter && <Footer />}
        </Page>
      </Container>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
