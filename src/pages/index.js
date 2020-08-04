import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import styled from 'styled-components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>
    <p>
      We invite you to join us for a clandestine dining experience in the heart
      of Whittier, Denver's oldest and most diverse historic neighborhood.
    </p>
    <p>
      As our name implies, Puerto Cerrado is a closed door dining establishment. In other words, we welcome guests
      into our home for a unique culinary experience on a reservation only basis. This concept, popularized in Buenos Aires, Argentina,
      lends itself to unparalleled culinary intimacy.
    </p>
  </Layout>
)

export default IndexPage
