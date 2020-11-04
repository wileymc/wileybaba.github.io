import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Card } from '../components/base';
import Video from '../components/video';

const CardGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    grid-gap: 1rem;
  }
`;

export default function ArtPage() {
  const data = useStaticQuery(graphql`
    query ArtPageImages {
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
      <CardGrid>
        {data.allFile.edges.map((image) => (
          <Card key={Math.random()} className="art">
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split('.')[0]}
              style={{ width: 'auto' }}
            />
            <div>
              <h1>Collaborative mural in Anjuna</h1>
              <h2>Red Door Hostel - Goa, India</h2>
            </div>
          </Card>
        ))}
        <Card className="art">
          <Video
            videoSrcURL="https://www.youtube.com/embed/IaXfVOYv7Kc?rel=0;&autoplay=1&mute=1&loop=1&controls=0&modestbranding&showinfo=0"
            videoTitle="Tripple Handle Swirly"
          />
          <div>
            <h1>Tripple Handle Swirly</h1>
            <h2>Red and white stoneware</h2>
          </div>
        </Card>
      </CardGrid>
    </Layout>
  );
}
