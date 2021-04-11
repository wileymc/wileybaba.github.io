import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Style = styled.div`
  a {
    color: ${(props) => props.theme.colors.pink};
    &:hover {
      color: #ff73a9;
    }
    text-decoration: none;
  }
`;

const BlogPage = () => (
  <Layout>
    <SEO title="work" />
    <Style>
      <p>
        <a href="https://legalpad.io">
          <strong>Legalpad</strong>
        </a>{' '}
        is streamlining the immigration process for global talent with
        sophisticated petition building software. We have helped hundreds of
        startups tackle the nuanced and stubborn processes behind US work visas.
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
        runs the Pottery Lab, a community art studio where I volunteer based in
        Boulder, Colorado. Our major focus is education and the advancedment of
        the studio arts.
      </p>

      <p>
        <a href="https://apps.apple.com/us/app/gap-timer/id1530987670">
          <strong>Gap Timer</strong>
        </a>{' '}
        is a simple yet powerful iOS app for high intensity interval training. I
        wasn't happy with existing interval timers available on the App Store,
        so I build my own.
      </p>
    </Style>
  </Layout>
);

export default BlogPage;
