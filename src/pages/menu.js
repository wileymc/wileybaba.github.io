import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const MenuContainer = styled.div` 
  border: 3px solid ${props => props.theme.colors.textColor};
  border-radius: 6px;
  padding: 2rem 3rem;
  text-align: center;
  width: auto;
  max-width: 36rem;
  box-shadow: inset 0 0 8px;

  h2 {
    margin: 0;
    font-family: "Lemonada"
  }
`

const MenuItem = styled.div`
  margin-bottom: 2rem;
`

const WorkPage = () => (
  <Layout>
    <SEO title="Menu" />
    <h1>Menu</h1>
    <div style={{width: "auto", display: "flex", justifyContent: "center"}}>
      <MenuContainer>
        <MenuItem>
          <h2>snack</h2>
          <strong>game hen - lemon - rosemary</strong>
        </MenuItem>
        <MenuItem>
          <h2>soup</h2>
          <strong>watermelon gazpacho</strong>
        </MenuItem>
        <MenuItem>
          <h2>appetizer</h2>
          <strong>sourdough - tomato - olive - salt</strong>
        </MenuItem>
        <MenuItem>
          <h2>salad</h2>
          <strong>celeriac - pomegranate - citrus - honey</strong>
        </MenuItem>
        <MenuItem>
          <h2>main</h2>
          <strong>wagyu - chimichurri</strong>
        </MenuItem>
        <MenuItem>
          <h2>palate cleanser</h2>
          <strong>pickled vegetables</strong>
        </MenuItem>
        <MenuItem>
          <h2>sweets</h2>
          <strong>fennel - sweet cream - vermouth</strong>
        </MenuItem>
      </MenuContainer>
    </div>
  </Layout>
)

export default WorkPage
