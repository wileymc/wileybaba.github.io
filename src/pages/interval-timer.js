import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="thank you" />

    <h1 style={{ textAlign: 'center' }}>Interval Timer - Ad Free.</h1>
    <p>
      A simple, yet powerful tool for high intensity interval training. Or
      cooking. Or anything that uses a timer and you like these colors better
      than your iPhones stock timer.
    </p>
  </Layout>
);

export default IndexPage;
