/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Markdown = styled.main`
  li {
    margin: 0.25rem 0;
  }
  p + ul {
    margin-top: -1rem;
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title="wiley mckay conte" />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 style={{ marginBottom: 0 }}>{frontmatter.title}</h1>
          <small>{frontmatter.date}</small>
          <Markdown dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
