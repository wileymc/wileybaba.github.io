import { graphql, Link } from 'gatsby';
import React from 'react';

import styled from 'styled-components';
import Layout from '../components/layout';
import PostListing from '../components/PostListing';
import SEO from '../components/seo';

const Style = styled.div`
  a {
    color: ${(props) => props.theme.colors.pink};
  }
`;

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Work" />
      <Style>
        <p>
          <a href="https://legalpad.io">
            <strong>Legalpad</strong>
          </a>{' '}
          is streamlining the immigration process for global talent with
          sophisticated petition building software. We have helped hundreds of
          startups tackle the nuanced and stubborn processes behind US work visa
        </p>

        <p>
          <a href="https://populist.us">
            <strong>Populist</strong>
          </a>{' '}
          is an ambitious project that is working to connect people to their
          local, state, and federal governments. We are driving civic engagement
          and working to enable a more modern and just democracy for voters,
          organizations, and politicians.
        </p>

        <p>
          <a href="https://studioartsboulder.org">
            <strong>Studio Arts Boulder</strong>
          </a>{' '}
          runs the Pottery Lab, a community art studio where I volunteer based
          in Boulder, Colorado. Our major focus is education and the
          advancedment of the studio arts.
        </p>
      </Style>
    </Layout>
  );
};

export default BlogPage;
