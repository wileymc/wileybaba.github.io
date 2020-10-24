import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Card } from '../components/base';

export default function ArtPage() {
  return (
    <Layout>
      <SEO title="Tools" />
      <Card>
        <img src="https://via.placeholder.com/150" />
        <section>TEXT AND SHIT</section>
      </Card>
    </Layout>
  );
}
