import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const FancyBox = styled.div` 
  box-shadow: inset 0 0 10px #000000;
  padding: 1rem 2rem;
  width: fit-content;
  border-radius: 8px;
  a {
    margin-left: 1rem;
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="Reservations" />
    <h1>reservations</h1>
    <p>Puerta Cerrada offers limited reservations each week for parties of 6 or more.</p>
    <FancyBox><p>For reservations text: <a href="tel:720-513-2233">(720) 513-2233</a></p></FancyBox>
    <p>When you text us, please include:</p>
    <ul>
      <li>desired reservation date and time</li>
      <li>group size</li>
      <li>any dietary restrictions</li>
    </ul>
  </Layout>
)

export default ContactPage
