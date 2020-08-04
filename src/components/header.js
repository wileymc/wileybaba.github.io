import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Icon from './icon'

const links = [
  {
    title: 'MENU',
    href: '/menu',
  },
  {
    title: 'RESERVATIONS',
    href: '/reservations',
  },
]

const Container = styled.div`
  max-width: 100vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.background};
  transition: all 0.5s ease-out;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textColor};
  }
  h1 {
    font-size: 6vw;
  }
`

const Links = styled.div`
  list-style-type: none;
  display: flex;
  cursor: default;
`

const LinksItem = styled.li`
  padding: 0;
  cursor: pointer;
  color: ${props => props.theme.colors.textColor};
  user-select: none;
  margin-right: 2rem;
`

const Header = ({ isDark, setIsDark }) => (
  
  <Container>
    <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
      <h1>puerta cerrada denver</h1>
    </Link>
    <Links>
      {links.map(link => (
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
    </Links>
  </Container>
)

export default Header
