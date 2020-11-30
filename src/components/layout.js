import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import Header from './header';
import Footer from './footer';

import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

import './styles/normalize.css';
import './styles/global.css';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  transition: all 0.5s ease-out;
  a {
    color: inherit;
    transition: all 0.5s ease-out;
    &:hover {
      color: ${(props) => props.theme.colors.blue};
    }
    text-decoration: none;
  }
  font-size: 1rem;
`;

const Page = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 1rem;
`;

const Layout = ({ children }) => {
  const themeContext = useContext(ThemeManagerContext);
  return (
    <ThemeProvider theme={themeContext.isDark ? darkTheme : lightTheme}>
      <Container>
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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
