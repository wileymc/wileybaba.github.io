import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that has not been coded for... the existential crisis.</p>
  </Layout>
);

export default NotFoundPage;
