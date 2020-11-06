import { Link } from 'gatsby';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Icon from './icon';

const links = [
  {
    title: 'CODE',
    href: 'https://github.com/wileybaba',
  },
  {
    title: 'ART',
    href: '/art',
  },
  {
    title: 'SHOP',
    href: 'https://wiley.bigcartel.com',
  },
  {
    title: 'BOOKLIST',
    href: '/books',
  },
];

const secondaryLinks = [
  {
    title: 'BUY ME A COFFEE',
    href: 'https://www.buymeacoffee.com/wiley',
  },
  {
    title: 'BLOG',
    href: '/blog',
  },
];

const Container = styled.div`
  @media only screen and (min-width: 600px) {
    margin-top: 6rem;
  }
  max-width: fit-content;
  height: 4rem;
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 10vh;
  grid-template-areas:
    'logo header'
    'logo mainLinks'
    'logo secondaryLinks';
  background-color: ${(props) => props.theme.colors.background};
  transition: all 0.5s ease-out;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor};
  }
  h1 {
    grid-area: header;
    margin: 0;
    font-size: 3rem;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    letter-spacing: 0.1rem;
    background: linear-gradient(
      92.05deg,
      dodgerblue 12.09%,
      mediumspringgreen 42.58%,
      #ff7170 84.96%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }

  @media only screen and (max-width: 321px) {
    nav {
      font-size: 1.2rem;
    }
  }
`;

const RoboLogo = styled.img`
  grid-area: logo;
  height: 100px;
  height: 100px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Links = styled.nav`
  grid-area: mainLinks;
  list-style-type: none;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 200;
  cursor: default;
`;

const SecondaryLinks = styled.nav`
  grid-area: secondaryLinks;
  list-style-type: none;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: default;
  font-size: 1.5rem;
  font-weight: 700;

  li {
    &:first-child {
      color: dodgerblue;
      &:hover {
        color: #5188ef;
      }
    }
    &:nth-child(2) {
      color: mediumspringgreen;
      &:hover {
        color: palegreen;
      }
    }
  }
`;

const RoboBrand = () => {
  const themeContext = useContext(ThemeContext);

  return <RoboLogo src={themeContext.robo} />;
};

const LinksItem = styled.li`
  padding: 0;
  cursor: pointer;
  user-select: none;
  margin-right: 1rem;
  color: ${(props) =>
    props.active ? props.theme.colors.pink : props.theme.colors.textColor};
  &:hover {
    color: ${(props) => props.theme.colors.pink};
  }
  transition: color 0.15s cubic-bezier(0.6, 0, 0.85, 0.72);
  -webkit-transition: color 0.15s cubic-bezier(0.6, 0, 0.85, 0.72);
`;

const Header = ({ isDark, setIsDark }) => {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <Container>
      <RoboBrand />
      <div style={{ marginTop: '-0.3rem' }}>
        <Link
          style={{
            color: 'inherit',
            textDecoration: 'none',
            gridArea: 'header',
          }}
          to="/"
        >
          <h1>WILEY</h1>
        </Link>
        <Links>
          {links.map((link) => (
            <LinksItem key={link.href} active={pathname.includes(link.href)}>
              <Link
                style={{ color: 'inherit', textDecoration: 'none' }}
                to={link.href}
              >
                {link.title}
              </Link>
            </LinksItem>
          ))}
        </Links>
        <SecondaryLinks>
          {secondaryLinks.map((link) => (
            <LinksItem key={link.href}>
              <Link
                style={{ color: 'inherit', textDecoration: 'none' }}
                to={link.href}
              >
                {link.title}
              </Link>
            </LinksItem>
          ))}
          <Icon isDark={isDark} setIsDark={setIsDark} />
        </SecondaryLinks>
      </div>
    </Container>
  );
};

export default Header;
