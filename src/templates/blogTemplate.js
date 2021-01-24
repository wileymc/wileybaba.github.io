/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Markdown = styled.main`
  li {
    margin: 0.25rem 0;
  }
  p + ul {
    /* margin-top: -1rem; */
  }

  h2 {
    margin-top: 2rem;
  }

  p {
    font-weight: 300;
  }
  strong {
    font-weight: 600;
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, excerpt, html } = markdownRemark;
  const image = frontmatter.image
    ? frontmatter.image.childImageSharp.resize
    : null;

  // make all links open in new tab
  useEffect(() => {
    const anchors = document.querySelectorAll('a');
    anchors.forEach((a) => {
      a.setAttribute('target', '__blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });
  }, []);

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        article
        description={excerpt}
        image={image}
      />
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
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
