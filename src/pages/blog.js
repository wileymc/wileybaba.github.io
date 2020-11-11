import { graphql, Link } from 'gatsby';
import React from 'react';

import styled from 'styled-components';
import Layout from '../components/layout';
import PostListing from '../components/PostListing';
import SEO from '../components/seo';

const FancyBox = styled.div`
  box-shadow: inset 0 0 10px #000000;
  padding: 1rem 2rem;
  width: fit-content;
  border-radius: 8px;
  p {
    font-size: 1em;
    line-height: 1em;
    margin: 0;
    color: ${(props) => props.theme.colors.pink};
  }
`;

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <FancyBox>
      {/* <h2>Computer science</h2> */}
      <p>Its been a while, but here are some of my old posts.</p>
    </FancyBox>
    <PostListing postEdges={data.allMarkdownRemark.edges} />
  </Layout>
);

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
          }
        }
      }
    }
  }
`;
export default BlogPage;
