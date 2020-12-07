import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import PostListing from '../components/PostListing';
import SEO from '../components/seo';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="blog" />
    <PostListing postEdges={data.allMarkdownRemark.edges} />
  </Layout>
);

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false } } }
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
