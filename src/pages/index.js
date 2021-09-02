import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="website" />
    <p>
      <strong>Welcome to my website.</strong> I’m a software developer with a
      background in economics and ecological agriculture. I am fascinated by
      human-computer interaction and I enjoy building things things that help
      people interface with the real world. I also make pottery and music when
      I’m not writing code or enjoying the great outdoors. Currently, I am
      building the premiere live concert streaming platform with{' '}
      <a href="https://dreamstage.live">Dreamstage</a>. Please reach out to me
      on one of the channels below if you’d like to connect.
    </p>
  </Layout>
);

export default IndexPage;
