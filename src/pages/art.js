import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Card, Tag } from '../components/base';
import Swirly01 from '../videos/swirly01.mp4';
import YouTube from '../components/YouTube';
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
  const artImages = useStaticQuery(graphql`
    query {
      goaMural: file(relativePath: { eq: "art/goa_mural.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      spaceMonkey: file(relativePath: { eq: "art/space_monkey.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Art" />
      <CardGrid>
        <Card className="art">
          <Img
            fluid={artImages.goaMural.childImageSharp.fluid}
            alt="mural image"
            style={{ width: 'auto' }}
          />
          <div>
            <h1>Collaborative mural in Anjuna</h1>
            <h2>Red Door Hostel - Goa, India</h2>
          </div>
        </Card>
        <Card className="art">
          <Video
            source={Swirly01}
            showControls={false}
            filter="brightness(160%)"
          />
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <h1>Tripple Handle Swirly</h1>
              <Tag>FOR SALE</Tag>
            </div>
            <h2>Red and white stoneware</h2>
          </div>
        </Card>
        <Card className="art">
          <Img
            fluid={artImages.spaceMonkey.childImageSharp.fluid}
            alt="mural image"
            style={{ width: 'auto' }}
          />
          <div>
            <h1>Space Monkey</h1>
            <h2>Ink and watercolor</h2>
          </div>
        </Card>
      </CardGrid>
    </Layout>
  );
}
