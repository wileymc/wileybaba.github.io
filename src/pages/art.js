import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Card } from '../components/base';

export default function ArtPage() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "art" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Tools" />
      {data.allFile.edges.map((image) => (
        <Card>
          <Img
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split('.')[0]}
            style={{ width: 500 }}
          />
          <div>
            <h1>Collaborative mural at Red Door Hostel in Anjuna</h1>
            <h2>Goa, India</h2>
          </div>
        </Card>
      ))}
    </Layout>
  );
}
