import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { HelmetProvider } from 'react-helmet-async';

import Header from './header';
import Footer from './footer';

import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

import './styles/normalize.css';
import './styles/global.css';
import './styles/prism-dark.css';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  transition: all 0.5s ease-out;
  a {
    color: inherit;
    text-decoration: underline dotted dodgerblue;

    transition: all 0.3s ease-out;
    &:hover {
      color: ${(props) => props.theme.colors.blueLight};
    }
  }
  font-size: 1rem;

  blockquote:not(.twitter-tweet) {
    border-left: 2px solid ${(props) => props.theme.colors.pink};
    padding: 0rem 2rem;
    font-style: italic;
  }
`;

const Page = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 1rem;
`;

const Layout = ({ children }) => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <HelmetProvider>
      <ThemeProvider theme={themeContext.isDark ? darkTheme : lightTheme}>
        <Container className={themeContext.isDark ? 'dark' : 'light'}>
          <Page>
            <Header
              isDark={themeContext.isDark}
              toggleTheme={themeContext.toggleDark}
            />
            <main>{children}</main>
            <Footer />
          </Page>
        </Container>
      </ThemeProvider>
    </HelmetProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
